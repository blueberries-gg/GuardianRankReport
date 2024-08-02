import { map, MapStore } from "nanostores";
import {
	BungieMembershipType,
	DestinyComponentType,
	getProfile,
	ServerResponse,
	getHistoricalStatsForAccount,
	DestinyStatsGroupType,
	DestinyHistoricalStatsAccountResult,
	getDestinyAggregateActivityStats,
	DestinyRecordComponent,
	DestinyRecordState,
	DestinyCharacterComponent,
	getDestinyEntityDefinition,
	DestinyInventoryItemDefinition,
	DestinyCollectibleComponent,
	DestinyCollectibleState,
	DestinyRecordDefinition,
} from "bungie-api-ts/destiny2";
import { UserInfoCard, } from "bungie-api-ts/user";
import { DestinyActivity } from "../utils/enums/DestinyActivities";
import { ModeType } from "../utils/enums/ModeType";
import { ActivityType } from "../utils/enums/ActivityType";
import { ActiveActivities, ActiveScoredNightFalls } from "../utils/destinyActivities/activeActivities";
import { StringsKeysOf } from "../utils/common";
import { IPlayerActivity, mapActivities, mapActivitiesAndModeByHash } from "../utils/destinyActivities/activities";
import { IsDestinyResponseValid } from "../utils/destinyExtensions/APIExtensions";
import { ExoticCollectibles } from "../utils/destinyActivities/exoticDrops";
import { $http, GetBungieErrorMessage } from "./destinyService";
import { ExoticWeapon } from "../utils/enums/WeaponExotic";

export interface PlayerBadgeData {
	UserCard: UserInfoCard;
	LatestCharacter: DestinyCharacterComponent;
	CurrentGuardianRank: number;
	LifetimeHighestGuardianRank: number;
	RenewedGuardianRank: number;
}

export interface PlayerActivityDetails {
	info: PlayerBadgeData;
	activities: Map<keyof typeof DestinyActivity, IPlayerActivity>;
	collectibles: StringsKeysOf<typeof ExoticWeapon>[];
}

const playerActivitiesCompletions = new Map<StringsKeysOf<typeof DestinyActivity>, IPlayerActivity>();
SetPlayerActivitiesCompletionsBase(playerActivitiesCompletions);

export const CurrentPlayerProfile: MapStore<PlayerActivityDetails> = map({ activities: playerActivitiesCompletions, collectibles: [] });

function SetPlayerActivitiesCompletionsBase(map: Map<StringsKeysOf<typeof DestinyActivity>, IPlayerActivity>) {
	ActiveActivities.forEach((k) => {
		map.set(k as StringsKeysOf<typeof DestinyActivity>, {
			Activity: k as StringsKeysOf<typeof DestinyActivity>,
			Type: ActivityType[mapActivities[k]!.Type] as keyof typeof ActivityType,
			Completions: new Map<StringsKeysOf<typeof ModeType>, Map<StringsKeysOf<typeof ModeType>, number>>(),
			isActive: true,
			dataInitialized: false,
		});
	});

	ActiveScoredNightFalls.forEach((k) => {
		map.set(k, {
			Activity: k,
			Type: ActivityType[mapActivities[k]!.Type] as keyof typeof ActivityType,
			Completions: new Map<StringsKeysOf<typeof ModeType>, Map<StringsKeysOf<typeof ModeType>, number>>(),
			isActive: true,
			dataInitialized: false,
		});
	});
}

function GetRecordStatus(records: { [key: number]: DestinyRecordComponent; }, CharacterRecords: { [key: number]: DestinyRecordComponent; }[], recordHash: number,) {
	let record = records[recordHash];
	CharacterRecords.forEach((characterRecords) => {
		if (record == undefined) record = characterRecords[recordHash];
	});

	return GetRecordConsideredComplete(record);
}

function GetRecordConsideredComplete(record: DestinyRecordComponent) {
	return !(
		(record.state & DestinyRecordState.RecordRedeemed) === 0 &&
		((record.state & DestinyRecordState.RewardUnavailable) !== 0 ? true : (record.state & DestinyRecordState.ObjectiveNotCompleted) !== 0)
	);
}

