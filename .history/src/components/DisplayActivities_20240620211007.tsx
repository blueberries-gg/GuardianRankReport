import { For, Show } from "solid-js";
import { useStore } from "@nanostores/solid";
import { CurrentPlayerProfile } from "../stores/destinyPlayerData";
import { ActivityType } from "../enums/ActivityType";
import { DestinyActivity } from "../enums/DestinyActivity";
import { IDisplayActivity, mapActivities } from "../utils/activities";
import { activitiesEN } from "../utils/enumStrings";
import { BASE_BUNGIE_URL } from "../utils/common";

// function FilterTypeActive(activities: Map<keyof typeof DestinyActivity, IDisplayActivity>, activityType: ActivityType, active: boolean) {
// 	return Array.from(
// 		new Map([...activities].filter(([k, v]) => v.Type == (ActivityType[activityType] as keyof typeof ActivityType) && v.isActive == active)).values()
// 	);
// }
function FilterActive(activities: IDisplayActivity[], active: boolean) {
	return activities.filter((x) => x.isActive == active);
}

function FilterType(activities: IDisplayActivity[], activityType: ActivityType) {
	return activities.filter((x) => x.Type == (ActivityType[activityType] as keyof typeof ActivityType));
}

function getCompletions(activity: IDisplayActivity) {
	let totalCompletions = 0;
	activity.Completions.forEach((value,) => value.forEach((x,) => (totalCompletions += x)));
	return totalCompletions;
}

function GetDisplayListHeader(props: { activityType: ActivityType }) {
	switch (props.activityType) {
		case ActivityType.Dungeon:
			return (
				<tr>
					<th></th>
					<th></th>
					<th style="text-align: center; vertical-align: middle;">Total Clears</th>
					<th style="text-align: center; vertical-align: middle;">Solo</th>
					<th style="text-align: center; vertical-align: middle;">Flawless</th>
					<th style="text-align: center; vertical-align: middle;">Solo Flawless</th>
					<th style="text-align: center; vertical-align: middle;">Seal</th>
				</tr>
			);
		case ActivityType.ExoticMission:
			return (
				<tr>
					<th></th>
					<th></th>
					<th style="text-align: center; vertical-align: middle;">Total Clears</th>
				</tr>
			);
		case ActivityType.Raid:
			return (
				<tr>
					<th></th>
					<th></th>
					<th style="text-align: center; vertical-align: middle;">Total Clears</th>
					<th style="text-align: center; vertical-align: middle;">Flawless</th>
					<th style="text-align: center; vertical-align: middle;">Seal</th>
				</tr>
			);
		case ActivityType.ScoredNightFall:
			return (
				<tr>
					<th></th>
					<th></th>
					<th style="text-align: center; vertical-align: middle;">Total Clears</th>
				</tr>
			);
	}
}

