import { useStore } from "@nanostores/solid";
import { DestinyEnabled, healthStatus, healthStatusReason, healthStatusTitle } from "../stores/destinyPlayerData";
import AlertBar from "../components/AlertBar";
import { Show } from "solid-js";

export const StatusBar = () => {
	const $healthStatusReason = useStore(healthStatusReason);
	const $healthStatus = useStore(healthStatus);
	const $DestinyEnabled = useStore(DestinyEnabled);
	const $healthStatusTitle = useStore(healthStatusTitle);
	return (
			<AlertBar
				title={$healthStatusTitle()}
				body={$healthStatusReason()}
				show={!$healthStatus() || !$DestinyEnabled()}
			/>
	);
};
