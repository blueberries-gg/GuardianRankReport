import { createResource, createSignal, For, Match, Show, Suspense, Switch } from "solid-js";
//import { useStore } from "@nanostores/solid";
import { CurrentPlayerProfile, PlayerActivityDetails } from "../stores/destinyPlayerData";
import { ActivityType } from "../utils/enums/ActivityType";
import { DestinyActivity } from "../utils/enums/DestinyActivities";
import { getMasterLike, IPlayerActivity, mapActivities } from "../utils/destinyActivities/activities";
import complete from "../resources/images/complete.png";
import missing from "../resources/images/missing.png";
import { DestinyActivityString } from "../utils/enums/strings/en/DestinyActivity";
import { GetPlayerActivityCompletions, PlayerActivitiesFilterType, PlayerActivitiesFilterActive, GetPlayerActivitiesTotalCompletions, GetPlayerActivitiesMasterCompletions, GetPlayerActivitiesFlawlessCompletions, GetPlayerActivitiesSealCompletions, GetPlayerActivitiesSoloCompletions, GetPlayerActivitiesSoloFlawlessCompletions, GetPlayerActivityModesCompletions, GetPlayerActivityModesDetailedCompletions, PlayerActivitiesFilterByActivity, GetPlayerActivitiesModesCompletions, } from "../utils/destinyExtensions/PlayerActivityCalculations";
import { BASE_BUNGIE_URL } from "../utils/destinyExtensions/APIExtensions";
import { ExoticCollectible, ExoticCollectibles } from "../utils/destinyActivities/exoticDrops";
import { ExoticWeaponString } from "../utils/enums/strings/en/WeaponExotic";
import { showModal } from "../scripts/fullScreenModal";
import { requestedActivity } from "../stores/activityStore";
import { ModeType } from "../utils/enums/ModeType";
import { StringsKeysOf } from "../utils/common";
import { ModeTypeString } from "../utils/enums/strings/en/ModeType";

function ActivityCompletionsToString(complete: number, enabled: boolean) {
	return enabled ? ((complete < 0) ? "?" : complete.toString()) : "";
}

function AllActivityCompletionsToString(props: { item: IPlayerActivity }) {
	let normalCompletions = GetPlayerActivityModesDetailedCompletions(props.item, [ModeType[ModeType.Normal]] as StringsKeysOf<typeof ModeType>[])
	let tooltipText = "Normal: " + normalCompletions.toString();
	let activity = mapActivities[props.item.Activity]

	Object.keys(ModeType).forEach(key => {
		let mode = key as StringsKeysOf<typeof ModeType>
		let completions = GetPlayerActivityModesDetailedCompletions(props.item, [mode])

		if ((activity.Modes[mode] != undefined && completions > 0) && (mode != ModeType[ModeType.Normal])) {
			tooltipText += `\n${ModeTypeString[mode]}: ` + completions.toString();
		}
	});

	return tooltipText;
}

