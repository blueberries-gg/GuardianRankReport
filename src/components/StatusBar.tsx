import { useStore } from "@nanostores/solid";
import { DestinyEnabled, healthStatus, healthStatusReason } from "../stores/destinyPlayerData";
import AlertBar from "../components/AlertBar";
import { Show } from "solid-js";

export const StatusBar = () => {
	const $healthStatusReason = useStore(healthStatusReason);
	const $healthStatus = useStore(healthStatus);
	const $DestinyEnabled = useStore(DestinyEnabled);
	return (
			<AlertBar
				title="Error"
				body={$healthStatusReason()}
				show={!$healthStatus() || !$DestinyEnabled()}
			/>
	);
};
