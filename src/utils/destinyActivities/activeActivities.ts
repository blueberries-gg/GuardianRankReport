import { FilterObject, StringsKeysOf } from "../common";
import { DestinyActivity, DestinyGrandMasterNightFall } from "../enums/DestinyActivities";
import { IActivity, mapActivities } from "./activities";

export const mapCurrentActiveActivities = new Map<string, IActivity>(Object.entries(FilterObject(mapActivities, ([, v]) => v.Active == true))) as Map<
	StringsKeysOf<typeof DestinyActivity>,
	IActivity
>;
export const ActiveActivities = Array.from(mapCurrentActiveActivities.keys());//.sort((x)=> DestinyActivity[x]);

export const ActiveScoredNightFalls = [
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.TheGlassway] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.WardenOfNothing] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.TheDisgraced] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.FallenSABER] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.Liminality] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.ExodusCrash] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.HeistBattlegroundEuropa] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.TheInsightTerminus] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.TheDevilsLair] as keyof typeof DestinyGrandMasterNightFall,
];