import "core-js/stable";
import "core-js/proposals/set-methods-v2";
import { ActivityType } from "../enums/ActivityType";
import { DestinyActivity } from "../enums/DestinyActivities";
import { ModeType } from "../enums/ModeType";
import { StringsKeysOf } from "../common";
import { DungeonsBaseDefinitions } from "./dungeons";
import { RaidsBaseDefinitions } from "./raids";
import { ExoticMissionsBaseDefinitions } from "./exoticMissions";
import { ScoredNightFallsBaseDefinitions } from "./scoredNightfalls";


export const getNormalLike = function (activity: _IBaseActivity): number[] {
	const normal = activity.Modes[ModeType[ModeType.Normal] as keyof typeof ModeType] || [];
	const contest = activity.Modes[ModeType[ModeType.Contest] as keyof typeof ModeType] || [];
	const guided = activity.Modes[ModeType[ModeType.Guided] as keyof typeof ModeType] || [];
	const normalLegacy = activity.Modes[ModeType[ModeType.NormalLegacy] as keyof typeof ModeType] || [];
	return [...normal, ...contest, ...guided, ...normalLegacy];
}

export const getMasterLike = function (activity: _IBaseActivity): number[] {
	const master = activity.Modes[ModeType[ModeType.Master] as keyof typeof ModeType] || [];
	const legend = activity.Modes[ModeType[ModeType.Legend] as keyof typeof ModeType] || [];
	const heroic = activity.Modes[ModeType[ModeType.Heroic] as keyof typeof ModeType] || [];
	const grandmaster = activity.Modes[ModeType[ModeType.GrandMaster] as keyof typeof ModeType] || [];
	return [...master, ...legend, ...heroic, ...grandmaster];
}

// Activities as of manifest 226232.24.06.12.1730-3-bnet.55913
interface _IBaseActivity {
	Type: ActivityType;
	Modes: { [key in StringsKeysOf<typeof ModeType>]?: number[] };
	Active?: boolean;
	Free: boolean;

	TopLevel: boolean;
	ParentActivity?: StringsKeysOf<typeof DestinyActivity> | undefined;
	SubActivities?: StringsKeysOf<typeof DestinyActivity>[];

	PresentationNode?: number;
	SealCompleteImage?: string;
	SealIncompleteImage?: string;
	SealHash?: number;
	SealObjectives?: number[];

	FlawlessHash?: number;
	MasterFlawlessHash?: number;

	SoloFlawlessHash?: number;
	SoloHash?: number;
}

interface _IActivityParentSeal extends _IBaseActivity {
	SubActivities: StringsKeysOf<typeof DestinyActivity>[];

	PresentationNode: number;
	SealCompleteImage: string;
	SealIncompleteImage: string;
	SealHash: number;
	SealObjectives: number[];

	FlawlessHash?: never;
	MasterFlawlessHash?: never;

	SoloFlawlessHash?: never;
	SoloHash?: never;
}

interface _IActivityNoSeal extends _IBaseActivity {
	SubActivities?: never;

	PresentationNode?: never;
	SealCompleteImage?: never;
	SealIncompleteImage?: never;
	SealHash?: never;
	SealObjectives?: never;

	FlawlessHash?: never;
	MasterFlawlessHash?: never;

	SoloFlawlessHash?: never;
	SoloHash?: never;
}
interface _IActivityFlawlessSeal extends _IBaseActivity {
	SubActivities?: never;
	PresentationNode: number;
	SealCompleteImage: string;
	SealIncompleteImage: string;
	SealHash: number;
	SealObjectives: number[];

	FlawlessHash: number;
	MasterFlawlessHash?: never;

	SoloFlawlessHash?: never;
	SoloHash?: never;
}
interface _IActivitySoloFlawlessSeal extends _IBaseActivity {
	SubActivities?: never;
	PresentationNode: number;
	SealCompleteImage: string;
	SealIncompleteImage: string;
	SealHash: number;
	SealObjectives: number[];

	FlawlessHash: number;
	MasterFlawlessHash?: never;

