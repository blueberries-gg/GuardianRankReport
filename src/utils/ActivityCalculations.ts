import { ActivityType } from "../enums/ActivityType";
import { ModeType } from "../enums/ModeType";
import { IDisplayActivity } from "./activities"
import { StringsKeysOf } from "./common"

// function FilterTypeActive(activities: Map<keyof typeof DestinyActivity, IDisplayActivity>, activityType: ActivityType, active: boolean) {
// 	return Array.from(
// 		new Map([...activities].filter(([k, v]) => v.Type == (ActivityType[activityType] as keyof typeof ActivityType) && v.isActive == active)).values()
// 	);
// }
export function FilterActive(activities: IDisplayActivity[], active: boolean) {
	return activities.filter((x) => x.isActive == active);
}
export function FilterType(activities: IDisplayActivity[], activityType: ActivityType) {
	return activities.filter((x) => x.Type == (ActivityType[activityType] as keyof typeof ActivityType));
}
export function getActiveActivityComplete(activities: IDisplayActivity[]) {
	const initialized = activities.findIndex((x) => x.dataInitialized) != -1;
	let complete = -1;
	if (initialized)
		complete = activities.filter((x) => getCompletions(x) > 0).length;

	return complete;
}
export function getCompletions(activity: IDisplayActivity) {
	let totalCompletions = 0;
	activity.Completions.forEach((value) => value.forEach((x) => (totalCompletions += x)));
	return totalCompletions;
}
export function getNormalCompletions(activity: IDisplayActivity) {
	let totalCompletions = 0;
	activity.Completions.get(ModeType[ModeType.Normal] as StringsKeysOf<typeof ModeType>)?.forEach((x) => (totalCompletions += x));
	return totalCompletions;
}
export function getMasterCompletions(activity: IDisplayActivity) {
	let totalCompletions = 0;
	activity.Completions.get(ModeType[ModeType.Master] as StringsKeysOf<typeof ModeType>)?.forEach((x) => (totalCompletions += x));
	return totalCompletions;
}
export function getGrandMasterCompletions(activity: IDisplayActivity) {
	let totalCompletions = 0;
	activity.Completions.get(ModeType[ModeType.Grandmaster] as StringsKeysOf<typeof ModeType>)?.forEach((x) => (totalCompletions += x));
	return totalCompletions;
}
