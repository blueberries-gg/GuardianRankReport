import { CurrentPlayerProfile, GetDestinyInventoryItemDefinition, PlayerActivityDetails } from "../stores/destinyPlayerData";
import { AbsoluteRankString } from "../utils/enums/strings/en/AbsoluteRank";
import { AbsoluteRank } from "../utils/enums/AbsoluteRank";
import { DestinyActivity } from "../utils/enums/DestinyActivities";
import { mapActivities } from "../utils/destinyActivities/activities";

import { ActivityType } from "../utils/enums/ActivityType";

import { GuardianRanksString } from "../utils/enums/strings/en/GuardianRank";
import {
	PlayerActivitiesFilterType,
	PlayerActivitiesFilterActive,
	GetPlayerActivitiesCountComplete,
} from "../utils/destinyExtensions/PlayerActivityCalculations";
import { BASE_BUNGIE_URL } from "../utils/destinyExtensions/APIExtensions";

function GetAbsoluteRank(profile: PlayerActivityDetails): AbsoluteRank {
	const activities = Array.from(profile.activities.values()).sort((x, y) => DestinyActivity[x.Activity] - DestinyActivity[y.Activity]);
	const allRaids = PlayerActivitiesFilterType(activities, ActivityType.Raid);
	const activeRaids = PlayerActivitiesFilterActive(allRaids, true);
	const activeSealRaids = activeRaids.filter((x) => mapActivities[x.Activity].SealHash != undefined);
	const activeSealRaidsCompleted = activeSealRaids.filter((x) => x.hasSeal == true).length;
	const activeFlawlessRaids = activeRaids.filter((x) => mapActivities[x.Activity].FlawlessHash != undefined);
	const activeFlawlessRaidsCompleted = activeFlawlessRaids.filter((x) => x.hasFlawless == true).length;
	//const inactiveRaids = FilterActive(allRaids, false);

	const allDungeons = PlayerActivitiesFilterType(activities, ActivityType.Dungeon);
	const activeDungeons = PlayerActivitiesFilterActive(allDungeons, true);
	const activeSealDungeons = activeDungeons.filter((x) => mapActivities[x.Activity].SealHash != undefined);
	const activeSealDungeonsCompleted = activeSealDungeons.filter((x) => x.hasSeal == true).length;
	const activeSoloFlawlessDungeons = activeRaids.filter((x) => mapActivities[x.Activity].SoloFlawlessHash != undefined);
	const activeSoloFlawlessDungeonsCompleted = activeSoloFlawlessDungeons.filter((x) => x.hasSoloFlawless == true).length;
	//const inactiveDungeons = FilterActive(allDungeons, false);

	const activeRaidsCompleted = GetPlayerActivitiesCountComplete(activeRaids);
	const activeDungeonCompleted = GetPlayerActivitiesCountComplete(activeDungeons);

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

    document.getElementById(`rank-${AbsoluteRank[currentRank].toLowerCase()}`)!.className = "currentRank";

    if (currentRank > 0)
        document.getElementById(`rank-${AbsoluteRank[currentRank - 1].toLowerCase()}`)!.className = "";
    
    if (currentRank < AbsoluteRank.Ascendant)
        document.getElementById(`rank-${AbsoluteRank[currentRank + 1].toLowerCase()}`)!.className = "";
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

		GetDestinyInventoryItemDefinition(profile.info.LatestCharacter.emblemHash).then(
			(r) => (document.getElementById("playerBadge")!.title = r?.displayProperties.name ?? "Unknown Emblem")
		);
		document.getElementById(`actualRank${profile.info.RenewedGuardianRank}`)!.style.display = "flex";
		document.getElementById("actualBadgeRankText")!.innerHTML = document.getElementById("actualBadgeRank")!.title =
			GuardianRanksString[profile.info.RenewedGuardianRank];
		document.getElementById("badgeRankSeparatorCurrent")!.style.visibility = "visible";

		document.getElementById(`rank${profile.info.CurrentGuardianRank}`)!.style.display = "flex";
		document.getElementById("badgeRankText")!.innerHTML = document.getElementById("badgeRank")!.title =
			GuardianRanksString[profile.info.CurrentGuardianRank];
		document.getElementById("badgeRankSeparator")!.style.visibility = "visible";

		document.getElementById(`highestRank${profile.info.LifetimeHighestGuardianRank}`)!.style.display = "flex";
		document.getElementById("highestBadgeRankText")!.innerHTML = document.getElementById("highestBadgeRank")!.title =
			GuardianRanksString[profile.info.LifetimeHighestGuardianRank];
	}
	if (changedKey == "activities") {
		document.getElementById("badgeExtraRankText")!.innerHTML = document.getElementById("badgeExtraRankText")!.title =
			AbsoluteRankString[GetAbsoluteRank(profile)];
	}
});
