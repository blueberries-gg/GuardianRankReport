import { ActivityType } from "../enums/ActivityType";
import { ModeType } from "../enums/ModeType";
import { IPlayerActivity } from "../destinyActivities/activities"
import { StringsKeysOf } from "../common"

export function PlayerActivitiesFilterActive(activities: IPlayerActivity[], active: boolean) {
	return activities.filter((x) => x.isActive == active);
}

export function PlayerActivitiesFilterType(activities: IPlayerActivity[], activityType: ActivityType) {
	return activities.filter((x) => x.Type == (ActivityType[activityType] as keyof typeof ActivityType));
}

export function GetPlayerActivitiesCountComplete(activities: IPlayerActivity[]) {
	const initialized = activities.findIndex((x) => x.dataInitialized) != -1;
	let complete = -1;
	if (initialized)
		complete = activities.filter((x) => GetPlayerActivityCompletions(x) > 0).length;
	return complete;
}

export function GetPlayerActivitiesTotalCompletions(activities: IPlayerActivity[]) {
	const initialized = activities.findIndex((x) => x.dataInitialized) != -1;
	let complete = -1;
	if (initialized) {
		complete = 0;
		activities.map((x) => complete += GetPlayerActivityCompletions(x));
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
