import { ServerResponse } from "bungie-api-ts/destiny2";
import { ModeTypeEN, activitiesEN } from "./enumStrings";
import { IDisplayActivity, mapActivities } from "./activities";
import { ModeType } from "../enums/ModeType";

export const BASE_BUNGIE_URL = "https://www.bungie.net/";

export type StringsKeysOf<T> = keyof T & string;

export function IsDestinyResponseValid(response: ServerResponse<any>, errorCallback: (response: ServerResponse<any>) => void) {
	if (response.ErrorCode === 0 || response.ErrorCode === 1) return true;
	errorCallback(response);
	return false;
}

export function ReorderMap<T, VT>(map: Map<T, VT>, keys: T[]) {
	return new Map(keys.map((k) => [k, map.get(k)!]));
}

export type Entry<T> = {
	[K in keyof T]: [K, T[K]];
}[keyof T];


export function objectAsEntry<T extends object>(obj: T) {
	return (Object.entries(obj) as Entry<T>[])

}
export function filterObject<T extends object>(obj: T, fn: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean) {
	return Object.fromEntries((Object.entries(obj) as Entry<T>[]).filter(fn)) as Partial<T>;
}

export function GetPrintableActivityInfo(displayActivities: IDisplayActivity[]) {
	let displayActivitiesStrings: string[] = [];
	displayActivities.forEach((displayActivity) => {
		let details = `${activitiesEN[displayActivity.Activity]}\n`;
		if (displayActivity.hasSeal != undefined) details += `Seal ${displayActivity.hasSeal}\n`;

		if (displayActivity.hasSoloFlawless != undefined) details += `Solo Flawless ${displayActivity.hasSoloFlawless}\n`;
		if (displayActivity.hasSolo != undefined) details += `Solo ${displayActivity.hasSolo}\n`;
		if (displayActivity.hasFlawless != undefined) details += `Flawless ${displayActivity.hasFlawless}\n`;

		if (displayActivity.UncompleteObjectives != undefined)
			details += `Pending ${displayActivity.UncompleteObjectives.length} of ${mapActivities[displayActivity.Activity].SealObjectives?.length}\n`;
		displayActivity.Completions.forEach((contributors, mode) => {
			if (contributors.size >= 1) {
				if (Object.values(ModeType).includes(mode)) details += `${ModeTypeEN[mode as StringsKeysOf<typeof ModeType>]}\n`;
				details += `Completions: ${Array.from(contributors.values()).reduce((p, a) => p + a, 0)}\nContributors: ${JSON.stringify(Object.fromEntries(contributors))}\n`;
			}
		});
		displayActivitiesStrings.push(details);
	});
	//displayActivitiesStrings.map((x) => console.log(x));
	return displayActivitiesStrings;
}
export function MapIntersection<K, V>(First: Map<K, V>, Second: Map<K, V>) {
	var result = new Map<K, V>();

	if (First.size > Second.size) {
		Second.forEach((v, k) => {
			if (First.has(k)) result.set(k, v);
		});
	} else {
		First.forEach((v, k) => {
			if (Second.has(k)) result.set(k, v);
		});
	}

	return result;
}

export function MapSetIntersection<K, V>(set: Set<K>, map: Map<K, V>) {
	var result = new Map<K, V>();

	if (set.size > map.size) {
		map.forEach((v, k) => {
			if (set.has(k)) result.set(k, v);
		});
	} else {
		set.forEach((k) => {
			if (map.has(k)) result.set(k, map.get(k)!);
		});
	}

	return result;
}
