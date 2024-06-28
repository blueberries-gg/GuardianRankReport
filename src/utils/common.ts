import { ServerResponse } from "bungie-api-ts/destiny2";

export const BASE_BUNGIE_URL = "https://www.bungie.net/";

export type StringsKeysOf<T> = keyof T & string;

export function IsDestinyResponseValid(response: ServerResponse<unknown>, errorCallback: (response: ServerResponse<unknown>) => void) {
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


export function ObjectAsEntry<T extends object>(obj: T) {
	return (Object.entries(obj) as Entry<T>[])

}
export function FilterObject<T extends object>(obj: T, fn: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean) {
	return Object.fromEntries((Object.entries(obj) as Entry<T>[]).filter(fn)) as Partial<T>;
}

export function MapIntersection<K, V>(First: Map<K, V>, Second: Map<K, V>) {
	const result = new Map<K, V>();

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
	const result = new Map<K, V>();

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
