import { atom } from "nanostores";
import { DestinyActivity } from "../utils/enums/DestinyActivities";
import { StringsKeysOf } from "../utils/common";


export const requestedActivity = atom<StringsKeysOf<typeof DestinyActivity> | undefined>(undefined);
