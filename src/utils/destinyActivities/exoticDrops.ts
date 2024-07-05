import { StringsKeysOf } from "../common";
import { DestinyActivity } from "../enums/DestinyActivities";
import { ExoticWeapon } from "../enums/WeaponExotic";
import { DungeonExoticDrops } from "./dungeons";
import { ExoticMissionExoticDrops } from "./exoticMissions";
import { RaidExoticDrops } from "./raids";

export interface ExoticDrop {
    collectibleHash: number;
    collectibleHashes?: number[];
    itemHash: number;
    icon: string;
    hasCatalyst: boolean;
    sourceActivity: StringsKeysOf<typeof DestinyActivity>;
    exoticWeapon: StringsKeysOf<typeof ExoticWeapon>
}

export const ExoticDrops = [
    ...RaidExoticDrops,
    ...DungeonExoticDrops,
    ...ExoticMissionExoticDrops,
];