function GetDisplayItemDungeon(props: { item: IDisplayActivity }) {
	return (
		<tr>
			<td></td>
			<td>{activitiesEN[props.item.Activity]}</td>
			<td style="text-align: center;">{getCompletions(props.item)}</td>
			<td>
				<Show when={mapActivities[props.item.Activity].SoloHash !== undefined}>
					<Show when={props.item.hasSolo == false}>
						<div style="margin: auto; height: 10px;;width: 10px; background:red"></div>
					</Show>
					<Show when={props.item.hasSolo == true}>
						<div style="margin: auto; height: 10px;;width: 10px; background:green"></div>
					</Show>
				</Show>
			</td>
			<td>
				<Show when={mapActivities[props.item.Activity].FlawlessHash !== undefined}>
					<Show when={props.item.hasFlawless == false}>
						<div style="margin: auto; height: 10px;;width: 10px; background:red"></div>
					</Show>
					<Show when={props.item.hasFlawless == true}>
						<div style="margin: auto; height: 10px;;width: 10px; background:green"></div>
					</Show>
				</Show>
			</td>
			<td>
				<Show when={mapActivities[props.item.Activity].SoloFlawlessHash !== undefined}>
					<Show when={props.item.hasSoloFlawless == false}>
						<div style="margin: auto; height: 10px;;width: 10px; background:red"></div>
					</Show>
					<Show when={props.item.hasSoloFlawless == true}>
						<div style="margin: auto; height: 10px;;width: 10px; background:green"></div>
					</Show>
				</Show>
			</td>
			<td>
				<Show when={mapActivities[props.item.Activity].SealHash !== undefined}>
					<Show when={props.item.hasSeal == false}>
						<img src={`${BASE_BUNGIE_URL}${mapActivities[props.item.Activity].SealIncompleteImage}`}></img>
					</Show>
					<Show when={props.item.hasSeal == true}>
						<img src={`${BASE_BUNGIE_URL}${mapActivities[props.item.Activity].SealCompleteImage}`}></img>
					</Show>
				</Show>
			</td>
		</tr>
	);
}
function GetDisplayItemRaid(props: { item: IDisplayActivity }) {
	return (
		<tr>
			<td></td>
			<td>{activitiesEN[props.item.Activity]}</td>
			<td style="text-align: center;">{getCompletions(props.item)}</td>
			<td>
				<Show when={mapActivities[props.item.Activity].FlawlessHash !== undefined}>
					<Show when={props.item.hasFlawless == false}>
						<div style="margin: auto; height: 10px;;width: 10px; background:red"></div>
					</Show>
					<Show when={props.item.hasFlawless == true}>
						<div style="margin: auto; height: 10px;;width: 10px; background:green"></div>
					</Show>
				</Show>
			</td>

			<td>
				<Show when={mapActivities[props.item.Activity].SealHash !== undefined}>
					<Show when={props.item.hasSeal == false}>
						<div style="margin: auto; height: 10px;;width: 10px; background:red"></div>
					</Show>
					<Show when={props.item.hasSeal == true}>
						<div style="margin: auto; height: 10px;;width: 10px; background:green"></div>
					</Show>
				</Show>
			</td>
		</tr>
	);
}
function GetDisplayItemExoticMission(props: { item: IDisplayActivity }) {
	return (
		<tr>
			<td></td>
			<td>{activitiesEN[props.item.Activity]}</td>
			<td style="text-align: center;">{getCompletions(props.item)}</td>
		</tr>
	);
}
function GetDisplayItemScoredNightFall(props: { item: IDisplayActivity }) {
	return (
		<tr>
			<td></td>
			<td>{activitiesEN[props.item.Activity]}</td>
			<td style="text-align: center;">{getCompletions(props.item)}</td>
		</tr>
	);
}

function GetDisplayItems(props: { item: IDisplayActivity; activityType: ActivityType }) {
	switch (props.activityType) {
		case ActivityType.Dungeon:
			return GetDisplayItemDungeon(props);
		case ActivityType.ExoticMission:
			return GetDisplayItemExoticMission(props);
		case ActivityType.Raid:
			return GetDisplayItemRaid(props);
		case ActivityType.ScoredNightFall:
			return GetDisplayItemScoredNightFall(props);
	}
}

function DisplayActivities(props: { activities: Map<keyof typeof DestinyActivity, IDisplayActivity>; activityType: ActivityType; displayInactive: boolean }) {
	const activityOfType = FilterType(Array.from(props.activities.values()), props.activityType);
	const active = FilterActive(activityOfType, true);
	const inactive = FilterActive(activityOfType, false);
	return (
		<div>
			<table>
				<thead>
					<GetDisplayListHeader activityType={props.activityType} />
				</thead>
				<tbody>
					<For each={active}>{(item,) => <GetDisplayItems item={item} activityType={props.activityType} />}</For>
					<Show when={props.displayInactive && inactive.length > 0}>
						<tr>
							<td></td> <td style="padding-top:10px; text-align:right; font-weight: bold;">Legacy</td>
							<td style="padding-top:10px;" colspan="100%"><div style="height: 1px; background: gray">
							</div></td>
						</tr>
						<For each={inactive}>{(item,) => <GetDisplayItems item={item} activityType={props.activityType} />}</For>
					</Show>
				</tbody>
			</table>
		</div>
	);
}

export function SolidRaids() {
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);
	return <>{DisplayActivities({ activities: $CurrentPlayerProfile().activities, activityType: ActivityType.Raid, displayInactive: true })}</>;
}
export function SolidDungeons() {
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);
	return <>{DisplayActivities({ activities: $CurrentPlayerProfile().activities, activityType: ActivityType.Dungeon, displayInactive: true })}</>;
}
export function SolidExoticMissions() {
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);
	return <>{DisplayActivities({ activities: $CurrentPlayerProfile().activities, activityType: ActivityType.ExoticMission, displayInactive: true })}</>;
}
export function SolidGrandMasters() {
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);
	return <>{DisplayActivities({ activities: $CurrentPlayerProfile().activities, activityType: ActivityType.ScoredNightFall, displayInactive: false })}</>;
}
