import { FilterObject, StringsKeysOf } from "../common";
import { DestinyActivity, DestinyGrandMasterNightFall } from "../enums/DestinyActivities";
import { IActivity, mapActivities } from "./activities";

export const mapCurrentActiveActivities = new Map<string, IActivity>(Object.entries(FilterObject(mapActivities, ([, v]) => v.Active == true))) as Map<
	StringsKeysOf<typeof DestinyActivity>,
	IActivity
>;
export const ActiveActivities = Array.from(mapCurrentActiveActivities.keys());//.sort((x)=> DestinyActivity[x]);

export const ActiveScoredNightFalls = [
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.HyperNetCurrent] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.HeistBattlegroundMars] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.LegendPsiOpsBattlegroundCosmodrome] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.LakeOfShadows] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.HeistBattlegroundMoon] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.TheScarletKeep] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.TheInsightTerminus] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.WardenOfNothing] as keyof typeof DestinyGrandMasterNightFall,
];