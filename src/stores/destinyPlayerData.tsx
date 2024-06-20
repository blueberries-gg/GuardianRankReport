import { atom, map, MapStore, WritableAtom } from "nanostores";
import {
	BungieMembershipType,
	DestinyComponentType,
	getProfile,
	DestinyProfileResponse,
	HttpClientConfig,
	ServerResponse,
	HttpClient,
	getDestinyManifest,
	DestinyGameVersions,
	getHistoricalStatsForAccount,
	DestinyHistoricalStatsPerCharacter,
	DestinyStatsGroupType,
	DestinyHistoricalStatsAccountResult,
	getDestinyAggregateActivityStats,
	searchDestinyPlayerByBungieName,
	DestinyRecordComponent,
	DestinyRecordState,
	DestinyCharacterComponent,
	getDestinyEntityDefinition,
	DestinyInventoryItemDefinition,
} from "bungie-api-ts/destiny2";
import { OwnsExpansion } from "../utils/Profiles";
import { IsDestinyResponseValid, StringsKeysOf, MapSetIntersection, ReorderMap, filterObject, objectAsEntry, Entry } from "../utils/common";
import { IActivity, IActivityAndMode, IDisplayActivity, mapActivities, mapActivitiesAndModeByHash, mapRaids } from "../utils/activities";
import { ModeTypeEN, activitiesEN } from "../utils/enumStrings";
import { ExactSearchRequest, UserInfoCard, UserSearchPrefixRequest, searchByGlobalNamePost } from "bungie-api-ts/user";
import { getCommonSettings, getGlobalAlerts } from "bungie-api-ts/core";
import { ActiveScoredNightFalls, DestinyActivity } from "../enums/DestinyActivity";
import { ModeType } from "../enums/ModeType";
import { ActivityType } from "../enums/ActivityType";

export interface PlayerBadgeData {
	UserCard: UserInfoCard;
	LatestCharacter: DestinyCharacterComponent;
	CurrentGuardianRank: number;
	LifetimeHighestGuardianRank: number;
	RenewedGuardianRank: number;
}

export interface PlayerInfo {
	info: PlayerBadgeData;
	activities: Map<keyof typeof DestinyActivity, IDisplayActivity>;
}

let mapCurrentActiveActivities = new Map<string, IActivity>(Object.entries(filterObject(mapActivities, ([, v]) => v.Active == true))) as Map<
	keyof typeof DestinyActivity,
	IActivity
>;
let currentActiveActivities = Array.from(mapCurrentActiveActivities.keys());
let emptyDisplayActivities = new Map<keyof typeof DestinyActivity, IDisplayActivity>();
currentActiveActivities.forEach((k) => {
	emptyDisplayActivities.set(k, {
		Activity: k,
		Type: ActivityType[mapActivities[k]!.Type] as keyof typeof ActivityType,
		Completions: new Map<StringsKeysOf<typeof ModeType>, Map<StringsKeysOf<typeof ModeType>, number>>(),
		isActive: true,
	});
});

ActiveScoredNightFalls.forEach((k) => {
	emptyDisplayActivities.set(k, {
		Activity: k,
		Type: ActivityType[mapActivities[k]!.Type] as keyof typeof ActivityType,
		Completions: new Map<StringsKeysOf<typeof ModeType>, Map<StringsKeysOf<typeof ModeType>, number>>(),
		isActive: true,
	});
});


export const healthStatus = atom(true);
export const DestinyEnabled = atom(true);
export const CurrentPlayerProfile: MapStore<PlayerInfo> = map({ activities: emptyDisplayActivities });
export const healthStatusReason = atom("No alert for the moment, you should not be seeing this");
export const healthStatusTitle = atom("Error");

