import { For, Match, Show, Switch } from "solid-js";
import { useStore } from "@nanostores/solid";
import { CurrentPlayerProfile } from "../stores/destinyPlayerData";
import { ActivityType } from "../enums/ActivityType";
import { DestinyActivity } from "../enums/DestinyActivity";
import { getMasterLike, IDisplayActivity, mapActivities } from "../utils/activities";
import { activitiesEN } from "../utils/enumStrings";
import { BASE_BUNGIE_URL } from "../utils/common";
import complete from "../resources/complete.png";
import completeGold from "../resources/completeGold.png";
import missing from "../resources/missing.png";
import { getNormalCompletions, getCompletions, getMasterCompletions, getGrandMasterCompletions, FilterType, FilterActive, getActiveActivityComplete } from "../utils/ActivityCalculations";

function ActivityCompletionsToString(complete: number) {
	return (complete < 0) ? "?" : complete.toString()
}

let element: Element;
function GetDisplayListHeader(props: { activityType: ActivityType }) {
	switch (props.activityType) {
		case ActivityType.Dungeon:
			return (
				<tr style="height:30px">
					<th></th>
					<th></th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;">Total Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;">Master Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;">Solo</th>
					<th style="text-align: center; vertical-align: middle; max-width: 51pt;">Solo Flawless</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;"></th>
				</tr>
			);
		case ActivityType.ExoticMission:
			return (
				<tr style="height:30px">
					<th></th>
					<th></th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;">Total Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;">Master Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;">Solo</th>
					<th style="text-align: center; vertical-align: middle; max-width: 60pt;">Advanced Flawless</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;"></th>
				</tr>
			);
		case ActivityType.Raid:
			return (
				<tr style="height:30px">
					<th></th>
					<th></th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;">Total Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;">Master Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 51pt;">Flawless</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;"></th>
				</tr>
			);
		case ActivityType.ScoredNightFall:
			return (
				<tr style="height:30px">
					<th></th>
					<th></th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;">Total Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt;"></th>
				</tr>
			);
	}
}