	SoloFlawlessHash: number;
	SoloHash: number;
}
interface _IActivitySoloFlawless extends _IBaseActivity {
	SubActivities?: never;
	PresentationNode?: never;
	SealCompleteImage?: never;
	SealIncompleteImage?: never;
	SealHash?: never;
	SealObjectives?: never;

	FlawlessHash: number;
	MasterFlawlessHash?: never;

	SoloFlawlessHash: number;
	SoloHash: number;
}
interface _IActivityMasterFlawlessSolo extends _IBaseActivity {
	SubActivities?: never;
	PresentationNode?: never;
	SealCompleteImage?: never;
	SealIncompleteImage?: never;
	SealHash?: never;
	SealObjectives?: never;

	FlawlessHash: number;
	MasterFlawlessHash: number;

	SoloFlawlessHash?: never;
	SoloHash: number;
}

export type IActivity =
	| _IActivityParentSeal
	| _IActivityNoSeal
	| _IActivityFlawlessSeal
	| _IActivitySoloFlawless
	| _IActivitySoloFlawlessSeal
	| _IActivityMasterFlawlessSolo;

export interface IActivityAndMode {
	Activity: StringsKeysOf<typeof DestinyActivity>;
	Mode: StringsKeysOf<typeof ModeType>;
	UnderlyingMode: StringsKeysOf<typeof ModeType>;
}

export interface IPlayerActivity {
	Activity: StringsKeysOf<typeof DestinyActivity>;
	Type: keyof typeof ActivityType;
	Completions: Map<
		StringsKeysOf<typeof ModeType> | StringsKeysOf<typeof DestinyActivity>,
		Map<StringsKeysOf<typeof ModeType> | StringsKeysOf<typeof DestinyActivity>, number>
	>;
	IncompleteObjectives?: number[];
	hasSeal?: boolean;
	hasFlawless?: boolean;
	hasMasterFlawless?: boolean;
	hasSolo?: boolean;
	hasSoloFlawless?: boolean;
	isActive: boolean;
	dataInitialized: boolean;
}

export const mapActivities: { [key in StringsKeysOf<typeof DestinyActivity>]: IActivity } = {
	...DungeonsBaseDefinitions,
	...RaidsBaseDefinitions,
	...ExoticMissionsBaseDefinitions,
	...ScoredNightFallsBaseDefinitions,
	None:{
		Modes: {},
		Type: ActivityType.None,
		TopLevel: true,
		Active: false,
		Free: false,
	},

};

let _mapActivitiesAndModeByHash: Map<number, IActivityAndMode> | undefined = undefined;

function _getMapActivitiesAndModeByHash(activitiesFilter: { [key in StringsKeysOf<typeof DestinyActivity>]: IActivity }) {
	if (_mapActivitiesAndModeByHash == undefined) {
		_mapActivitiesAndModeByHash = new Map<number, IActivityAndMode>();
		Object.entries(activitiesFilter).flatMap(([activityName, activity]) =>
			Object.entries(activity.Modes).flatMap(([modeName, modeHashes]) =>
				modeHashes!.forEach((m) => {
					let mode = modeName as StringsKeysOf<typeof ModeType>;
					const modeType = ModeType[mode];
					if (modeType === ModeType.Contest || modeType === ModeType.Guided || modeType === ModeType.NormalLegacy)
						// This modes should be considered Normal for clear calculations
						mode = ModeType[ModeType.Normal] as StringsKeysOf<typeof ModeType>;
					if (modeType === ModeType.Legend || modeType === ModeType.Heroic)
						// Legend should be considered Master for clear calculations
						mode = ModeType[ModeType.Master] as StringsKeysOf<typeof ModeType>;
					_mapActivitiesAndModeByHash!.set(m, {
						Activity: activityName as StringsKeysOf<typeof DestinyActivity>,
						Mode: mode as StringsKeysOf<typeof ModeType>,
						UnderlyingMode: modeName as StringsKeysOf<typeof ModeType>,
					});
				})
			)
		);
	}
	return _mapActivitiesAndModeByHash;
}

export const mapActivitiesAndModeByHash: Map<number, IActivityAndMode> = _getMapActivitiesAndModeByHash(mapActivities);