function AllMasterlikeActivityCompletionsToString(props: { item: IPlayerActivity }) {
	let activity = mapActivities[props.item.Activity]

	let masterCompletions = GetPlayerActivityModesDetailedCompletions(props.item, [ModeType[ModeType.Master]] as StringsKeysOf<typeof ModeType>[])
	let tooltipText = masterCompletions > 0 ? "Master: " + masterCompletions : "";

	if (activity.Modes.GrandMaster != undefined) {
		let grandmasterCompletions = GetPlayerActivityModesDetailedCompletions(props.item, [ModeType[ModeType.GrandMaster]] as StringsKeysOf<typeof ModeType>[])
		if (grandmasterCompletions >0)
			{
		tooltipText += tooltipText.length > 0 ? "\n" : "";
		tooltipText += "Grandmaster: " + grandmasterCompletions.toString();
	}
	}

	if (activity.Modes.Eternity != undefined) {
		let eternityCompletions = GetPlayerActivityModesDetailedCompletions(props.item, [ModeType[ModeType.Eternity]] as StringsKeysOf<typeof ModeType>[])
		if (eternityCompletions > 0) {
			tooltipText += tooltipText.length > 0 ? "\n" : "";
			tooltipText += "Eternity: " + eternityCompletions.toString();
		}
	}

	if (activity.Modes.Ultimatum != undefined) {
		let ultimatumCompletions = GetPlayerActivityModesDetailedCompletions(props.item, [ModeType[ModeType.Ultimatum]] as StringsKeysOf<typeof ModeType>[])
		if (ultimatumCompletions > 0) {
			tooltipText += tooltipText.length > 0 ? "\n" : "";
			tooltipText += "Ultimatum: " + ultimatumCompletions.toString();
		}
	}

	if (activity.Modes.Heroic != undefined) {
		let heroicCompletions = GetPlayerActivityModesDetailedCompletions(props.item, [ModeType[ModeType.Heroic]] as StringsKeysOf<typeof ModeType>[])
		if (heroicCompletions > 0) {
			tooltipText += tooltipText.length > 0 ? "\n" : "";
			tooltipText += "Heroic: " + heroicCompletions.toString();
		}
	}

	if (activity.Modes.Legend != undefined) {
		let legendCompletions = GetPlayerActivityModesDetailedCompletions(props.item, [ModeType[ModeType.Legend]] as StringsKeysOf<typeof ModeType>[])
		if (legendCompletions > 0) {
			tooltipText += tooltipText.length > 0 ? "\n" : "";
			tooltipText += "Legend: " + legendCompletions.toString();
		}

	}

	return tooltipText;
}

let element: Element;
function GetDisplayListHeader(props: { activityTableType: string }) {
	switch (props.activityTableType) {
		case ActivityType[ActivityType.Dungeon]:
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
		case  ActivityType[ActivityType.ExoticMission]:
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
		case  ActivityType[ActivityType.Raid]:
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
		case  ActivityType[ActivityType.ScoredNightFall]:
			return (
				<tr style="height:30px">
					<th></th>
					<th style="min-width: 180px"></th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt">Total Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt"></th>
				</tr>
			);
			case "RiteOfTheNine":
				return (
					<tr style="height:30px">
					<th></th>
					<th style="min-width: 180px"></th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt">Total Clears</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt; padding: 5px;">Explorer</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt; padding: 5px;">Eternity</th>
					<th style="text-align: center; vertical-align: middle; max-width: 45pt; font-size: 10pt; padding: 5px;">Ultimatum</th>
				</tr>
				);
	}
}