async function $http(config: HttpClientConfig) {
	let url = new URL(config.url);
	url.search = new URLSearchParams(config.params).toString();

	let headers: HeadersInit = {};
	headers["X-API-Key"] = import.meta.env.PUBLIC_BUNGIE_API_KEY;

	return await fetch(url, {
		method: config.method,
		body: config.body == undefined ? undefined : JSON.stringify(config.body),
		headers: headers,
		credentials: "include",
		mode: "cors",
		referrerPolicy: "origin-when-cross-origin",
	})
		.then(FetchSuccess, FetchErrorProcess)
		.catch(FetchErrorProcess);
}

export const GetInformationForMember = async (destinyMembershipId: bigint | string, membershipType: BungieMembershipType | number) => {
	let allResponsesGood: boolean = true;
	let DeletedCharacters: string[] = [];
	let Characters: string[] = [];
	let AllCharacters: string[] = [];

	let HisoricalCharacterResponse: Promise<void | ServerResponse<DestinyHistoricalStatsAccountResult>> = getHistoricalStatsForAccount($http, {
		destinyMembershipId: destinyMembershipId.toString(),
		membershipType: membershipType,
		groups: [DestinyStatsGroupType.None],
	}).then((r) => {
		if (IsDestinyResponseValid(r, getBungieErrorMessage)) {
			DeletedCharacters = r.Response.characters.filter((c) => c.deleted).map((c) => c.characterId);
			Characters = r.Response.characters.filter((c) => !c.deleted).map((c) => c.characterId);
			AllCharacters = r.Response.characters.map((c) => c.characterId);
		} else allResponsesGood = false;
	});

	let ownedAcivities: Set<number>;
	let activeActivities: Map<number, IActivityAndMode>;
	let allActiveActivities: Set<number>;
	let records: {
		[key: number]: DestinyRecordComponent;
	};
	let CharacterRecords: {
		[key: number]: DestinyRecordComponent;
	}[];
	let profileInfoResponse: Promise<void | ServerResponse<DestinyProfileResponse>> = getProfile($http, {
		components: [
			DestinyComponentType.Profiles,
			DestinyComponentType.Characters,
			DestinyComponentType.CharacterActivities, // Access to Activities
			DestinyComponentType.Records, //Emblems and collections
			DestinyComponentType.SocialCommendations,
		],
		destinyMembershipId: destinyMembershipId.toString(),
		membershipType: membershipType,
	}).then(async (r) => {
		if (IsDestinyResponseValid(r, getBungieErrorMessage)) {
			CurrentPlayerProfile.setKey("info", {
				UserCard: r.Response.profile.data!.userInfo,
				LatestCharacter: Object.values(r.Response.characters.data!).sort((x, y) => y!.dateLastPlayed.localeCompare(x!.dateLastPlayed))[0]!,
				CurrentGuardianRank: r.Response.profile.data!.currentGuardianRank,
				LifetimeHighestGuardianRank: r.Response.profile.data!.lifetimeHighestGuardianRank,
				RenewedGuardianRank: (r.Response.profile.data! as any).renewedGuardianRank,
			});
			//Characters = profileInfoResponse.Response.profile.data!.characterIds;
			let activeDestinyActivities = r.Response.profile
				.data!.characterIds.map((character) => r.Response.characterActivities.data![character].availableActivities)
				.flatMap((activityArray) => activityArray);
			allActiveActivities = new Set(activeDestinyActivities.map((activity) => activity.activityHash));
			ownedAcivities = new Set(activeDestinyActivities.filter((a) => a.canLead || a.canJoin).map((activity) => activity.activityHash));
			activeActivities = MapSetIntersection(allActiveActivities, mapActivitiesAndModeByHash);
			records = r.Response.profileRecords.data!.records;
			CharacterRecords = Object.values(r.Response.characterRecords.data!).map((x) => x.records);
		} else allResponsesGood = false;
	});

	await profileInfoResponse;
	await HisoricalCharacterResponse;

	let allAggregateActivitiesArray: {
		hash: number;
		activityCompletions: number;
	}[] = [];
	let allAggregateActivitiesArrayPromises = AllCharacters.map((character) => {
		return getDestinyAggregateActivityStats($http, {
			characterId: character,
			destinyMembershipId: destinyMembershipId.toString(),
			membershipType: membershipType,
		});
	});

	let allAggregateActivitiesArrayResponses = await Promise.all(allAggregateActivitiesArrayPromises);
	allAggregateActivitiesArrayResponses.forEach((aggregateActivityResponse) => {
		if (IsDestinyResponseValid(aggregateActivityResponse, getBungieErrorMessage)) {
			let aggregateActivity = aggregateActivityResponse.Response.activities
				.filter((a) => mapActivitiesAndModeByHash.has(a.activityHash))
				.map((a) => {
					return {
						hash: a.activityHash,
						activityCompletions: a.values["activityCompletions"].basic.value,
					};
				});
			allAggregateActivitiesArray = allAggregateActivitiesArray.concat(aggregateActivity);
		}
	});
	let allAggregateActivitiesHashes = [...new Set(allAggregateActivitiesArray.map((a) => a.hash))];
	let aggregateActivities = new Map<number, number>();
	allAggregateActivitiesHashes.forEach((hash) => {
		let total = allAggregateActivitiesArray
			.filter((a) => a.hash === hash)
			.map((a) => a.activityCompletions)
			.reduce((p, a) => p + a, 0);
		aggregateActivities.set(hash, total);
	});

	let activityCompletions: Map<keyof typeof DestinyActivity, IDisplayActivity> = new Map(emptyDisplayActivities);

	aggregateActivities.forEach((value, key) => {
		if (value === 0) return;
		let activityAndMode = mapActivitiesAndModeByHash.get(key)!;
		let activityKey = activityAndMode.Activity;
		let currentActivity = mapActivities[activityKey];
		let TopLeveActivity = currentActivity;

		if (!currentActivity.TopLevel) {
			activityKey = DestinyActivity[currentActivity.ParentActivity!] as StringsKeysOf<typeof DestinyActivity>;
			TopLeveActivity = mapActivities[activityKey];
		}

		let displayActivity = activityCompletions.get(activityKey);
		let activityType = mapActivities[activityAndMode.Activity].Type;

		if (displayActivity == undefined) {
			displayActivity = {
				Activity: activityKey,
				Type: ActivityType[mapActivities[activityKey]!.Type] as keyof typeof ActivityType,
				Completions: new Map<StringsKeysOf<typeof ModeType>, Map<StringsKeysOf<typeof ModeType>, number>>(),
				isActive: false,
			};
		}

		if (TopLeveActivity.SealHash != undefined) {
			let sealHash = TopLeveActivity.SealHash;
			let record = records[sealHash];
			CharacterRecords.forEach((characterRecords) => {
				if (record == undefined) record = characterRecords[sealHash];
			});

			displayActivity.hasSeal = (record.state & DestinyRecordState.CanEquipTitle) !== 0;
		}

		if (TopLeveActivity.FlawlessHash != undefined) {
			let flawlessHash = TopLeveActivity.FlawlessHash;
			let record = records[flawlessHash];
			CharacterRecords.forEach((characterRecords) => {
				if (record == undefined) record = characterRecords[flawlessHash];
			});

			displayActivity.hasFlawless = !(
				(record.state & DestinyRecordState.RecordRedeemed) === 0 &&
				((record.state & DestinyRecordState.RewardUnavailable) !== 0 ? true : (record.state & DestinyRecordState.ObjectiveNotCompleted) !== 0)
			);
		}

		if (TopLeveActivity.SoloFlawlessHash != undefined) {
			let flawlessHash = TopLeveActivity.SoloFlawlessHash;
			let record = records[flawlessHash];
			CharacterRecords.forEach((characterRecords) => {
				if (record == undefined) record = characterRecords[flawlessHash];
			});

			displayActivity.hasSoloFlawless = !(
				(record.state & DestinyRecordState.RecordRedeemed) === 0 &&
				((record.state & DestinyRecordState.RewardUnavailable) !== 0 ? true : (record.state & DestinyRecordState.ObjectiveNotCompleted) !== 0)
			);
		}

		if (TopLeveActivity.SoloHash != undefined) {
			let flawlessHash = TopLeveActivity.SoloHash;
			let record = records[flawlessHash];
			CharacterRecords.forEach((characterRecords) => {
				if (record == undefined) record = characterRecords[flawlessHash];
			});

			displayActivity.hasSolo = !(
				(record.state & DestinyRecordState.RecordRedeemed) === 0 &&
				((record.state & DestinyRecordState.RewardUnavailable) !== 0 ? true : (record.state & DestinyRecordState.ObjectiveNotCompleted) !== 0)
			);
		}

		if (TopLeveActivity.SealObjectives != undefined) {
			let undefinedSealRecords = TopLeveActivity.SealObjectives?.filter((x) => records[x] == undefined);
			let definedSealRecords = TopLeveActivity.SealObjectives?.filter((x) => records[x] != undefined);
			let uncompleteSealRecords = definedSealRecords.filter(
				(x) =>
					(records[x].state & DestinyRecordState.RecordRedeemed) === 0 &&
					((records[x].state & DestinyRecordState.RewardUnavailable) !== 0
						? true
						: (records[x].state & DestinyRecordState.ObjectiveNotCompleted) !== 0)
			);
			CharacterRecords.forEach((characterRecords) => {
				definedSealRecords = undefinedSealRecords.filter((x) => characterRecords[x] != undefined);
				undefinedSealRecords = undefinedSealRecords.filter((x) => characterRecords[x] == undefined);
				uncompleteSealRecords = uncompleteSealRecords.concat(
					definedSealRecords.filter(
						(x) =>
							(characterRecords[x].state & DestinyRecordState.RecordRedeemed) === 0 &&
							((characterRecords[x].state & DestinyRecordState.RewardUnavailable) !== 0
								? true
								: (characterRecords[x].state & DestinyRecordState.ObjectiveNotCompleted) !== 0)
					)
				);
			});
			uncompleteSealRecords = uncompleteSealRecords.concat(undefinedSealRecords);
			displayActivity.UncompleteObjectives = uncompleteSealRecords;
		}

		if (activityType === ActivityType.Raid || activityType === ActivityType.Dungeon || activityType === ActivityType.ExoticMission) {
			displayActivity.Completions.set("Normal", new Map<StringsKeysOf<typeof ModeType>, number>());
			displayActivity.Completions.set("Master", new Map<StringsKeysOf<typeof ModeType>, number>());
		}

		if (currentActivity.TopLevel) {
			let ModeCompletionMap = displayActivity.Completions.get(activityAndMode.Mode) ?? new Map<StringsKeysOf<typeof ModeType>, number>();
			ModeCompletionMap.set(activityAndMode.UnderlyingMode, ModeCompletionMap.get(activityAndMode.UnderlyingMode) ?? 0 + value);
			displayActivity.Completions.set(activityAndMode.Mode, ModeCompletionMap);
			activityCompletions.set(activityKey, displayActivity);
		} else {
			let ModeCompletionMap = displayActivity.Completions.get(activityKey) ?? new Map<StringsKeysOf<typeof DestinyActivity>, number>();
			ModeCompletionMap.set(activityAndMode.Activity, ModeCompletionMap.get(activityAndMode.Activity) ?? 0 + value);
			displayActivity.Completions.set(activityKey, ModeCompletionMap);
			activityCompletions.set(activityKey, displayActivity);
		}
	});
	console.log(activityCompletions);
	CurrentPlayerProfile.setKey("activities", activityCompletions);
	return activityCompletions;
};

