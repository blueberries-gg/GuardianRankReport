import { createResource, createSignal, For, Match, Show, Suspense, Switch } from "solid-js";
//import { useStore } from "@nanostores/solid";
import { CurrentPlayerProfile, PlayerActivityDetails } from "../stores/destinyPlayerData";
import { ActivityType } from "../utils/enums/ActivityType";
import { DestinyActivity } from "../utils/enums/DestinyActivities";
import { getMasterLike, IPlayerActivity, mapActivities } from "../utils/destinyActivities/activities";
import complete from "../resources/images/complete.png";
import missing from "../resources/images/missing.png";
import { DestinyActivityString } from "../utils/enums/strings/en/DestinyActivity";
import { GetPlayerActivityCompletions, GetPlayerActivityNormalCompletions, GetPlayerActivityMasterCompletions, GetPlayerActivitiesGrandMasterCompletions, PlayerActivitiesFilterType, PlayerActivitiesFilterActive, GetPlayerActivitiesTotalCompletions, GetPlayerActivitiesMasterCompletions, GetPlayerActivitiesFlawlessCompletions, GetPlayerActivitiesSealCompletions, GetPlayerActivitiesSoloCompletions, GetPlayerActivitiesSoloFlawlessCompletions } from "../utils/destinyExtensions/PlayerActivityCalculations";
import { BASE_BUNGIE_URL } from "../utils/destinyExtensions/APIExtensions";
import { ExoticCollectible, ExoticCollectibles } from "../utils/destinyActivities/exoticDrops";
import { ExoticWeaponString } from "../utils/enums/strings/en/WeaponExotic";
import { showModal } from "../scripts/fullScreenModal";
import { requestedActivity } from "../stores/activityStore";

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
					<th style="min-width: 180px"></th>
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
					<th style="min-width: 180px"></th>
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
					<th style="min-width: 180px"></th>
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
					<th style="min-width: 180px"></th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt">Total Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt"></th>
				</tr>
			);
	}
}

