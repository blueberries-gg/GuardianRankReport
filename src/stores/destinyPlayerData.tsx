import { atom, map, WritableAtom } from "nanostores";
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
} from "bungie-api-ts/destiny2";
import { OwnsExpansion } from "../utils/Profiles";
import { IsDestinyResponseValid, MapSetIntersection } from "../utils/common";
import { IActivityAndMode, IDisplayActivity, mapActivitiesAndModeByHash } from "../utils/activities";
import { ModeTypeEN, activitiesEN } from "../utils/enumStrings";
import { ExactSearchRequest, UserInfoCard, UserSearchPrefixRequest, searchByGlobalNamePost } from "bungie-api-ts/user";
import { getCommonSettings, getGlobalAlerts } from "bungie-api-ts/core";
import { DestinyActivity } from "../enums/DestinyActivity";
import { ModeType } from "../enums/ModeType";
import { ActivityType } from "../enums/ActivityType";

export const healthStatus = atom(true);
export const DestinyEnabled = atom(true);
export const CurrentPlayerProfile : WritableAtom<UserInfoCard>= atom({})
export const healthStatusReason = atom("No alert for the moment, you should not be seeing this");

async function $http(config: HttpClientConfig) {
	let url = new URL(config.url);
	url.search = new URLSearchParams(config.params).toString();

	let headers: HeadersInit = {};
	headers["X-API-Key"] = import.meta.env.PUBLIC_BUNGIE_API_KEY;

	return await fetch(url, {
		method: config.method,
		body: config.body === undefined ? undefined : JSON.stringify(config.body),
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
		if (IsDestinyResponseValid(r)) {
			DeletedCharacters = r.Response.characters.filter((c) => c.deleted).map((c) => c.characterId);
			Characters = r.Response.characters.filter((c) => !c.deleted).map((c) => c.characterId);
			AllCharacters = r.Response.characters.map((c) => c.characterId);
		} else allResponsesGood = false;
	});

	let ownedAcivities: Set<number>;
	let activeActivities: Map<number, IActivityAndMode>;
	let allActiveActivities: Set<number>;

	let profileInfoResponse: Promise<void | ServerResponse<DestinyProfileResponse>> = getProfile($http, {
		components: [
			DestinyComponentType.Profiles,
			//DestinyComponentType.Characters,
			DestinyComponentType.CharacterActivities, // Access to Activities
			DestinyComponentType.Records, //Emblems and collections
		],
		destinyMembershipId: destinyMembershipId.toString(),
		membershipType: membershipType,
	}).then(async (r) => {
		if (IsDestinyResponseValid(r)) {
			CurrentPlayerProfile.set(r.Response.profile.data!.userInfo);
			//Characters = profileInfoResponse.Response.profile.data!.characterIds;
			let activeDestinyActivities = r.Response.profile
				.data!.characterIds.map((character) => r.Response.characterActivities.data![character].availableActivities)
				.flatMap((activityArray) => activityArray);
			allActiveActivities = new Set(activeDestinyActivities.map((activity) => activity.activityHash));
			ownedAcivities = new Set(activeDestinyActivities.filter((a) => a.canLead || a.canJoin).map((activity) => activity.activityHash));
			activeActivities = MapSetIntersection(allActiveActivities, mapActivitiesAndModeByHash);
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
		if (IsDestinyResponseValid(aggregateActivityResponse)) {
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
			.filter((a) => a.hash == hash)
			.map((a) => a.activityCompletions)
			.reduce((p, a) => p + a, 0);
		aggregateActivities.set(hash, total);
	});

	let activityCompletions: Map<keyof typeof DestinyActivity, IDisplayActivity> = new Map<keyof typeof DestinyActivity, IDisplayActivity>();
	aggregateActivities.forEach((value, key) => {
		if (value == 0) return;
		let activity = mapActivitiesAndModeByHash.get(key)!;
		let activityKey = activity.Activity;
		let displayActivity = activityCompletions.get(activityKey) ?? {
			Activity: activity.Activity,
			Completions: new Map<keyof typeof ModeType, Map<keyof typeof ModeType, number>>(),
		};

		let ModeCompletionMap = displayActivity.Completions.get(activity.Mode) ?? new Map<keyof typeof ModeType, number>();
		ModeCompletionMap.set(activity.UnderlyingMode, ModeCompletionMap.get(activity.UnderlyingMode) ?? 0 + value);

		displayActivity.Completions.set(activity.Mode, ModeCompletionMap);

		activityCompletions.set(activityKey, displayActivity);
	});

	return activityCompletions;
};

export const GetPlayerInformation = async (name: string) => {
	let namesplit = name.split("#");
	if (namesplit.length == 1) {
		return await GetPlayerByPrefix(name);
	} else return await GetPlayerByFullName(namesplit[0], parseInt(namesplit[1], 10));
};

async function GetPlayerByFullName(name: string, code: number) {
	let usersResponse = await searchDestinyPlayerByBungieName($http, { membershipType: BungieMembershipType.All }, {
		displayName: name,
		displayNameCode: code,
	} as ExactSearchRequest);
	if (IsDestinyResponseValid(usersResponse)) {
		return [{
			bungieNetMembershipId: usersResponse.Response[0]?.membershipId,
			membershipType: usersResponse.Response[0]?.membershipType,
			name: `${usersResponse.Response[0].bungieGlobalDisplayName}#${("000" + usersResponse.Response[0].bungieGlobalDisplayNameCode).slice(-4)}`,
			membershipTypes: usersResponse.Response[0]?.applicableMembershipTypes[0],
		}];
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

		if (IsDestinyResponseValid(usersResponse)) {
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
					.filter((x) => x.bungieNetMembershipId !== undefined && x.membershipType !== undefined)
			);
		} else hasMore = false;
	}
	return users;
}

async function getHealhStatus() {
	let destinySettings = await getCommonSettings($http);
	let destinyEnabled = false;
	if (IsDestinyResponseValid(destinySettings)) destinyEnabled = destinySettings.Response.systems["Destiny2"].enabled;
	if (!destinyEnabled) {
		healthStatusReason.set("Destiny is offline");
		let globalAlert = getGlobalAlerts($http, {});
		if (IsDestinyResponseValid(destinySettings)) healthStatusReason.set((await globalAlert).Response[0].AlertHtml);
		healthStatus.set(false);
	}
	DestinyEnabled.set(destinyEnabled);
}

export const gp = async () => {
	getHealhStatus();
	//console.log(await GetPlayerInformation("icicle"));
	await GetInformationForMember(4611686018475976486n, BungieMembershipType.TigerSteam);
	//await GetInformationForMember(4611686018527458332n, BungieMembershipType.TigerSteam);
};
async function FetchSuccess(r: Response | undefined): Promise<any> {
	if (DestinyEnabled.get()) healthStatusReason.set("");
	healthStatus.set(true);
	return await r?.json();
}

function FetchErrorProcess(e: Error): Promise<any> {
	healthStatusReason.set(e.message);
	healthStatus.set(false);
	return new Promise((resolve) => {
		resolve({ ErrorCode: -1, Message: e.message });
	});
}