function CalculateAggregatePlayerCompletions(aggregatePlayerActivitiesCompletions: { hash: number; activityCompletions: number; }[], records: { [key: number]: DestinyRecordComponent; }, CharacterRecords: { [key: number]: DestinyRecordComponent; }[]) {
	const aggregateActivitiesHashes = [...new Set(aggregatePlayerActivitiesCompletions.map((a) => a.hash))];

	const activitiesCompletions = new Map<number, number>();
	aggregateActivitiesHashes.forEach((hash) => {
		const total = aggregatePlayerActivitiesCompletions
			.filter((a) => a.hash === hash)
			.map((a) => a.activityCompletions)
			.reduce((p, a) => p + a, 0);
		activitiesCompletions.set(hash, total);
	});

	const playerCompletions: Map<StringsKeysOf<typeof DestinyActivity>, IPlayerActivity> = new Map<StringsKeysOf<typeof DestinyActivity>, IPlayerActivity>();
	SetPlayerActivitiesCompletionsBase(playerCompletions);


	activitiesCompletions.forEach((value, key) => {
		if (value === 0) return;

		const activityAndMode = mapActivitiesAndModeByHash.get(key)!;
		let activityKey = activityAndMode.Activity;
		const currentActivity = mapActivities[activityKey];
		let TopLevelActivity = currentActivity;

		if (!currentActivity.TopLevel) {
			activityKey = currentActivity.ParentActivity!;
			TopLevelActivity = mapActivities[activityKey];
		}

		let displayActivity = playerCompletions.get(activityKey);
		const activityType = mapActivities[activityAndMode.Activity].Type;

		if (displayActivity == undefined) {
			displayActivity = {
				Activity: activityKey,
				Type: ActivityType[mapActivities[activityKey]!.Type] as keyof typeof ActivityType,
				Completions: new Map<StringsKeysOf<typeof ModeType>, Map<StringsKeysOf<typeof ModeType>, number>>(),
				isActive: false,
				dataInitialized: false,
			};
		}
		if (displayActivity.dataInitialized == false) {
			if (TopLevelActivity.SealHash != undefined)
				displayActivity.hasSeal = GetRecordStatus(records, CharacterRecords, TopLevelActivity.SealHash);

			if (TopLevelActivity.FlawlessHash != undefined)
				displayActivity.hasFlawless = GetRecordStatus(records, CharacterRecords, TopLevelActivity.FlawlessHash);

			if (TopLevelActivity.MasterFlawlessHash != undefined)
				displayActivity.hasMasterFlawless = GetRecordStatus(records, CharacterRecords, TopLevelActivity.MasterFlawlessHash);

			if (TopLevelActivity.SoloFlawlessHash != undefined)
				displayActivity.hasSoloFlawless = GetRecordStatus(records, CharacterRecords, TopLevelActivity.SoloFlawlessHash);

			if (TopLevelActivity.SoloHash != undefined)
				displayActivity.hasSolo = GetRecordStatus(records, CharacterRecords, TopLevelActivity.SoloHash);

			if (TopLevelActivity.SealObjectives != undefined) {
				let undefinedSealRecords = TopLevelActivity.SealObjectives?.filter((x) => records[x] == undefined);
				let definedSealRecords = TopLevelActivity.SealObjectives?.filter((x) => records[x] != undefined);
				let incompleteSealRecords = definedSealRecords.filter((x) => !GetRecordConsideredComplete(records[x]));

				CharacterRecords.forEach((characterRecords) => {
					definedSealRecords = undefinedSealRecords.filter((x) => characterRecords[x] != undefined);
					undefinedSealRecords = undefinedSealRecords.filter((x) => characterRecords[x] == undefined);
					incompleteSealRecords = incompleteSealRecords.concat(
						definedSealRecords.filter((x) => !GetRecordConsideredComplete(characterRecords[x]))
					)
				});

				incompleteSealRecords = incompleteSealRecords.concat(undefinedSealRecords);
				displayActivity.IncompleteObjectives = incompleteSealRecords;
			}

			if (activityType === ActivityType.Raid || activityType === ActivityType.Dungeon || activityType === ActivityType.ExoticMission) {
				displayActivity.Completions.set(ModeType[ModeType.Normal] as keyof typeof ModeType, new Map<StringsKeysOf<typeof ModeType>, number>());
				displayActivity.Completions.set(ModeType[ModeType.Master] as keyof typeof ModeType, new Map<StringsKeysOf<typeof ModeType>, number>());
			}

			displayActivity.dataInitialized = true;
		}

		if (currentActivity.TopLevel) {
			const ModeCompletionMap = displayActivity.Completions.get(activityAndMode.Mode) ?? new Map<StringsKeysOf<typeof ModeType>, number>();
			ModeCompletionMap.set(activityAndMode.UnderlyingMode, (ModeCompletionMap.get(activityAndMode.UnderlyingMode) ?? 0) + value);
			displayActivity.Completions.set(activityAndMode.Mode, ModeCompletionMap);
		} else {
			const ModeCompletionMap = displayActivity.Completions.get(activityKey) ?? new Map<StringsKeysOf<typeof DestinyActivity>, number>();
			ModeCompletionMap.set(activityAndMode.Activity, (ModeCompletionMap.get(activityAndMode.Activity) ?? 0) + value);
			displayActivity.Completions.set(activityKey, ModeCompletionMap);
		}

		playerCompletions.set(activityKey, displayActivity);
	});

	playerCompletions.forEach((displayActivity, key) => {
		if (displayActivity.dataInitialized == false) {
			let activityKey = displayActivity.Activity;
			const currentActivity = mapActivities[activityKey];
			let TopLevelActivity = currentActivity;

			if (!currentActivity.TopLevel) {
				activityKey = currentActivity.ParentActivity!;
				TopLevelActivity = mapActivities[activityKey];
			}
			if (TopLevelActivity.SealHash != undefined)
				displayActivity.hasSeal = false;

			if (TopLevelActivity.FlawlessHash != undefined)
				displayActivity.hasFlawless = false;

			if (TopLevelActivity.SoloFlawlessHash != undefined)
				displayActivity.hasSoloFlawless = false;

			if (TopLevelActivity.MasterFlawlessHash != undefined)
				displayActivity.hasMasterFlawless = false;

			if (TopLevelActivity.SoloHash != undefined)
				displayActivity.hasSolo = false;

			if (TopLevelActivity.SealObjectives != undefined)
				displayActivity.IncompleteObjectives = TopLevelActivity.SealObjectives;

			displayActivity.dataInitialized = true;
		}
		playerCompletions.set(key, displayActivity);
	});
	return playerCompletions;
}