function GetDisplayItemDungeon(props: { item: IPlayerActivity }) {
	const totalCompletions = GetPlayerActivityCompletions(props.item);
	const enabled = totalCompletions != 0;
	const opacity = enabled ? 1 : 0.5;
	return (
		<tr style={`opacity:${opacity};`} class="completions-table-row hoverable" onclick={() => {	requestedActivity.set(props.item.Activity);	showModal(); }}>
			<td></td>
			<td>{DestinyActivityString[props.item.Activity]}</td>
			<td style="text-align: center;" title={GetPlayerActivityNormalCompletions(props.item).toString()}>
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
			<td style="text-align: center;">
				<Show when={getMasterLike(mapActivities[props.item.Activity]).length > 0} >
					{ActivityCompletionsToString(GetPlayerActivityMasterCompletions(props.item), enabled)}
				</Show>
			</td>
			<td>
				<Show when={mapActivities[props.item.Activity].SoloHash !== undefined}>
					<Show when={props.item.hasSolo == false}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;">
							<img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img>
						</div>
					</Show>
					<Show when={props.item.hasSolo == true}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;">
							<img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img>
						</div>
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
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;">
							<img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img>
						</div>
					</Show>
					<Show when={props.item.hasSoloFlawless == true}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;">
							<img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img>
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
function GetDisplayItemRaid(props: { item: IPlayerActivity }) {
	const totalCompletions = GetPlayerActivityCompletions(props.item);
	const enabled = totalCompletions != 0;
	const opacity = enabled ? 1 : 0.5;
	return (
		<tr style={`opacity:${opacity};`} class="completions-table-row hoverable" onclick={() => {	requestedActivity.set(props.item.Activity);	showModal(); }}>
			<td></td>
			<td>{DestinyActivityString[props.item.Activity]}</td>
			<td style="text-align: center;" title={GetPlayerActivityNormalCompletions(props.item).toString()}>
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
			<td style="text-align: center;">
				<Show when={getMasterLike(mapActivities[props.item.Activity]).length > 0} >
					{ActivityCompletionsToString(GetPlayerActivityMasterCompletions(props.item), enabled)}
				</Show>
			</td>
			<td>
				<Show when={mapActivities[props.item.Activity].FlawlessHash !== undefined}>
					<Show when={props.item.hasFlawless == false}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;">
							<img style="width: 100%;  height: 100%;" src={`${missing.src}`}></img>
						</div>
					</Show>
					<Show when={props.item.hasFlawless == true}>
						<div style="margin: auto; width: 20px;  height: 20px; vertical-align: middle;">
							<img style="width: 100%;  height: 100%;" src={`${complete.src}`}></img>
						</div>
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
function GetDisplayItemExoticMission(props: { item: IPlayerActivity }) {
	const totalCompletions = GetPlayerActivityCompletions(props.item);
	const enabled = totalCompletions != 0;
	const opacity = enabled ? 1 : 0.5;
	return (
		<tr style={`opacity:${opacity};`} class="completions-table-row hoverable" onclick={() => {	requestedActivity.set(props.item.Activity);	showModal(); }}>
			<td></td>
			<td>{DestinyActivityString[props.item.Activity]}</td>
			<td style="text-align: center;" title={GetPlayerActivityNormalCompletions(props.item).toString()}>
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
			<td style="text-align: center;">
				<Show when={getMasterLike(mapActivities[props.item.Activity]).length > 0} >
					{ActivityCompletionsToString(GetPlayerActivityMasterCompletions(props.item) + GetPlayerActivitiesGrandMasterCompletions(props.item), enabled)}
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
			<td></td>
		</tr>
	);
}
function GetDisplayItemScoredNightFall(props: { item: IPlayerActivity }) {
	const totalCompletions = GetPlayerActivityCompletions(props.item);
	const enabled = totalCompletions != 0;
	const opacity = enabled ? 1 : 0.5;
	return (
		<tr style={`opacity:${opacity};`} class="completions-table-row hoverable" onclick={() => {	requestedActivity.set(props.item.Activity);	showModal(); }}>
			<td></td>
			<td>{DestinyActivityString[props.item.Activity]}</td>
			<td style="text-align: center;">
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
		</tr>
	);
}

function GetDisplayPlayerActivities(props: { activityType: ActivityType; displayInactive: boolean }) {
	let activities = Array.from(CurrentPlayerProfile.get().activities.values());
	if (props.activityType != ActivityType.ScoredNightFall)
		activities.sort((x, y) => DestinyActivity[y.Activity] - DestinyActivity[x.Activity]);
	else
		activities.sort((x, y) => DestinyActivity[x.Activity] - DestinyActivity[y.Activity]);
	let activityOfType = PlayerActivitiesFilterType(activities, props.activityType);
	const [active, setActive] = createSignal(PlayerActivitiesFilterActive(activityOfType, true));
	const [inactive, setInactive] = createSignal(PlayerActivitiesFilterActive(activityOfType, false));

	const [ownedCollectibles, setOwnedCollectibles] = createSignal<ExoticCollectible[]>();
	const [unownedCollectibles, setUnownedCollectibles] = createSignal<ExoticCollectible[]>();

	function UpdateCollectibles(playerProfile: PlayerActivityDetails) {
		const ownedCollectiblesHashes = playerProfile.collectibles;
		const unownedCollectiblesHashes = ExoticCollectibles.filter((exotic) => playerProfile.collectibles.findIndex((hash) => exotic.exoticWeapon == hash) == -1).flatMap((x) => x.exoticWeapon);

		const ownedCollectibles = ownedCollectiblesHashes.map((hash) => ExoticCollectibles.find((exotic) => exotic.exoticWeapon == hash)!).filter((x) => mapActivities[x.sourceActivity].Type == props.activityType);
		const unownedCollectibles = unownedCollectiblesHashes.map((hash) => ExoticCollectibles.find((exotic) => exotic.exoticWeapon == hash)!).filter((x) => mapActivities[x.sourceActivity].Type == props.activityType)

		ownedCollectibles.sort((x, y) => DestinyActivity[y.sourceActivity] - DestinyActivity[x.sourceActivity]);
		unownedCollectibles.sort((x, y) => DestinyActivity[y.sourceActivity] - DestinyActivity[x.sourceActivity]);

		setOwnedCollectibles(ownedCollectibles);
		setUnownedCollectibles(unownedCollectibles);
	}

	UpdateCollectibles(CurrentPlayerProfile.get());

	CurrentPlayerProfile.subscribe((playerProfile, _, changedKey) => {
		if (changedKey == "activities") {
			activities = Array.from(playerProfile.activities.values());
			if (props.activityType != ActivityType.ScoredNightFall)
				activities.sort((x, y) => DestinyActivity[y.Activity] - DestinyActivity[x.Activity]);
			else
				activities.sort((x, y) => DestinyActivity[x.Activity] - DestinyActivity[y.Activity]);
			activityOfType = PlayerActivitiesFilterType(activities, props.activityType);
			setActive([...PlayerActivitiesFilterActive(activityOfType, true)]);
			setInactive(PlayerActivitiesFilterActive(activityOfType, false));
		}
		if (changedKey == "collectibles") {
			UpdateCollectibles(playerProfile);
		}
	})

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
			<div style="background: #ffffff0C; padding-block: 10px;padding-inline: 10px;">
				<div style="display: flex;">
					<span style="margin-block: 0px; margin: auto 0 auto 5px; font-size: 14pt">{``}</span>
				</div>
				<table class="completions-table">
					<thead>
						<GetDisplayListHeader activityType={props.activityType} />
					</thead>
					<tbody style="color: white">
						<For each={active()}>{(item,) =>
							<Switch>
								<Match when={props.activityType == ActivityType.Raid}>
									<GetDisplayItemRaid item={item} />
								</Match>
								<Match when={props.activityType == ActivityType.Dungeon}>
									<GetDisplayItemDungeon item={item} />
								</Match>
								<Match when={props.activityType == ActivityType.ExoticMission}>
									<GetDisplayItemExoticMission item={item} />
								</Match>
								<Match when={props.activityType == ActivityType.ScoredNightFall}>
									<GetDisplayItemScoredNightFall item={item} />
								</Match>
							</Switch>
						}</For>
						<tr style="height:1px; " class="completions-table-empty-tr completions-table-empty-tr-border">
						</tr>
						<tr style="height:30px;">
							<td></td>
							<td>Total</td>
							<td style="text-align: center;">{ActivityCompletionsToString(GetPlayerActivitiesTotalCompletions(active()), true)}</td>
							<Switch>
								<Match when={props.activityType == ActivityType.Raid}>
									<td style="text-align: center;">{ActivityCompletionsToString(GetPlayerActivitiesMasterCompletions(active()), true)}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesFlawlessCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].FlawlessHash != undefined).length}`}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesSealCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].SealHash != undefined).length}`}</td>
								</Match>
								<Match when={props.activityType == ActivityType.Dungeon}>
									<td style="text-align: center;">{ActivityCompletionsToString(GetPlayerActivitiesMasterCompletions(active()), true)}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesSoloCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].SoloHash != undefined).length}`}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesSoloFlawlessCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].SoloFlawlessHash != undefined).length}`}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesSealCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].SealHash != undefined).length}`}</td>
								</Match>
								<Match when={props.activityType == ActivityType.ExoticMission}>
									<td style="text-align: center;">{ActivityCompletionsToString(GetPlayerActivitiesMasterCompletions(active()), true)}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesSoloCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].SoloHash != undefined).length}`}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesSoloFlawlessCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].SoloFlawlessHash != undefined).length}`}</td>
									<td style="text-align: center;"></td>
								</Match>
								<Match when={props.activityType == ActivityType.ScoredNightFall}>
									<td style="text-align: center;"></td>
								</Match>
							</Switch>
						</tr>
					</tbody>

					<Show when={props.displayInactive && inactive().length > 0}>
						<tr style="height:5px;"></tr>
						<tr style="height:30px; font-weight: bold; background:#FFFFFF1A; cursor:pointer;" onclick=
							{
								() => {
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
							}
						>
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
							<td id={`${ActivityType[props.activityType]}-CollapseButton`} style="text-align:center; padding-inline:5px;">
								&#9660
							</td>
						</tr>
						<tbody id={`${ActivityType[props.activityType]}-LegacyTable`} style="display: none; background:#FFFFFF0D">
							<For each={inactive()}>{(item,) =>
								<Switch>
									<Match when={props.activityType == ActivityType.Raid}>
										<GetDisplayItemRaid item={item} />
									</Match>
									<Match when={props.activityType == ActivityType.Dungeon}>
										<GetDisplayItemDungeon item={item} />
									</Match>
									<Match when={props.activityType == ActivityType.ExoticMission}>
										<GetDisplayItemExoticMission item={item} />
									</Match>
									<Match when={props.activityType == ActivityType.ScoredNightFall}>
										<GetDisplayItemScoredNightFall item={item} />
									</Match>
								</Switch>
							}</For>
						</tbody>
						<tbody>
							<tr style="height:5px;" class="completions-table-empty-tr"></tr>
							{/* <tr style="height:1px;" class="completions-table-empty-tr completions-table-empty-tr-border"></tr> */}
						</tbody>

					</Show>
				</table>
				<div style="display: flex;  gap: 5px; flex-wrap: wrap; justify-content: center; padding-top: 10px; border-top: solid 2px;">
					<For each={unownedCollectibles()}>
						{(item,) =>
							<Suspense >
								<GetExoticIcon item={item} grayscale={true}></GetExoticIcon >
							</Suspense>
						}
					</For>
					<For each={ownedCollectibles()}>
						{(item,) =>
							<Suspense >
								<GetExoticIcon item={item} grayscale={false}></GetExoticIcon >
							</Suspense>}
					</For>
				</div>
			</div>
		</div>
	);
}

function GetExoticIcon(props: { item: ExoticCollectible; grayscale: boolean }) {
	const [profile] = createResource(async () => {
		//return (await GetDestinyInventoryItemDefinition(props.item.itemHash))?.displayProperties.name ?? ""
		return ExoticWeaponString[props.item.exoticWeapon];
	})
	const appliedStyle = !props.grayscale ? "" : "opacity: 0.25;";
	return <>
		<div title={profile()} class="destinyItem hoverable">
			<img style={`width: 100%; height: 100%; ${appliedStyle}`} src={`${BASE_BUNGIE_URL}${props.item.icon}`} ></img>
		</div>
	</>
}

export function SolidRaids(props: { loading?: Element }) {
	element = props.loading!;
	return <>
		<GetDisplayPlayerActivities activityType={ActivityType.Raid} displayInactive={true}></GetDisplayPlayerActivities>
	</>;
}
export function SolidDungeons(props: { loading?: Element }) {
	element = props.loading!;
	return <>
		<GetDisplayPlayerActivities activityType={ActivityType.Dungeon} displayInactive={true}></GetDisplayPlayerActivities>
	</>;
}
export function SolidExoticMissions(props: { loading?: Element }) {
	element = props.loading!;
	return <>
		<GetDisplayPlayerActivities activityType={ActivityType.ExoticMission} displayInactive={true}></GetDisplayPlayerActivities>
	</>;
}
export function SolidGrandMasters(props: { loading?: Element }) {
	element = props.loading!;
	return <>
		<GetDisplayPlayerActivities activityType={ActivityType.ScoredNightFall} displayInactive={false}></GetDisplayPlayerActivities>
	</>;
}
