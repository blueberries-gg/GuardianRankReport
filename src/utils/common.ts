import { ServerResponse } from "bungie-api-ts/destiny2";

export function IsDestinyResponseValid(response: ServerResponse<any>) {
	return response.ErrorCode == 0 || response.ErrorCode == 1;
}

export function ReorderMap<T,VT>(map: Map<T, VT>, keys: T[]) {
	return new Map(keys.map((k) => [k, map.get(k)!]));
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
