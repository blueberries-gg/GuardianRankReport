import { DestinyGameVersions } from "bungie-api-ts/destiny2";
import { ServerResponse } from "bungie-api-ts/destiny2";

export const BASE_BUNGIE_URL = "https://www.bungie.net/";

export function IsDestinyResponseValid(response: ServerResponse<unknown>, errorCallback: (response: ServerResponse<unknown>) => void) {
	if (response.ErrorCode === 0 || response.ErrorCode === 1) return true;
	errorCallback(response);
	return false;
}

export function OwnsExpansion(versionsOwned: number, version: DestinyGameVersions) {
    return (versionsOwned & version) !== 0;
}
