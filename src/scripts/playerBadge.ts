import { CurrentPlayerProfile, GetDestinyInventoryItemDefinitionEntityDefinition, PlayerInfo } from "../stores/destinyPlayerData";
import { BASE_BUNGIE_URL } from "../utils/common";
import { ranksEN, AbsoluteRankEN } from "../utils/enumStrings";
import { AbsoluteRank } from "../enums/AbsoluteRank";
import { DestinyActivity } from "../enums/DestinyActivity";
import { mapActivities } from "../utils/activities";

import { ActivityType } from "../enums/ActivityType";
import {
    FilterType,
    FilterActive,
    getActivitiesCountComplete,
} from "../utils/ActivityCalculations";

function GetAbsoluteRank(profile: PlayerInfo): AbsoluteRank {
    const activities = Array.from(profile.activities.values()).sort((x, y) => DestinyActivity[x.Activity] - DestinyActivity[y.Activity]);
    const allRaids = FilterType(activities, ActivityType.Raid);
    const activeRaids = FilterActive(allRaids, true);
    const activeSealRaids = activeRaids.filter((x) => mapActivities[x.Activity].SealHash != undefined);
    const activeSealRaidsCompleted = activeSealRaids.filter((x) => x.hasSeal == true).length;
    const activeFlawlessRaids = activeRaids.filter((x) => mapActivities[x.Activity].FlawlessHash != undefined);
    const activeFlawlessRaidsCompleted = activeFlawlessRaids.filter((x) => x.hasFlawless == true).length;
    //const inactiveRaids = FilterActive(allRaids, false);

    const allDungeons = FilterType(activities, ActivityType.Dungeon);
    const activeDungeons = FilterActive(allDungeons, true);
    const activeSealDungeons = activeDungeons.filter((x) => mapActivities[x.Activity].SealHash != undefined);
    const activeSealDungeonsCompleted = activeSealDungeons.filter((x) => x.hasSeal == true).length;
    const activeSoloFlawlessDungeons = activeRaids.filter((x) => mapActivities[x.Activity].SoloFlawlessHash != undefined);
    const activeSoloFlawlessDungeonsCompleted = activeSoloFlawlessDungeons.filter((x) => x.hasSoloFlawless == true).length;
    //const inactiveDungeons = FilterActive(allDungeons, false);

    const activeRaidsCompleted = getActivitiesCountComplete(activeRaids);
    const activeDungeonCompleted = getActivitiesCountComplete(activeDungeons);

    let currentRank = AbsoluteRank.Untested;

    if (activeFlawlessRaidsCompleted == activeFlawlessRaids.length && activeSoloFlawlessDungeonsCompleted == activeSoloFlawlessDungeons.length) {
        currentRank = AbsoluteRank.Ascendant;
    } else if (activeSealRaidsCompleted == activeSealRaids.length && activeSealDungeonsCompleted == activeSealDungeons.length) {
        currentRank = AbsoluteRank.Adept;
    } else if (activeSealRaidsCompleted == activeSealRaids.length || activeSealDungeonsCompleted == activeSealDungeons.length) {
        currentRank = AbsoluteRank.Platinum;
    } else if (activeRaidsCompleted == activeRaids.length && activeDungeonCompleted == activeDungeons.length) {
        currentRank = AbsoluteRank.Diamond;
    } else if (activeRaidsCompleted == activeRaids.length || activeDungeonCompleted == activeDungeons.length) {
        currentRank = AbsoluteRank.Gold;
    } else if (activeRaidsCompleted > 3 && activeDungeonCompleted > 2) {
        currentRank = AbsoluteRank.Silver;
    } else if (activeRaidsCompleted > 0 && activeDungeonCompleted > 0) {
        currentRank = AbsoluteRank.Bronze;
    } else if (activeRaidsCompleted > 0 || activeDungeonCompleted > 0) {
        currentRank = AbsoluteRank.Copper;
    }

    return currentRank;
}
// Listen to changes in the store, and show/hide the dialog accordingly
CurrentPlayerProfile.subscribe((profile, _, changedKey) => {
    if (changedKey === "info") {
        document.getElementById("playerBadge")!.style.backgroundImage = `url(${BASE_BUNGIE_URL}${profile.info.LatestCharacter.emblemBackgroundPath})`;

        document.getElementById("badgeName")!.innerHTML = profile.info.UserCard.bungieGlobalDisplayName;
        document.getElementById("badgeCode")!.innerHTML = `${("000" + profile.info.UserCard.bungieGlobalDisplayNameCode).slice(-4)}`;
        document.getElementById("badgeFullName")!.title =
            `${profile.info.UserCard.bungieGlobalDisplayName}#${("000" + profile.info.UserCard.bungieGlobalDisplayNameCode).slice(-4)}`;

        GetDestinyInventoryItemDefinitionEntityDefinition(profile.info.LatestCharacter.emblemHash).then(
            (r) => (document.getElementById("playerBadge")!.title = r?.displayProperties.name ?? "Unknown Emblem")
        );
        document.getElementById(`actualRank${profile.info.RenewedGuardianRank}`)!.style.display = "flex";
        document.getElementById("actualBadgeRankText")!.innerHTML = document.getElementById("actualBadgeRank")!.title =
            ranksEN[profile.info.RenewedGuardianRank];
        document.getElementById("badgeRankSeparatorCurrent")!.style.visibility = "visible";

        document.getElementById(`rank${profile.info.CurrentGuardianRank}`)!.style.display = "flex";
        document.getElementById("badgeRankText")!.innerHTML = document.getElementById("badgeRank")!.title = ranksEN[profile.info.CurrentGuardianRank];
        document.getElementById("badgeRankSeparator")!.style.visibility = "visible";

        document.getElementById(`highestRank${profile.info.LifetimeHighestGuardianRank}`)!.style.display = "flex";
        document.getElementById("highestBadgeRankText")!.innerHTML = document.getElementById("highestBadgeRank")!.title =
            ranksEN[profile.info.LifetimeHighestGuardianRank];
    }
    if (changedKey == "activities") {
        document.getElementById("badgeExtraRankText")!.innerHTML = document.getElementById("badgeExtraRankText")!.title =
            AbsoluteRankEN[GetAbsoluteRank(profile)];
    }
});