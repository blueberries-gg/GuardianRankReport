import { For, Match, Show, Switch } from "solid-js";
import { useStore } from "@nanostores/solid";
import { CurrentPlayerProfile } from "../stores/destinyPlayerData";
import { ActivityType } from "../enums/ActivityType";
import { DestinyActivity } from "../enums/DestinyActivity";
import { getMasterLike, IDisplayActivity, mapActivities } from "../utils/activities";
import { activitiesEN } from "../utils/enumStrings";
import { BASE_BUNGIE_URL } from "../utils/common";
import complete from "../resources/complete.png";
import missing from "../resources/missing.png";
import { getNormalCompletions, getCompletions, getMasterCompletions, getGrandMasterCompletions, FilterType, FilterActive, getActivitiesTotalCompletions, getActivitiesMasterCompletions, getActivitiesSealCompletions, getActivitiesFlawlessCompletions, getActivitiesSoloCompletions, getActivitiesSoloFlawlessCompletions } from "../utils/ActivityCalculations";

function ActivityCompletionsToString(complete: number, enabled: boolean) {
	return enabled ? ((complete < 0) ? "?" : complete.toString()) : "";
}

let element: Element;
function GetDisplayListHeader(props: { activityType: ActivityType }) {
	switch (props.activityType) {
		case ActivityType.Dungeon:
			return (
				<tr style="height:30px">
					<th></th>
					<th></th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt">Total Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt">Master Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt">Solo</th>
					<th style="text-align: center; vertical-align: middle; max-width: 51pt; font-size: 10pt">Solo Flawless</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt"></th>
				</tr>
			);
		case ActivityType.ExoticMission:
			return (
				<tr style="height:30px">
					<th></th>
					<th></th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt">Total Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt">Master Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt">Solo</th>
					<th style="text-align: center; vertical-align: middle; max-width: 60pt; font-size: 10pt">Solo Flawless</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt"></th>
				</tr>
			);
		case ActivityType.Raid:
			return (
				<tr style="height:30px">
					<th></th>
					<th></th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt">Total Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt">Master Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 51pt; font-size: 10pt">Flawless</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt"></th>
				</tr>
			);
		case ActivityType.ScoredNightFall:
			return (
				<tr style="height:30px">
					<th></th>
					<th></th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt">Total Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt"></th>
				</tr>
			);
	}
}

