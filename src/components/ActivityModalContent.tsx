import { useStore } from "@nanostores/solid";
import { requestedActivity } from "../stores/activityStore";
import { DestinyActivityString } from "../utils/enums/strings/en/DestinyActivity";
import { CurrentPlayerProfile, GetDestinyRecordDefinition } from "../stores/destinyPlayerData";
import { For, Show, Suspense, createEffect, createResource } from "solid-js";
import { BASE_BUNGIE_URL } from "../utils/destinyExtensions/APIExtensions";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { DestinyActivityDetails } from "../utils/destinyActivities/activityDetails";
import { mapActivities } from "../utils/destinyActivities/activities";
import { ActivityType } from "../utils/enums/ActivityType";

export default function () {
	createEffect(() => {
		const lightbox = new PhotoSwipeLightbox({
			gallery: "#modalImage ",
			children: "a",
			pswpModule: () => import("photoswipe"),
			imageClickAction: "zoom",
			wheelToZoom: true,
			secondaryZoomLevel: 2,
		});
		lightbox.init();
		return () => {
			lightbox.destroy();
		};
	}, []);

	const $requestedActivity = useStore(requestedActivity);
	const $CurrentPlayerProfile = useStore(CurrentPlayerProfile);

	return (
		<div style="display: flex; flex-wrap: wrap; justify-content: center; width: 100vw; overflow-y: auto; max-height: 85vh;">
			<div
				id="modalImage"
				style="width: 45vw; min-width: 474px; max-width: 1080px; flex-grow: 4; display:flex; position: sticky; top: 0; max-height: 85vh;">
				<Show when={DestinyActivityDetails[$requestedActivity()].link.length > 0}>
					<a
						class="image-zoom"
						style="margin:auto"
						href={DestinyActivityDetails[$requestedActivity()].link}
						data-pswp-width={DestinyActivityDetails[$requestedActivity()].imageWidth}
						data-pswp-height={DestinyActivityDetails[$requestedActivity()].imageHeight}
						target="_blank">
						<img src={DestinyActivityDetails[$requestedActivity()].image} style="width: 100%;" />
					</a>
				</Show>

				<Show when={mapActivities[$requestedActivity()].Type == ActivityType.ScoredNightFall}>
					<a
						class="image-zoom"
						style="margin:auto"
						href="https://www.blueberries.gg/weapons/nightfall-weapons/"
						data-pswp-width={DestinyActivityDetails[$requestedActivity()].imageWidth}
						data-pswp-height={DestinyActivityDetails[$requestedActivity()].imageHeight}
						target="_blank">
						<img src={DestinyActivityDetails[$requestedActivity()].image} style="width: 100%;" />
					</a>
				</Show>
				{/* <a
					class="image-zoom"
					style="margin:auto"
					href={DestinyActivityDetails[$requestedActivity()].image}
					data-pswp-width={DestinyActivityDetails[$requestedActivity()].imageWidth}
					data-pswp-height={DestinyActivityDetails[$requestedActivity()].imageHeight}
					target="_blank">
					<img src={DestinyActivityDetails[$requestedActivity()].image} style="width: 100%;" />
				</a> */}
			</div>
			<div style="width: 55vw; flex-grow: 6;">
				<div style="color:#ffffffbf; font-family: 'Neue Haas Grotesk Text Pro','Helvetica', 'Arial', sans-serif; font-size: 16pt;">
					<div style="background: #ffffff1A; padding: 10px;">
						<div style="display: flex;">
							<div style="margin: auto; padding-top: 3pt;">
								<span style="font-size: 24pt; letter-spacing: 6pt; text-transform: uppercase;">
									{DestinyActivityString[$requestedActivity()]}
								</span>
							</div>
						</div>
					</div>
					<div style="padding: 15px;">
						<For each={DestinyActivityDetails[$requestedActivity()].description}>{(item) => <p>{item}</p>}</For>
						<Show
							when={
								($CurrentPlayerProfile().activities.get($requestedActivity())?.IncompleteObjectives?.length ?? 0) > 0 &&
								$CurrentPlayerProfile().activities.get($requestedActivity())?.isActive
							}>
							<div
								style="display: flex"
								onclick={() => {
									const element = document.getElementById("missingTriumphs");
									const collapseButton = document.getElementById("missingTriumphs-CollapseButton");
									if (element!.style.gridTemplateRows == "0fr") {
										element!.style.gridTemplateRows = "1fr";
										collapseButton!.innerHTML = "&#9650";
									} else {
										element!.style.gridTemplateRows = "0fr";
										collapseButton!.innerHTML = "&#9660";
									}
								}}>
								<span style="font-size: 18pt; letter-spacing: 2pt; font-weight: bold;">Unclaimed triumphs</span>
								<div id={`missingTriumphs-CollapseButton`} style="text-align:center; padding-inline:5px; margin-block: auto;">
									&#9660
								</div>
							</div>

							<div id="missingTriumphs" style="display: grid; grid-template-rows: 0fr; transition: grid-template-rows 500ms;">
								<div style="overflow: hidden;">
									<For each={$CurrentPlayerProfile().activities.get($requestedActivity())?.IncompleteObjectives}>
										{(item) => (
											<Suspense>
												<GetRecordDetails hash={item}></GetRecordDetails>
											</Suspense>
										)}
									</For>
								</div>
							</div>
						</Show>

						<Show when={DestinyActivityDetails[$requestedActivity()].link.length > 0}>
							<br></br>
							<a href={DestinyActivityDetails[$requestedActivity()].link} target="_blank" class="linkStyle">
								Check more info!
							</a>
						</Show>

						<Show when={mapActivities[$requestedActivity()].Type == ActivityType.ScoredNightFall}>
							<br></br>
							<a href="https://www.blueberries.gg/weapons/nightfall-weapons/" target="_blank" class="linkStyle">
								Check more info!
							</a>
						</Show>
					</div>
				</div>
			</div>
		</div>
	);
}

function GetRecordDetails(props: { hash: number }) {
	const [record] = createResource(async () => {
		return (await GetDestinyRecordDefinition(props.hash))?.displayProperties;
	});
	return (
		<>
			<div title={record()?.name ?? "Loading"} style="display: flex; width: fit-content;">
				<img
					src={`${BASE_BUNGIE_URL}${record()?.icon}`}
					style="height: 32px; margin-block: auto; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none;"
				/>
				<div style="margin-block: auto; margin-left: 10px; display: flex; flex-direction: column">
					<span>{record()?.name ?? "Loading missing triumph"}</span>
					<span style="font-size: 12pt;">{record()?.description ?? "Loading missing triumph"}</span>
				</div>
			</div>
		</>
	);
}
