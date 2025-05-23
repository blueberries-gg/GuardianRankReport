import { ActivityType } from "../enums/ActivityType";
import { ModeType } from "../enums/ModeType";
import { IPlayerActivity } from "../destinyActivities/activities"
import { StringsKeysOf } from "../common"
import { DestinyActivity } from "../enums/DestinyActivities";
import { d } from "../../../dist/_astro/web.Dqc7ZEmp";

export function PlayerActivitiesFilterActive(activities: IPlayerActivity[], active: boolean) {
	return activities.filter((x) => x.isActive == active);
}

export function PlayerActivitiesFilterType(activities: IPlayerActivity[], activityType: ActivityType | undefined) {
	if (activityType != undefined)
		return activities.filter((x) => x.Type == (ActivityType[activityType] as keyof typeof ActivityType));
	return activities;
}

export function PlayerActivitiesFilterByActivity(activities: IPlayerActivity[], filteredActivities: DestinyActivity[]) {
	return activities.filter((x) =>  filteredActivities.findIndex(y=> DestinyActivity[y] == x.Activity) != -1);
}

export function GetPlayerActivitiesCountComplete(activities: IPlayerActivity[]) {
	const initialized = activities.findIndex((x) => x.dataInitialized) != -1;
	let complete = -1;
	if (initialized)
		complete = activities.filter((x) => GetPlayerActivityCompletions(x) > 0).length;
	return complete;
}

export function GetPlayerActivitiesTotalCompletions(activities: IPlayerActivity[], tableType: string) {
	const initialized = activities.findIndex((x) => x.dataInitialized) != -1;
	let complete = -1;
	if (initialized) {
		complete = 0;
	
		switch (tableType){
			default:
				activities.map((x) => complete += GetPlayerActivityCompletions(x));
				break;
			case "RiteOfTheNine":
				activities.map((x) => complete += GetPlayerActivityModesCompletions(x,[ModeType[ModeType.Explorer], ModeType[ModeType.Eternity], ModeType[ModeType.Ultimatum]]  as StringsKeysOf<typeof ModeType>[]));
			break;
		}

	}
	return complete;
}

export function GetPlayerActivitiesMasterCompletions(activities: IPlayerActivity[]) {
	const initialized = activities.findIndex((x) => x.dataInitialized) != -1;
	let complete = -1;
	if (initialized) {
		complete = 0;
		activities.map((x) => complete += GetPlayerActivityModesCompletions(x, [ModeType[ModeType.Master]] as StringsKeysOf<typeof ModeType>[]));
	}
	return complete;
}

export function GetPlayerActivitiesModesCompletions(activities: IPlayerActivity[], ModeTypes: StringsKeysOf<typeof ModeType>[]) {
	const initialized = activities.findIndex((x) => x.dataInitialized) != -1;
	let complete = -1;
	if (initialized) {
		complete = 0;
		activities.map((x) => complete += GetPlayerActivityModesCompletions(x, ModeTypes));
	}
	return complete;
}

export function GetPlayerActivitiesSealCompletions(activities: IPlayerActivity[]) {
	const initialized = activities.findIndex((x) => x.dataInitialized) != -1;
	let complete = -1;
	if (initialized) {
		complete = activities.filter(x => x.hasSeal).length;
	}
	return complete;
}

export function GetPlayerActivitiesFlawlessCompletions(activities: IPlayerActivity[]) {
	const initialized = activities.findIndex((x) => x.dataInitialized) != -1;
	let complete = -1;
	if (initialized) {
		complete = activities.filter(x => x.hasFlawless === true).length;
	}
	return complete;
}

export function GetPlayerActivitiesSoloCompletions(activities: IPlayerActivity[]) {
	const initialized = activities.findIndex((x) => x.dataInitialized) != -1;
	let complete = -1;
	if (initialized) {
		complete = activities.filter(x => x.hasSolo === true).length;
	}
	return complete;
}

export function GetPlayerActivitiesSoloFlawlessCompletions(activities: IPlayerActivity[]) {
	const initialized = activities.findIndex((x) => x.dataInitialized) != -1;
	let complete = -1;
	if (initialized) {
		complete = activities.filter(x => x.hasSoloFlawless === true).length;
	}
	return complete;
}

export function GetPlayerActivityCompletions(activity: IPlayerActivity) {
	const initialized = activity.dataInitialized;
	let complete = -1;
	if (initialized) {
		complete = 0
		activity.Completions.forEach((value) => value.forEach((x) => (complete += x)));

	}
	return complete;
}

export function GetPlayerActivityModesCompletions(activity: IPlayerActivity, ModeTypes: StringsKeysOf<typeof ModeType>[]) {
	const initialized = activity.dataInitialized;
	let complete = -1;
	if (initialized) {
		complete = 0
		ModeTypes.forEach(modeTypes => {
			activity.Completions.get(modeTypes as StringsKeysOf<typeof ModeType>)?.forEach((x) => (complete += x));
		});
	}
	return complete;
}

export function GetPlayerActivityModesDetailedCompletions(activity: IPlayerActivity, ModeTypes: StringsKeysOf<typeof ModeType>[]) {
	const initialized = activity.dataInitialized;
	let complete = -1;
	if (initialized) {
		complete = 0
		ModeTypes.forEach(modeTypes => {
			complete += activity.DetailCompletions.get(modeTypes as StringsKeysOf<typeof ModeType>) ?? 0;
		});
	}
	return complete;
}