async function GetPlayerCharactersCompletions(AllCharacters: string[], destinyMembershipId: string | bigint, membershipType: number, ProfileRecords: { [key: number]: DestinyRecordComponent; }, CharacterRecords: { [key: number]: DestinyRecordComponent; }[]) {
	const aggregateActivitiesCompletionsPromises = AllCharacters.map((character) => {
		return getDestinyAggregateActivityStats($http, {
			characterId: character,
			destinyMembershipId: destinyMembershipId.toString(),
			membershipType: membershipType,
		});
	});

	const aggregateActivitiesCompletionsResponses = await Promise.all(aggregateActivitiesCompletionsPromises);

	let aggregatePlayerActivitiesCompletions: {
		hash: number;
		activityCompletions: number;
	}[] = [];

	aggregateActivitiesCompletionsResponses.forEach((characterActivitiesResponse) => {
		if (IsDestinyResponseValid(characterActivitiesResponse, GetBungieErrorMessage)) {
			const aggregateActivity = characterActivitiesResponse.Response.activities
				.filter((a) => mapActivitiesAndModeByHash.has(a.activityHash))
				.map((a) => {
					return {
						hash: a.activityHash,
						activityCompletions: a.values["activityCompletions"].basic.value,
					};
				});
			aggregatePlayerActivitiesCompletions = aggregatePlayerActivitiesCompletions.concat(aggregateActivity);
		}
	});

	const playerCompletions: Map<keyof typeof DestinyActivity, IPlayerActivity> = CalculateAggregatePlayerCompletions(aggregatePlayerActivitiesCompletions, ProfileRecords!, CharacterRecords!);
	return playerCompletions;
}

async function GetAllCharacters(destinyMembershipId: string | bigint, membershipType: BungieMembershipType) {
	let AllCharacters: string[] = [];

	const HistoricalCharacterResponse: Promise<void | ServerResponse<DestinyHistoricalStatsAccountResult>> = getHistoricalStatsForAccount($http, {
		destinyMembershipId: destinyMembershipId.toString(),
		membershipType: membershipType,
		groups: [DestinyStatsGroupType.None],
	}).then((r) => {
		if (IsDestinyResponseValid(r, GetBungieErrorMessage)) {
			AllCharacters = r.Response.characters.map((c) => c.characterId);
		}
	});
	await HistoricalCharacterResponse;

	return AllCharacters;
}
 
function GetCollectiblesAcquired (collectibles: { [key: number]: DestinyCollectibleComponent; }, CharacterCollectibles: { [key: number]: DestinyCollectibleComponent; }[], collectibleHashes: number[])
{
	let collectible: (DestinyCollectibleComponent | undefined);
	collectibleHashes.forEach(collectibleHash => {
		if (collectible == undefined)
			collectible = collectibles[collectibleHash];
		CharacterCollectibles.forEach((characterRecords) => {
			if (collectible == undefined)
				collectible = characterRecords[collectibleHash];
		});
	});


	return (((collectible?.state ?? DestinyCollectibleState.NotAcquired) & DestinyCollectibleState.NotAcquired) == 0)
}