function GetDisplayItemDungeon(props: { item: IPlayerActivity }) {
	const totalCompletions = GetPlayerActivityCompletions(props.item);
	const enabled = totalCompletions != 0;
	const color = enabled ? "#FFFFFF" : "#7F7F7F";
	return (
		<tr style={`color:${color};`} class="completions-table-row hoverable" onclick={() => { requestedActivity.set(props.item.Activity); showModal(); }}>
			<td></td>
			<td>{DestinyActivityString[props.item.Activity]}</td>
			<td style="text-align: center;" title={AllActivityCompletionsToString(props)}>
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
			<Show when={getMasterLike(mapActivities[props.item.Activity]).length > 0} fallback={<td style="text-align: center;"></td>}>
				<td style="text-align: center;" title={AllMasterlikeActivityCompletionsToString(props)}>
					{ActivityCompletionsToString(GetPlayerActivityModesCompletions(props.item, [ModeType[ModeType.Master], ModeType[ModeType.GrandMaster], ModeType[ModeType.Ultimatum], ModeType[ModeType.Eternity]] as StringsKeysOf<typeof ModeType>[]), enabled)}
				</td>
			</Show>
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
	const color = enabled ? "#FFFFFF" : "#7F7F7F";
	return (
		<tr style={`color:${color};`} class="completions-table-row hoverable" onclick={() => { requestedActivity.set(props.item.Activity); showModal(); }}>
			<td></td>
			<td>{DestinyActivityString[props.item.Activity]}</td>
			<td style="text-align: center;" title={AllActivityCompletionsToString(props)}>
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
			<Show when={getMasterLike(mapActivities[props.item.Activity]).length > 0} fallback={<td style="text-align: center;"></td>}>
				<td style="text-align: center;" title={AllMasterlikeActivityCompletionsToString(props)}>
					{ActivityCompletionsToString(GetPlayerActivityModesCompletions(props.item, [ModeType[ModeType.Master], ModeType[ModeType.GrandMaster]] as StringsKeysOf<typeof ModeType>[]), enabled)}
				</td>
			</Show>
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
	const color = enabled ? "#FFFFFF" : "#7F7F7F";
	return (
		<tr style={`color:${color};`} class="completions-table-row hoverable" onclick={() => { requestedActivity.set(props.item.Activity); showModal(); }}>
			<td></td>
			<td>{DestinyActivityString[props.item.Activity]}</td>
			<td style="text-align: center;" title={AllActivityCompletionsToString(props)}>
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
			<Show when={getMasterLike(mapActivities[props.item.Activity]).length > 0} fallback={<td style="text-align: center;"></td>}>
				<td style="text-align: center;" title={AllMasterlikeActivityCompletionsToString(props)}>
					{ActivityCompletionsToString(GetPlayerActivityModesCompletions(props.item, [ModeType[ModeType.Master], ModeType[ModeType.GrandMaster]] as StringsKeysOf<typeof ModeType>[]), enabled)}
				</td>
			</Show>
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
	const color = enabled ? "#FFFFFF" : "#7F7F7F";
	return (
		<tr style={`color:${color};`} class="completions-table-row hoverable" onclick={() => { requestedActivity.set(props.item.Activity); showModal(); }}>
			<td>{DestinyActivityString[props.item.Activity]}</td>
			<td style="text-align: center;">
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
		</tr>
	);
}

function GetDisplayItemRiteOfTheNine(props: { item: IPlayerActivity }) {
	const totalCompletions = GetPlayerActivityModesCompletions(props.item, [ModeType[ModeType.Explorer],  ModeType[ModeType.Eternity],ModeType[ModeType.Ultimatum]] as StringsKeysOf<typeof ModeType>[]);
	const explorerCompletions = GetPlayerActivityModesCompletions(props.item, [ModeType[ModeType.Explorer], ] as StringsKeysOf<typeof ModeType>[]);
	const eternityCompletions = GetPlayerActivityModesCompletions(props.item, [ModeType[ModeType.Eternity]] as StringsKeysOf<typeof ModeType>[]);
	const ultimatumCompletions = GetPlayerActivityModesCompletions(props.item, [ModeType[ModeType.Ultimatum],] as StringsKeysOf<typeof ModeType>[]);
	const enabled = totalCompletions != 0;
	const color = enabled ? "#FFFFFF" : "#7F7F7F";
	return (
		<tr style={`color:${color};`} class="completions-table-row hoverable" onclick={() => { requestedActivity.set(props.item.Activity); showModal(); }}>
			<td></td>
			<td>{DestinyActivityString[props.item.Activity]}</td>
			<td style="text-align: center;">
				{ActivityCompletionsToString(totalCompletions, enabled)}
			</td>
			<td style="text-align: center;">
				{ActivityCompletionsToString(explorerCompletions, enabled)}
			</td>
			<td style="text-align: center;">
				{ActivityCompletionsToString(eternityCompletions, enabled)}
			</td>
			<td style="text-align: center;">
				{ActivityCompletionsToString(ultimatumCompletions, enabled)}
			</td>
		</tr>
	);
}

function GetDisplayPlayerActivities(props: { activityType?: ActivityType| undefined; filterActivities?: DestinyActivity[] | undefined; activityTableType?: string | undefined; displayInactive: boolean; title: string }) {
	let activities = Array.from(CurrentPlayerProfile.get().activities.values());
	let displayActivityTableType = props.activityTableType ?? ActivityType[props.activityType ?? ActivityType.None];

	activities = PlayerActivitiesFilterType(activities, props.activityType);

	if (props.filterActivities != undefined)
		activities = PlayerActivitiesFilterByActivity(activities, props.filterActivities)

	if (props.activityType != ActivityType.ScoredNightFall)
		activities.sort((x, y) => DestinyActivity[y.Activity] - DestinyActivity[x.Activity]);
	else
		activities.sort((x, y) => DestinyActivity[x.Activity] - DestinyActivity[y.Activity]);


	const [active, setActive] = createSignal(PlayerActivitiesFilterActive(activities, true));
	const [inactive, setInactive] = createSignal(PlayerActivitiesFilterActive(activities, false));

	const [ownedCollectibles, setOwnedCollectibles] = createSignal<ExoticCollectible[]>();
	const [unownedCollectibles, setUnownedCollectibles] = createSignal<ExoticCollectible[]>();

	function UpdateCollectibles(playerProfile: PlayerActivityDetails) {
		const ownedCollectiblesHashes = playerProfile.collectibles;
		const unownedCollectiblesHashes = ExoticCollectibles.filter((exotic) => playerProfile.collectibles.findIndex((hash) => exotic.exoticWeapon == hash) == -1).flatMap((x) => x.exoticWeapon);

		let ownedCollectibles: ExoticCollectible[];
		let unownedCollectibles : ExoticCollectible[];

		if(props.filterActivities != undefined){
			ownedCollectibles = ownedCollectiblesHashes.map((hash) => ExoticCollectibles.find((exotic) => exotic.exoticWeapon == hash)!).filter((x) =>  props.filterActivities!.findIndex(y=> DestinyActivity[y] == x.sourceActivity) != -1);
			unownedCollectibles = unownedCollectiblesHashes.map((hash) => ExoticCollectibles.find((exotic) => exotic.exoticWeapon == hash)!).filter((x) =>  props.filterActivities!.findIndex(y=> DestinyActivity[y] == x.sourceActivity) != -1);
		}
		else{
			ownedCollectibles = ownedCollectiblesHashes.map((hash) => ExoticCollectibles.find((exotic) => exotic.exoticWeapon == hash)!).filter((x) => mapActivities[x.sourceActivity].Type == props.activityType);
			unownedCollectibles = unownedCollectiblesHashes.map((hash) => ExoticCollectibles.find((exotic) => exotic.exoticWeapon == hash)!).filter((x) => mapActivities[x.sourceActivity].Type == props.activityType)
		}
		ownedCollectibles.sort((x, y) => DestinyActivity[y.sourceActivity] - DestinyActivity[x.sourceActivity]);
		unownedCollectibles.sort((x, y) => DestinyActivity[y.sourceActivity] - DestinyActivity[x.sourceActivity]);


		setOwnedCollectibles(ownedCollectibles);
		setUnownedCollectibles(unownedCollectibles);
	}

	UpdateCollectibles(CurrentPlayerProfile.get());

	CurrentPlayerProfile.subscribe((playerProfile, _, changedKey) => {
		if (changedKey == "activities") {
			activities = Array.from(playerProfile.activities.values());
			
			if (props.filterActivities != undefined)
				activities = PlayerActivitiesFilterByActivity(activities, props.filterActivities)
			if (props.activityType != ActivityType.ScoredNightFall)
				activities.sort((x, y) => DestinyActivity[y.Activity] - DestinyActivity[x.Activity]);
			else
				activities.sort((x, y) => DestinyActivity[x.Activity] - DestinyActivity[y.Activity]);
			
				activities = PlayerActivitiesFilterType(activities, props.activityType);
			setActive([...PlayerActivitiesFilterActive(activities, true)]);
			setInactive(PlayerActivitiesFilterActive(activities, false));
		}
		if (changedKey == "collectibles") {
			UpdateCollectibles(playerProfile);
		}
	})

	return (
		<div style="width: 100%">
			<div style="background: #ffffff1A; padding: 10px; border-bottom: solid 2px currentcolor;">
				<div style="display: flex;">
					<div style="margin: auto; padding-top: 3pt;">
						<span style="font-size: 16pt; letter-spacing: 4pt;">
							{props.title}
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
						<GetDisplayListHeader activityTableType={displayActivityTableType} />
					</thead>
					<tbody style="color: white">
						<For each={active()}>{(item,) =>
							<Switch>
								<Match when={displayActivityTableType == ActivityType[ActivityType.Raid]}>
									<GetDisplayItemRaid item={item} />
								</Match>
								<Match when={displayActivityTableType == ActivityType[ActivityType.Dungeon]}>
									<GetDisplayItemDungeon item={item} />
								</Match>
								<Match when={displayActivityTableType == ActivityType[ActivityType.ExoticMission]}>
									<GetDisplayItemExoticMission item={item} />
								</Match>
								<Match when={displayActivityTableType == ActivityType[ActivityType.ScoredNightFall]}>
									<GetDisplayItemScoredNightFall item={item} />
								</Match>
								<Match when={displayActivityTableType == "RiteOfTheNine"}>
									<GetDisplayItemRiteOfTheNine item={item} />
								</Match>
							</Switch>
						}</For>
						<tr style="height:1px; " class="completions-table-empty-tr completions-table-empty-tr-border">
						</tr>
						<tr style="height:30px;">
							<td></td>
							<td>Total</td>
							<td style="text-align: center;">{ActivityCompletionsToString(GetPlayerActivitiesTotalCompletions(active(), displayActivityTableType), true)}</td>
							<Switch>
								<Match when={displayActivityTableType == ActivityType[ActivityType.Raid]}>
									<td style="text-align: center;">{ActivityCompletionsToString(GetPlayerActivitiesMasterCompletions(active()), true)}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesFlawlessCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].FlawlessHash != undefined).length}`}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesSealCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].SealHash != undefined).length}`}</td>
								</Match>
								<Match when={displayActivityTableType == ActivityType[ActivityType.Dungeon]}>
									<td style="text-align: center;">{ActivityCompletionsToString(GetPlayerActivitiesMasterCompletions(active()), true)}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesSoloCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].SoloHash != undefined).length}`}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesSoloFlawlessCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].SoloFlawlessHash != undefined).length}`}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesSealCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].SealHash != undefined).length}`}</td>
								</Match>
								<Match when={displayActivityTableType == ActivityType[ActivityType.ExoticMission]}>
									<td style="text-align: center;">{ActivityCompletionsToString(GetPlayerActivitiesMasterCompletions(active()), true)}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesSoloCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].SoloHash != undefined).length}`}</td>
									<td style="text-align: center;">{`${ActivityCompletionsToString(GetPlayerActivitiesSoloFlawlessCompletions(active()), true)}/${active().filter((x) => mapActivities[x.Activity].SoloFlawlessHash != undefined).length}`}</td>
									<td style="text-align: center;"></td>
								</Match>
								<Match when={displayActivityTableType == ActivityType[ActivityType.ScoredNightFall]}>
									<td style="text-align: center;"></td>
								</Match>
								<Match when={displayActivityTableType == "RiteOfTheNine"}>
								<td style="text-align: center;">{ActivityCompletionsToString(GetPlayerActivitiesModesCompletions(active(), [ModeType[ModeType.Explorer]] as StringsKeysOf<typeof ModeType>[]), true)}</td>
								<td style="text-align: center;">{ActivityCompletionsToString(GetPlayerActivitiesModesCompletions(active(), [ModeType[ModeType.Eternity]] as StringsKeysOf<typeof ModeType>[]), true)}</td>
								<td style="text-align: center;">{ActivityCompletionsToString(GetPlayerActivitiesModesCompletions(active(), [ModeType[ModeType.Ultimatum]] as StringsKeysOf<typeof ModeType>[]), true)}</td>


								</Match>
							</Switch>
						</tr>
					</tbody>

					<Show when={props.displayInactive && inactive().length > 0}>
						<tr style="height:5px;"></tr>
						<tr style="height:30px; font-weight: bold; background:#FFFFFF1A; cursor:pointer;" onclick=
							{
								() => {
									const element = document.getElementById(`${displayActivityTableType }-LegacyTable`);
									const collapseButton = document.getElementById(`${displayActivityTableType}-CollapseButton`);
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
								<Match when={displayActivityTableType == ActivityType[ActivityType.Raid]}>
									<td style="border-bottom-style: solid 1px;" colspan="4">
										Legacy
									</td>
								</Match>
								<Match when={displayActivityTableType == ActivityType[ActivityType.Dungeon]}>
									<td style="border-bottom-style: solid 1px;" colspan="5">
										Legacy
									</td>
								</Match>
								<Match when={displayActivityTableType == ActivityType[ActivityType.ExoticMission]}>
									<td style="border-bottom-style: solid 1px;" colspan="5">
										Legacy
									</td>
								</Match>
								<Match when={displayActivityTableType == ActivityType[ActivityType.ScoredNightFall]}>
									<td style="border-bottom-style: solid 1px;" colspan="2">
										Legacy
									</td>
								</Match>
							</Switch>
							<td id={`${displayActivityTableType}-CollapseButton`} style="text-align:center; padding-inline:5px;">
								&#9660
							</td>
						</tr>
						<tbody id={`${displayActivityTableType}-LegacyTable`} style="display: none; background:#FFFFFF0D">
							<For each={inactive()}>{(item,) =>
								<Switch>
									<Match when={displayActivityTableType == ActivityType[ActivityType.Raid]}>
										<GetDisplayItemRaid item={item} />
									</Match>
									<Match when={displayActivityTableType == ActivityType[ActivityType.Dungeon]}>
										<GetDisplayItemDungeon item={item} />
									</Match>
									<Match when={displayActivityTableType == ActivityType[ActivityType.ExoticMission]}>
										<GetDisplayItemExoticMission item={item} />
									</Match>
									<Match when={displayActivityTableType == ActivityType[ActivityType.ScoredNightFall]}>
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
								<GetExoticIcon item={item} acquired={true}></GetExoticIcon >
							</Suspense>
						}
					</For>
					<For each={ownedCollectibles()}>
						{(item,) =>
							<Suspense >
								<GetExoticIcon item={item} acquired={false}></GetExoticIcon >
							</Suspense>}
					</For>
				</div>
			</div>
		</div>
	);
}