export const GetPlayerInformation = async (name: string) => {
	let namesplit = name.split("#");
	if (namesplit.length === 1) {
		return await GetPlayerByPrefix(name);
	} else return await GetPlayerByFullName(namesplit[0], parseInt(namesplit[1], 10));
};

export const GetDestinyInventoryItemDefinitionEntityDefinition = async (hashIdentifier: number) => {
	let definition = await getDestinyEntityDefinition($http, { entityType: "DestinyInventoryItemDefinition", hashIdentifier });
	if (IsDestinyResponseValid(definition, getBungieErrorMessage)) {
		return definition.Response as DestinyInventoryItemDefinition;
	}
};

async function GetPlayerByFullName(name: string, code: number) {
	let usersResponse = await searchDestinyPlayerByBungieName($http, { membershipType: BungieMembershipType.All }, {
		displayName: name,
		displayNameCode: code,
	} as ExactSearchRequest);
	if (IsDestinyResponseValid(usersResponse, getBungieErrorMessage)) {
		return [
			{
				bungieNetMembershipId: usersResponse.Response[0]?.membershipId,
				membershipType: usersResponse.Response[0]?.membershipType,
				name: `${usersResponse.Response[0].bungieGlobalDisplayName}#${("000" + usersResponse.Response[0].bungieGlobalDisplayNameCode).slice(-4)}`,
				membershipTypes: usersResponse.Response[0]?.applicableMembershipTypes[0],
			},
		];
	}
	return [];
}

