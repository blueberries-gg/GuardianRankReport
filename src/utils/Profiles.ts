import { DestinyGameVersions } from "bungie-api-ts/destiny2";

export function OwnsExpansion(versionsOwned: number, version: DestinyGameVersions) {

    return (versionsOwned & version) != 0;
}
