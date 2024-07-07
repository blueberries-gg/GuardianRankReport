import { useStore } from "@nanostores/solid";
import { healthStatusReason, healthStatus, DestinyEnabled, healthStatusTitle } from "../stores/destinyService";

export default function () {
	const $healthStatusReason = useStore(healthStatusReason);
	const $healthStatus = useStore(healthStatus);
	const $DestinyEnabled = useStore(DestinyEnabled);
	const $healthStatusTitle = useStore(healthStatusTitle);



	return <>
		<dialog open={!$healthStatus() || !$DestinyEnabled()} style=" position: fixed; bottom: 0;width: 100%; text-align: center;">
			{$healthStatusTitle()} {$healthStatusReason()}
		</dialog>
		<div style={`display:${(!$healthStatus() || !$DestinyEnabled()) ? "block" : "none"}; visibility:hidden; height: 57px`}>
		</div>
	</>
}