async function GetPlayerByPrefix(name: string) {
	let pageNumber = 0;
	let hasMore = true;
	let users: {
		bungieNetMembershipId: string;
		membershipType: BungieMembershipType;
		name: string;
		membershipTypes: BungieMembershipType[];
	}[] = [];

	while (hasMore) {
		let usersResponse = await searchByGlobalNamePost($http, { page: pageNumber }, {
			displayNamePrefix: name,
		} as UserSearchPrefixRequest);

		if (IsDestinyResponseValid(usersResponse, getBungieErrorMessage)) {
			hasMore = usersResponse.Response.hasMore;
			pageNumber++;
			users = users.concat(
				usersResponse.Response.searchResults
					.map((x) => {
						return {
							bungieNetMembershipId: x.destinyMemberships[0]?.membershipId,
							membershipType: x.destinyMemberships[0]?.membershipType,
							name: `${x.bungieGlobalDisplayName}#${("000" + x.bungieGlobalDisplayNameCode).slice(-4)}`,
							membershipTypes: x.destinyMemberships.map((x) => x.membershipType),
						};
					})
					.filter((x) => x.bungieNetMembershipId != undefined && x.membershipType != undefined)
			);
		} else hasMore = false;
	}
	return users;
}

async function getHealhStatus() {
	let destinySettings = await getCommonSettings($http);
	let destinyEnabled = false;
	if (IsDestinyResponseValid(destinySettings, getBungieErrorMessage)) destinyEnabled = destinySettings.Response.systems["Destiny2"].enabled;
	if (!destinyEnabled) {
		healthStatusReason.set("Destiny is offline");
		let globalAlert = getGlobalAlerts($http, {});
		if (IsDestinyResponseValid(destinySettings, getBungieErrorMessage)) healthStatusReason.set((await globalAlert).Response[0].AlertHtml);
		healthStatus.set(false);
	}
	DestinyEnabled.set(destinyEnabled);
}

function getBungieErrorMessage(response: ServerResponse<any>) {
	if ((response.ErrorCode as number) === -1) healthStatusTitle.set(`Internal Error(${response.ErrorStatus})`);
	else healthStatusTitle.set(`Bungie(${response.ErrorStatus})`);

	healthStatusReason.set(`${response.Message}`);
	healthStatus.set(false);
}
export const gp = async () => {
	getHealhStatus();
	//console.log(await GetPlayerInformation("icicle"));
	await GetInformationForMember(4611686018475976486n, BungieMembershipType.TigerSteam);
	//await GetInformationForMember(4611686018527458332n, BungieMembershipType.TigerSteam);
};
async function FetchSuccess(r: Response | undefined): Promise<any> {
	if (DestinyEnabled.get()) {
		healthStatusReason.set("");
		healthStatusTitle.set("");
		healthStatus.set(true);
	}
	return await r?.json();
}

function FetchErrorProcess(e: Error): Promise<any> {
	return new Promise((resolve) => {
		resolve({ ErrorCode: -1, Message: e.message, ErrorStatus: "FetchError" });
	});
}