function GetDisplayItemDungeon(props: { item: IDisplayActivity }) {
	const totalCompletions = getCompletions(props.item);
	const enabled = totalCompletions != 0;
	const opacity = enabled ? 1 : 0.5;
	return (
		<tr style={`height:30px; opacity:${opacity}`}>
			<td></td>
			<td>{activitiesEN[props.item.Activity]}</td>
			<td style="text-align: center;" title={getNormalCompletions(props.item).toString()}>
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
			<td style="text-align: center;">
				<Show when={getMasterLike(mapActivities[props.item.Activity]).length > 0} >
					{ActivityCompletionsToString(getMasterCompletions(props.item), enabled)}
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
				<Show when={mapActivities[props.item.Activity].SoloFlawlessHash !== undefined}>
					<Show when={props.item.hasSoloFlawless == undefined}>
						<div style="margin: auto; width: fit-content;">
							{element}
						</div>
					</Show>
					<Show when={props.item.hasSoloFlawless == false}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img></div>
					</Show>
					<Show when={props.item.hasSoloFlawless == true}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img></div>
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
	const totalCompletions = getCompletions(props.item);
	const enabled = totalCompletions != 0;
	const opacity = enabled ? 1 : 0.5;
	return (
		<tr style={`height:30px; opacity:${opacity}`}>
			<td></td>
			<td>{activitiesEN[props.item.Activity]}</td>
			<td style="text-align: center;" title={getNormalCompletions(props.item).toString()}>
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
			<td style="text-align: center;">
				<Show when={getMasterLike(mapActivities[props.item.Activity]).length > 0} >
					{ActivityCompletionsToString(getMasterCompletions(props.item), enabled)}
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
	const totalCompletions = getCompletions(props.item);
	const enabled = totalCompletions != 0;
	const opacity = enabled ? 1 : 0.5;
	return (
		<tr style={`height:30px; opacity:${opacity}`}>
			<td></td>
			<td>{activitiesEN[props.item.Activity]}</td>
			<td style="text-align: center;" title={getNormalCompletions(props.item).toString()}>
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
			<td style="text-align: center;">
				<Show when={getMasterLike(mapActivities[props.item.Activity]).length > 0} >
					{ActivityCompletionsToString(getMasterCompletions(props.item) + getGrandMasterCompletions(props.item), enabled)}
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
				<Show when={mapActivities[props.item.Activity].SoloFlawlessHash !== undefined}>
					<Show when={props.item.hasSoloFlawless == undefined}>
						<div style="margin: auto; width: fit-content;">
							{element}
						</div>
					</Show>
					<Show when={props.item.hasSoloFlawless == false}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img></div>
					</Show>
					<Show when={props.item.hasSoloFlawless == true}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;"><img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img></div>
					</Show>
				</Show>
			</td>
		</tr>
	);
}
function GetDisplayItemScoredNightFall(props: { item: IDisplayActivity }) {
	const totalCompletions = getCompletions(props.item);
	const enabled = totalCompletions != 0;
	const opacity = enabled ? 1 : 0.5;
	return (
		<tr style={`height:30px; opacity:${opacity}`}>
			<td></td>
			<td>{activitiesEN[props.item.Activity]}</td>
			<td style="text-align: center;">
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
		</tr>
	);
}


function DisplayActivities(props: { activities: Map<keyof typeof DestinyActivity, IDisplayActivity>; activityType: ActivityType; displayInactive: boolean }) {
	const activities = Array.from(props.activities.values()).sort((x, y) => DestinyActivity[x.Activity] - DestinyActivity[y.Activity])
	const activityOfType = FilterType(activities, props.activityType);
	const active = FilterActive(activityOfType, true);
	const inactive = FilterActive(activityOfType, false);
	return (
		<div style="">
			<div style="background: #ffffff1A; padding: 10px; border-bottom: solid 2px currentcolor;">
				<div style="display: flex;">
					<div style="margin: auto; padding-top: 3pt;">
						<span style="font-size: 16pt; letter-spacing: 4pt;">
							<Switch>
								<Match when={props.activityType == ActivityType.Raid}>
									RAIDS
								</Match>
								<Match when={props.activityType == ActivityType.Dungeon}>
									DUNGEONS
								</Match>
								<Match when={props.activityType == ActivityType.ExoticMission}>
									EXOTIC MISSIONS
								</Match>
								<Match when={props.activityType == ActivityType.ScoredNightFall}>
									GRANDMASTER NIGHTFALLS
								</Match>
							</Switch>
						</span>
					</div>
				</div>
			</div>
			<div style="background: #ffffff0C; padding-block: 20px;padding-inline: 10px;">
				<div style="display: flex;">
					<span style="margin-block: 0px; margin: auto 0 auto 5px; font-size: 14pt">{``}</span>
				</div>
				<table class="completions-table">
					<thead>
						<GetDisplayListHeader activityType={props.activityType} />
					</thead>
					<tbody style="color: white">
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
						<tr style="height:1px; " class="completions-table-empty-tr">
						</tr>
						<tr style="height:30px;">
							<td></td>
							<td>Total</td>
							<td style="text-align: center;">{ActivityCompletionsToString(getActivitiesTotalCompletions(active), true)}</td>
							<Switch>
								<Match when={props.activityType == ActivityType.Raid}>
									<td style="text-align: center;">{ActivityCompletionsToString(getActivitiesMasterCompletions(active), true)}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(getActivitiesFlawlessCompletions(active), true)}/${active.filter((x) => mapActivities[x.Activity].FlawlessHash != undefined).length}`}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(getActivitiesSealCompletions(active), true)}/${active.filter((x) => mapActivities[x.Activity].SealHash != undefined).length}`}</td>
								</Match>
								<Match when={props.activityType == ActivityType.Dungeon}>
									<td style="text-align: center;">{ActivityCompletionsToString(getActivitiesMasterCompletions(active), true)}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(getActivitiesSoloCompletions(active), true)}/${active.filter((x) => mapActivities[x.Activity].SoloHash != undefined).length}`}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(getActivitiesSoloFlawlessCompletions(active), true)}/${active.filter((x) => mapActivities[x.Activity].SoloFlawlessHash != undefined).length}`}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(getActivitiesSealCompletions(active), true)}/${active.filter((x) => mapActivities[x.Activity].SealHash != undefined).length}`}</td>
								</Match>
								<Match when={props.activityType == ActivityType.ExoticMission}>
									<td style="text-align: center;">{ActivityCompletionsToString(getActivitiesMasterCompletions(active), true)}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(getActivitiesSoloCompletions(active), true)}/${active.filter((x) => mapActivities[x.Activity].SoloHash != undefined).length}`}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(getActivitiesSoloFlawlessCompletions(active), true)}/${active.filter((x) => mapActivities[x.Activity].SoloFlawlessHash != undefined).length}`}</td>
									<td style="text-align: center;"></td>
								</Match>
								<Match when={props.activityType == ActivityType.ScoredNightFall}>
									<td style="text-align: center;"></td>
								</Match>
							</Switch>
						</tr>
					</tbody>

					<Show when={props.displayInactive && inactive.length > 0}>
						<tr style="height:5px;"></tr>
						<tr style="height:30px; font-weight: bold;">
							<td></td>
							<Switch>
								<Match when={props.activityType == ActivityType.Raid}>
									<td style="border-bottom-style: solid 1px;" colspan="4">
										Legacy
									</td>
								</Match>
								<Match when={props.activityType == ActivityType.Dungeon}>
									<td style="border-bottom-style: solid 1px;" colspan="5">
										Legacy
									</td>
								</Match>
								<Match when={props.activityType == ActivityType.ExoticMission}>
									<td style="border-bottom-style: solid 1px;" colspan="5">
										Legacy
									</td>
								</Match>
								<Match when={props.activityType == ActivityType.ScoredNightFall}>
									<td style="border-bottom-style: solid 1px;" colspan="2">
										Legacy
									</td>
								</Match>
							</Switch>
							<td id={`${ActivityType[props.activityType]}-CollapseButton`} style="text-align:center; padding-top:5px; cursor:pointer;" onclick={
								(e) => {
									e.preventDefault();
									e.stopPropagation();
									const elementGroupCard = document.getElementById(`${ActivityType[props.activityType]}-LegacyTable`)!.closest(".activityGroupCard")!;
									const el = elementGroupCard
									const className = "touch-hover";
									if (el.classList) {
										el.classList.add(className);
										setTimeout(() => el.classList.remove(className), 400);
									}


									const element = document.getElementById(`${ActivityType[props.activityType]}-LegacyTable`);
									const collapseButton = document.getElementById(`${ActivityType[props.activityType]}-CollapseButton`);
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
		</div>
	);
}

export function SolidRaids(props: { loading?: Element }) {
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);
	element = props.loading!;
	return <>
		{DisplayActivities({ activities: $CurrentPlayerProfile().activities, activityType: ActivityType.Raid, displayInactive: true })}
	</>;
}
export function SolidDungeons(props: { loading?: Element }) {
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);
	element = props.loading!;
	return <>
		{DisplayActivities({ activities: $CurrentPlayerProfile().activities, activityType: ActivityType.Dungeon, displayInactive: true })}
	</>;
}
export function SolidExoticMissions(props: { loading?: Element }) {
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);
	element = props.loading!;
	return <>

		{DisplayActivities({ activities: $CurrentPlayerProfile().activities, activityType: ActivityType.ExoticMission, displayInactive: true })}
	</>;
}
export function SolidGrandMasters(props: { loading?: Element }) {
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);
	element = props.loading!;
	return <>

		{DisplayActivities({ activities: $CurrentPlayerProfile().activities, activityType: ActivityType.ScoredNightFall, displayInactive: false })}
	</>;
}
