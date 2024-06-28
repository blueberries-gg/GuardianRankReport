import { FilterObject, StringsKeysOf } from "../common";
import { DestinyActivity } from "../enums/DestinyActivities";
import { IActivity, mapActivities } from "./activities";

export const mapCurrentActiveActivities = new Map<string, IActivity>(Object.entries(FilterObject(mapActivities, ([, v]) => v.Active == true))) as Map<
	StringsKeysOf<typeof DestinyActivity>,
	IActivity
>;
export const ActiveActivities = Array.from(mapCurrentActiveActivities.keys());//.sort((x)=> DestinyActivity[x]);