function GetDisplayItemDungeon(props: { item: IDisplayActivity }) {
	return (
		<tr style="height:30px">
			<td></td>
			<td>{activitiesEN[props.item.Activity]}</td>
			<td style="text-align: center;" title={getNormalCompletions(props.item).toString()}>
				{getCompletions(props.item)}
			</td>
			<td style="text-align: center;">
				<Show when={getMasterLike(mapActivities[props.item.Activity]).length > 0} >
					{getMasterCompletions(props.item)}
				</Show>
			</td>
			<td>
				<Show when={mapActivities[props.item.Activity].SoloHash !== undefined}>
					<Show when={props.item.hasSolo == false}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img></div>
					</Show>
					<Show when={props.item.hasSolo == true}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img></div>
					</Show>
					<Show when={props.item.hasSolo == undefined}>
						<div style="margin: auto; width: fit-content;">
							{element}
						</div>
					</Show>
				</Show>
			</td>
			<td>
				<Show when={mapActivities[props.item.Activity].FlawlessHash !== undefined}>
					<Show when={props.item.hasFlawless == undefined}>
						<div style="margin: auto; width: fit-content;">
							{element}
						</div>
					</Show>
					<Show when={mapActivities[props.item.Activity].SoloFlawlessHash !== undefined}>
						<Show when={props.item.hasSoloFlawless == false && props.item.hasFlawless == false}>
							<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img></div>
						</Show>
						<Show when={props.item.hasSoloFlawless == false && props.item.hasFlawless == true}>
							<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${completeGold.src}`}></img></div>
						</Show>
						<Show when={props.item.hasSoloFlawless == true}>
							<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img></div>
						</Show>
					</Show>
					<Show when={mapActivities[props.item.Activity].SoloFlawlessHash == undefined}>
						<Show when={mapActivities[props.item.Activity].FlawlessHash != undefined}>
							<Show when={props.item.hasFlawless == false}>
								<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img></div>
							</Show>
							<Show when={props.item.hasFlawless == true}>
								<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img></div>
							</Show>
						</Show>
					</Show>
				</Show>
			</td>
			<td>
				<Show when={mapActivities[props.item.Activity].SealHash !== undefined}>
					<Show when={props.item.hasSeal == false && mapActivities[props.item.Activity].Active == true}>
						<img style="width:25px; vertical-align: middle;" src={`${BASE_BUNGIE_URL}${mapActivities[props.item.Activity].SealIncompleteImage}`} title={`${props.item.IncompleteObjectives?.length ?? -1} triumphs missing`}></img>
					</Show>
					<Show when={props.item.hasSeal == true}>
						<img style="width:25px; vertical-align: middle;" src={`${BASE_BUNGIE_URL}${mapActivities[props.item.Activity].SealCompleteImage}`} title="Seal Acquired!"></img>
					</Show>
					<Show when={props.item.hasSeal == undefined}>
						<div style="margin: auto; width: fit-content;">
							{element}
						</div>
					</Show>
				</Show>
			</td>
		</tr>
	);
}
function GetDisplayItemRaid(props: { item: IDisplayActivity }) {
	return (
		<tr style="height:30px">
			<td></td>
			<td>{activitiesEN[props.item.Activity]}</td>
			<td style="text-align: center;" title={getNormalCompletions(props.item).toString()}>{getCompletions(props.item)}</td>
			<td style="text-align: center;">
				<Show when={getMasterLike(mapActivities[props.item.Activity]).length > 0} >
					{getMasterCompletions(props.item)}
				</Show>
			</td>
			<td>
				<Show when={mapActivities[props.item.Activity].FlawlessHash !== undefined}>
					<Show when={props.item.hasFlawless == false}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img></div>
					</Show>
					<Show when={props.item.hasFlawless == true}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img></div>
					</Show>
					<Show when={props.item.hasFlawless === undefined}>
						<div style="margin: auto; width: fit-content;">
							{element}
						</div>
					</Show>
				</Show>
			</td>
			<td>
				<Show when={mapActivities[props.item.Activity].SealHash !== undefined}>
					<Show when={props.item.hasSeal == false && mapActivities[props.item.Activity].Active == true}>
						<img style="width:25px; vertical-align: middle;" src={`${BASE_BUNGIE_URL}${mapActivities[props.item.Activity].SealIncompleteImage}`} title={`${props.item.IncompleteObjectives?.length ?? -1} triumphs missing`}></img>
					</Show>
					<Show when={props.item.hasSeal == true}>

						<img style="width:25px; vertical-align: middle;" src={`${BASE_BUNGIE_URL}${mapActivities[props.item.Activity].SealCompleteImage}`} title="Seal Acquired!"></img>
					</Show>
					<Show when={props.item.hasSeal == undefined}>
						<div style="margin: auto; width: fit-content;">
							{element}
						</div>
					</Show>
				</Show>
			</td>
		</tr>
	);
}
function GetDisplayItemExoticMission(props: { item: IDisplayActivity }) {
	return (
		<tr style="height:30px">
			<td></td>
			<td>{activitiesEN[props.item.Activity]}</td>
			<td style="text-align: center;" title={getNormalCompletions(props.item).toString()}>{getCompletions(props.item)}</td>
			<td style="text-align: center;">
				<Show when={getMasterLike(mapActivities[props.item.Activity]).length > 0} >
					{getMasterCompletions(props.item) + getGrandMasterCompletions(props.item)}
				</Show>
			</td>
			<td>
				<Show when={mapActivities[props.item.Activity].SoloHash !== undefined}>
					<Show when={props.item.hasSolo == false}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img></div>
					</Show>
					<Show when={props.item.hasSolo == true}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img></div>
					</Show>
					<Show when={props.item.hasSolo == undefined}>
						<div style="margin: auto; width: fit-content;">
							{element}
						</div>
					</Show>
				</Show>
			</td>
			<td>

				<Show when={mapActivities[props.item.Activity].FlawlessHash !== undefined}>
					<Show when={props.item.hasFlawless === undefined}>
						<div style="margin: auto; width: fit-content;">
							{element}
						</div>
					</Show>
					<Show when={mapActivities[props.item.Activity].MasterFlawlessHash !== undefined}>
						<Show when={props.item.hasMasterFlawless === false && props.item.hasFlawless === false}>
							<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img></div>
						</Show>
						<Show when={props.item.hasMasterFlawless === false && props.item.hasFlawless === true}>
							<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${completeGold.src}`}></img></div>
						</Show>
						<Show when={props.item.hasMasterFlawless === true}>
							<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img></div>
						</Show>
					</Show>
					<Show when={mapActivities[props.item.Activity].MasterFlawlessHash === undefined}>
						<Show when={mapActivities[props.item.Activity].SoloFlawlessHash !== undefined}>
							<Show when={props.item.hasSoloFlawless == false && props.item.hasFlawless == false}>
								<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img></div>
							</Show>
							<Show when={props.item.hasSoloFlawless == false && props.item.hasFlawless == true}>
								<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${completeGold.src}`}></img></div>
							</Show>
							<Show when={props.item.hasSoloFlawless == true}>
								<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img></div>
							</Show>
						</Show>
						<Show when={mapActivities[props.item.Activity].SoloFlawlessHash === undefined}>
							<Show when={props.item.hasFlawless == false}>
								<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img></div>
							</Show>
							<Show when={props.item.hasSoloFlawless == true}>
								<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img></div>
							</Show>
						</Show>
					</Show>
				</Show>

			</td>
		</tr>
	);
}
function GetDisplayItemScoredNightFall(props: { item: IDisplayActivity }) {
	return (
		<tr style="height:30px">
			<td></td>
			<td>{activitiesEN[props.item.Activity]}</td>
			<td style="text-align: center;">{getCompletions(props.item)}</td>
		</tr>
	);
}


function DisplayActivities(props: { activities: Map<keyof typeof DestinyActivity, IDisplayActivity>; activityType: ActivityType; displayInactive: boolean }) {
	const activities = Array.from(props.activities.values()).sort((x, y) => DestinyActivity[x.Activity] - DestinyActivity[y.Activity])
	const activityOfType = FilterType(activities, props.activityType);
	const active = FilterActive(activityOfType, true);
	const inactive = FilterActive(activityOfType, false);
	return (
		<div>
			<div style="display: flex;">
				<h2 style="margin-block: 0px;">
					<Switch>
						<Match when={props.activityType == ActivityType.Raid}>
							Raids
						</Match>
						<Match when={props.activityType == ActivityType.Dungeon}>
							Dungeons
						</Match>
						<Match when={props.activityType == ActivityType.ExoticMission}>
							Exotic Missions
						</Match>
						<Match when={props.activityType == ActivityType.ScoredNightFall}>
							Grandmaster Nightfalls
						</Match>
					</Switch>
				</h2>
				<h3 style="margin-block: 0px; margin: auto 0 auto auto">{ActivityCompletionsToString(getActiveActivityComplete(active))}/{active.length}</h3>
			</div>

			<table style="margin: auto">
				<thead>
					<GetDisplayListHeader activityType={props.activityType} />
				</thead>
				<tbody>
					<For each={active}>{(item,) =>
						<Switch>
							<Match when={props.activityType == ActivityType.Raid}>
								{GetDisplayItemRaid({ item: item })}
							</Match>
							<Match when={props.activityType == ActivityType.Dungeon}>
								{GetDisplayItemDungeon({ item: item })}

							</Match>
							<Match when={props.activityType == ActivityType.ExoticMission}>
								{GetDisplayItemExoticMission({ item: item })}
							</Match>
							<Match when={props.activityType == ActivityType.ScoredNightFall}>
								{GetDisplayItemScoredNightFall({ item: item })}
							</Match>
						</Switch>
					}</For>
				</tbody>

				<Show when={props.displayInactive && inactive.length > 0}>
					<tr style="height:30px">
						<td></td>
						<td style="padding-top:10px; text-align:right; font-weight: bold;">Legacy</td>
						<Switch>
							<Match when={props.activityType == ActivityType.Raid}>
								<td style="padding-top:10px;" colspan="3">
									<div style="height: 1px; background: gray">
									</div>
								</td>
							</Match>
							<Match when={props.activityType == ActivityType.Dungeon}>
								<td style="padding-top:10px;" colspan="4">
									<div style="height: 1px; background: gray">
									</div>
								</td>
							</Match>
							<Match when={props.activityType == ActivityType.ExoticMission}>
								<td style="padding-top:10px;" colspan="4">
									<div style="height: 1px; background: gray">
									</div>
								</td>
							</Match>
							<Match when={props.activityType == ActivityType.ScoredNightFall}>
								<td style="padding-top:10px;" colspan="1">
									<div style="height: 1px; background: gray">
									</div>
								</td>
							</Match>
						</Switch>
						<td id={`${ActivityType[props.activityType]}-CollapseButton`} style="text-align:center;" onclick={
							() => {
								const element = document.getElementById(`${ActivityType[props.activityType]}-LegacyTable`);
								const collapseButton = document.getElementById(`${ActivityType[props.activityType]}-CollapseButton`);

								console.log(element);
								if (element!.style.display == 'none') {
									element!.style.display = "table-row-group"
									collapseButton!.innerHTML = '&#9650';
								}
								else {
									element!.style.display = "none"
									collapseButton!.innerHTML = '&#9660';
								}
							}
						}>
							&#9660
						</td>
					</tr>
					<tbody id={`${ActivityType[props.activityType]}-LegacyTable`} style="display: none">
						<For each={inactive}>{(item,) =>
							<Switch>
								<Match when={props.activityType == ActivityType.Raid}>
									{GetDisplayItemRaid({ item: item })}
								</Match>
								<Match when={props.activityType == ActivityType.Dungeon}>
									{GetDisplayItemDungeon({ item: item })}
								</Match>
								<Match when={props.activityType == ActivityType.ExoticMission}>
									{GetDisplayItemExoticMission({ item: item })}
								</Match>
								<Match when={props.activityType == ActivityType.ScoredNightFall}>
									{GetDisplayItemScoredNightFall({ item: item })}
								</Match>
							</Switch>
						}</For>
					</tbody>
				</Show>
			</table>
		</div>
	);
}

export function SolidRaids(props: { loading: Element }) {
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);
	element = props.loading;
	return <>
		{DisplayActivities({ activities: $CurrentPlayerProfile().activities, activityType: ActivityType.Raid, displayInactive: true })}
	</>;
}
export function SolidDungeons(props: { loading: Element }) {
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);
	element = props.loading;
	return <>
		{DisplayActivities({ activities: $CurrentPlayerProfile().activities, activityType: ActivityType.Dungeon, displayInactive: true })}
	</>;
}
export function SolidExoticMissions(props: { loading: Element }) {
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);
	element = props.loading;
	return <>

		{DisplayActivities({ activities: $CurrentPlayerProfile().activities, activityType: ActivityType.ExoticMission, displayInactive: true })}
	</>;
}
export function SolidGrandMasters(props: { loading: Element }) {
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);
	element = props.loading;
	return <>

		{DisplayActivities({ activities: $CurrentPlayerProfile().activities, activityType: ActivityType.ScoredNightFall, displayInactive: false })}
	</>;
}
