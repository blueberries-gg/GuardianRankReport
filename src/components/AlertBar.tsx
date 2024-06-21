import { useStore } from "@nanostores/solid";
import { healthStatusReason, healthStatus, DestinyEnabled, healthStatusTitle } from "../stores/destinyPlayerData";

export default function() {
	const $healthStatusReason = useStore(healthStatusReason);
	const $healthStatus = useStore(healthStatus);
	const $DestinyEnabled = useStore(DestinyEnabled);
	const $healthStatusTitle = useStore(healthStatusTitle);

  return <dialog open={!$healthStatus() || !$DestinyEnabled()}>
    {$healthStatusTitle()} {$healthStatusReason()}
      </dialog>
}