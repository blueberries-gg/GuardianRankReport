import { FilterObject, StringsKeysOf } from "../common";
import { DestinyActivity, DestinyGrandMasterNightFall } from "../enums/DestinyActivities";
import { IActivity, mapActivities } from "./activities";

export const mapCurrentActiveActivities = new Map<string, IActivity>(Object.entries(FilterObject(mapActivities, ([, v]) => v.Active == true))) as Map<
	StringsKeysOf<typeof DestinyActivity>,
	IActivity
>;
export const ActiveActivities = Array.from(mapCurrentActiveActivities.keys());//.sort((x)=> DestinyActivity[x]);

export const ActiveScoredNightFalls = [
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.TheLightblade] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.ProvingGrounds] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.HeistBattlegroundMoon] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.BirthplaceOfTheVile] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.TheArmsDealer] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.TheInvertedSpire] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.Liminality] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.TheCorrupted] as keyof typeof DestinyGrandMasterNightFall,
	DestinyGrandMasterNightFall[DestinyGrandMasterNightFall.BattlegroundBehemoth] as keyof typeof DestinyGrandMasterNightFall,
];