function GetExoticIcon(props: { item: ExoticCollectible; acquired: boolean }) {
	const [profile] = createResource(async () => {
		//return (await GetDestinyInventoryItemDefinition(props.item.itemHash))?.displayProperties.name ?? ""
		return ExoticWeaponString[props.item.exoticWeapon];
	})
	const appliedStyle = !props.acquired ? "" : "opacity: 0.25;";
	return <>
		<div title={profile()} style="cursor: pointer;" class="destinyItem hoverable" onclick={() => { requestedActivity.set(props.item.sourceActivity); showModal(); }}>
			<img style={`width: 100%; height: 100%; ${appliedStyle}`} src={`${BASE_BUNGIE_URL}${props.item.icon}`} ></img>
		</div>
	</>
}

export function SolidRitesOfTheNine(props: { loading?: Element }) {
	element = props.loading!;
	return <GetDisplayPlayerActivities activityTableType="RiteOfTheNine" filterActivities={[DestinyActivity.SpireOfTheWatcher, DestinyActivity.GhostsOfTheDeep, DestinyActivity.Prophecy ]} displayInactive={true} title="RITES OF THE NINE"></GetDisplayPlayerActivities>;
}

export function SolidRaids(props: { loading?: Element }) {
	element = props.loading!;
	return <GetDisplayPlayerActivities activityType={ActivityType.Raid} displayInactive={true} title="RAIDS"></GetDisplayPlayerActivities>;
}
export function SolidDungeons(props: { loading?: Element }) {
	element = props.loading!;
	return <GetDisplayPlayerActivities activityType={ActivityType.Dungeon} displayInactive={true} title="DUNGEONS"></GetDisplayPlayerActivities>;
}
export function SolidExoticMissions(props: { loading?: Element }) {
	element = props.loading!;
	return <GetDisplayPlayerActivities activityType={ActivityType.ExoticMission} displayInactive={true} title="EXOTIC MISSIONS"></GetDisplayPlayerActivities>;
}
export function SolidGrandMasters(props: { loading?: Element }) {
	element = props.loading!;
	return <GetDisplayPlayerActivities activityType={ActivityType.ScoredNightFall} displayInactive={false} title="GRANDMASTER NIGHTFALLS"></GetDisplayPlayerActivities>;
}
