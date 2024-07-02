import { StringsKeysOf } from "../common";
import { DestinyActivity } from "../enums/DestinyActivities";
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
}

export const ExoticDrops = [
    ...RaidExoticDrops,
    ...DungeonExoticDrops,
    ...ExoticMissionExoticDrops,
];