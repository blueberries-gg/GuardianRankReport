import { useStore } from "@nanostores/solid";
import { UserInfoCard } from "bungie-api-ts/user";
import { CurrentPlayerProfile } from "../stores/destinyPlayerData";

export default function () {
  const $currentPlayerProfile = useStore(CurrentPlayerProfile);

	return (
		<div style="color:white">
			{$currentPlayerProfile().bungieGlobalDisplayName}{$currentPlayerProfile().bungieGlobalDisplayName == undefined ? "":"#"}{$currentPlayerProfile().bungieGlobalDisplayNameCode}
		</div>
	);
}