export const GetPlayerRelevantInformation = async (destinyMembershipId: bigint | string, membershipType: BungieMembershipType | number) => {
	const AllCharactersPromise = GetAllCharacters(destinyMembershipId, membershipType);

	let ProfileRecords: { [key: number]: DestinyRecordComponent; };
	let CharacterRecords: {
		[key: number]: DestinyRecordComponent;
	}[];

	let ProfileCollectibles: { [key: number]: DestinyCollectibleComponent; };
	let CharacterCollectibles: {
		[key: number]: DestinyCollectibleComponent;
	}[];

	const DestinyProfileResponsePromise = getProfile($http, {
		components: [
			DestinyComponentType.Profiles,
			DestinyComponentType.Characters,
			DestinyComponentType.CharacterActivities, // Access to Activities
			DestinyComponentType.Collectibles,
			DestinyComponentType.Records, //Emblems and collections
			DestinyComponentType.SocialCommendations,
		],
		destinyMembershipId: destinyMembershipId.toString(),
		membershipType: membershipType,
	});

	const PlayerProfile = await DestinyProfileResponsePromise;

	if (IsDestinyResponseValid(PlayerProfile, GetBungieErrorMessage)) {
		CurrentPlayerProfile.setKey("info", {
			UserCard: PlayerProfile.Response.profile.data!.userInfo,
			LatestCharacter: Object.values(PlayerProfile.Response.characters.data!).sort((x, y) => y!.dateLastPlayed.localeCompare(x!.dateLastPlayed))[0]!,
			CurrentGuardianRank: PlayerProfile.Response.profile.data!.currentGuardianRank,
			LifetimeHighestGuardianRank: PlayerProfile.Response.profile.data!.lifetimeHighestGuardianRank,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			RenewedGuardianRank: (PlayerProfile.Response.profile.data! as any).renewedGuardianRank,
		});
		// const availableDestinyActivities = r.Response.profile.data!.characterIds.map((character) => r.Response.characterActivities.data![character].availableActivities)
		// 	.flatMap((activityArray) => activityArray);
		// allAvailableActivities = new Set(availableDestinyActivities.map((activity) => activity.activityHash));
		// ownedActivities = new Set(availableDestinyActivities.filter((a) => a.canLead || a.canJoin).map((activity) => activity.activityHash));
		// availableOwnedActivities = MapSetIntersection(allAvailableActivities, mapActivitiesAndModeByHash);
		ProfileRecords = PlayerProfile.Response.profileRecords.data!.records;
		CharacterRecords = Object.values(PlayerProfile.Response.characterRecords.data!).map((x) => x.records);

		ProfileCollectibles = PlayerProfile.Response.profileCollectibles.data!.collectibles
		CharacterCollectibles = Object.values(PlayerProfile.Response.characterCollectibles.data!).map((x) => x.collectibles);
		 
		const collectedExotics = ExoticCollectibles.filter((weapon) => GetCollectiblesAcquired(ProfileCollectibles, CharacterCollectibles, weapon.collectibleHashes)).map((x)=>x.exoticWeapon);
		CurrentPlayerProfile.setKey("collectibles",collectedExotics)
	}

	const AllCharacters: string[] = await AllCharactersPromise;

	const playerCompletions = await GetPlayerCharactersCompletions(AllCharacters, destinyMembershipId, membershipType, ProfileRecords!, CharacterRecords!);
	CurrentPlayerProfile.setKey("activities", playerCompletions);
	return true;
};

export const GetDestinyInventoryItemDefinition = async (hashIdentifier: number) => {
	const definition = await getDestinyEntityDefinition($http, { entityType: "DestinyInventoryItemDefinition", hashIdentifier });
	if (IsDestinyResponseValid(definition, GetBungieErrorMessage)) {
		return definition.Response as DestinyInventoryItemDefinition;
	}
};

export const GetDestinyRecordDefinition = async (hashIdentifier: number) => {
	const definition = await getDestinyEntityDefinition($http, { entityType: "DestinyRecordDefinition", hashIdentifier });
	if (IsDestinyResponseValid(definition, GetBungieErrorMessage)) {
		return definition.Response as DestinyRecordDefinition;
	}
};