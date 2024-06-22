import "core-js/stable";
import "core-js/proposals/set-methods-v2";
import { ActivityType } from "../enums/ActivityType";
import { DestinyActivity, Dungeons, ExoticMissions, Raids, ScoredNightFalls } from "../enums/DestinyActivity";
import { ModeType } from "../enums/ModeType";
import { StringsKeysOf } from "./common";


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
	const grandmaster = activity.Modes[ModeType[ModeType.Grandmaster] as keyof typeof ModeType] || [];
	return [...master, ...legend, ...heroic, ...grandmaster];
}

// Activities as of manifest 226232.24.06.12.1730-3-bnet.55913
interface _IBaseActivity {
	Type: ActivityType;
	Modes: { [key in StringsKeysOf<typeof ModeType>]?: number[] };
	Active?: boolean;
	Free: boolean;

	TopLevel: boolean;
	ParentActivity?: DestinyActivity | undefined;
	SubActivities?: DestinyActivity[];

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
	SubActivities: DestinyActivity[];

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
	Activity: keyof typeof DestinyActivity;
	Mode: StringsKeysOf<typeof ModeType>;
	UnderlyingMode: StringsKeysOf<typeof ModeType>;
}

export interface IDisplayActivity {
	Activity: keyof typeof DestinyActivity;
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

export const mapDungeons: { [key in keyof typeof Dungeons]: IActivity } = {
	Duality: {
		Modes: {
			Normal: [2823159265],
			Master: [1668217731, 3012587626],
		},
		Type: ActivityType.Dungeon,
		TopLevel: true,
		PresentationNode: 854126634,
		SealCompleteImage: "/common/destiny2_content/icons/a790fbe7847f14d2db958e3e76615179.png",
		SealIncompleteImage: "/common/destiny2_content/icons/0731d7cf298bdf76cd5077b16a68b8ab.png",
		SealHash: 3097916612,
		SealObjectives: [1350388308, 1801613309, 1864837600, 196842574, 2105786548, 2388189655, 3200960029, 3475888069, 3952021245, 755549938, 911294620],
		SoloHash: 755549938,
		SoloFlawlessHash: 4126703847,
		FlawlessHash: 1506696941,
		Active: true,
		Free: false,
	},

	GhostsOfTheDeep: {
		Modes: {
			Normal: [313828469],
			Master: [2716998124],
		},
		Type: ActivityType.Dungeon,
		TopLevel: true,
		PresentationNode: 1705744655,
		SealCompleteImage: "/common/destiny2_content/icons/3d13a54da5dbffcb80351563ff517a43.png",
		SealIncompleteImage: "/common/destiny2_content/icons/6037f681eb7763860133faa04a7b372f.png",
		SealHash: 3974717227,
		SealObjectives: [2238420633, 2519881105, 3187362676, 3202440564, 3358913961, 3584441401, 3817062456, 4136119953, 470621007, 646449162],
		SoloHash: 3584441401,
		SoloFlawlessHash: 2105117002,
		FlawlessHash: 4050558210,
		Active: true,
		Free: false,
	},

	GraspOfAvarice: {
		Modes: {
			Normal: [4078656646],
			Master: [1112917203, 3774021532],
		},
		Type: ActivityType.Dungeon,
		TopLevel: true,
		SoloHash: 678858776,
		SoloFlawlessHash: 3718971745,
		FlawlessHash: 2693589427,
		Active: true,
		Free: false,
	},

	PitOfHeresy: {
		Modes: {
			Other: [2559374368, 2559374374, 2559374375, 785700673, 785700678],
			Normal: [1375089621, 2582501063],
		},
		Type: ActivityType.Dungeon,
		TopLevel: true,
		SoloHash: 3841336511,
		SoloFlawlessHash: 3950599483,
		FlawlessHash: 245952203,
		Active: true,
		Free: false,
	},

	Prophecy: {
		Modes: {
			Normal: [1077850348, 4148187374],
		},
		Type: ActivityType.Dungeon,
		TopLevel: true,
		SoloHash: 3002642730,
		SoloFlawlessHash: 3191784400,
		FlawlessHash: 2010041484,
		Active: true,
		Free: true,
	},

	SpireOfTheWatcher: {
		Modes: {
			Normal: [1262462921],
			Master: [1801496203, 2296818662],
		},
		Type: ActivityType.Dungeon,
		TopLevel: true,
		PresentationNode: 4183969062,
		SealCompleteImage: "/common/destiny2_content/icons/40874c5d1b92e82321e226d1681eb57e.png",
		SealIncompleteImage: "/common/destiny2_content/icons/fd308d92cc3d3c304603cc0d332534c0.png",
		SealHash: 2302993504,
		SealObjectives: [1151761978, 1584772332, 1990962776, 3006836031, 3561230229, 3610349332, 395235013, 466074981, 905181048, 958830294],
		SoloHash: 1151761978,
		SoloFlawlessHash: 4032136335,
		FlawlessHash: 1591054373,
		Active: true,
		Free: false,
	},

	TheShatteredThrone: {
		Modes: {
			Normal: [2032534090],
		},
		Type: ActivityType.Dungeon,
		TopLevel: true,
		SoloHash: 3899996566,
		SoloFlawlessHash: 3205009787,
		FlawlessHash: 1178448425,
		Active: true,
		Free: false,
	},

	WarlordsRuin: {
		Modes: {
			Normal: [2004855007],
			Master: [2534833093],
		},
		Type: ActivityType.Dungeon,
		TopLevel: true,
		PresentationNode: 1021469803,
		SealCompleteImage: "/common/destiny2_content/icons/4737711fc9169f3f4215abcd53dbe114.png",
		SealIncompleteImage: "/common/destiny2_content/icons/03dd92083327fe9c2dfd4b9c7dd7a8bf.png",
		SealHash: 1142693639,
		SealObjectives: [131896889, 2905044529, 1631738192, 2093999292, 588582033, 4010412130, 822588172, 4288088327, 2438176321, 1342446533],
		SoloHash: 2905044529,
		SoloFlawlessHash: 238037026,
		FlawlessHash: 982579018,
		Active: true,
		Free: false,
	},
};
export const mapRaids: { [key in keyof typeof Raids]: IActivity } = {
	CrotasEnd: {
		Modes: {
			Contest: [156253568] /*Superior Swordplay*/,
			Normal: [4179289725],
			Master: [1507509200],
		},
		Type: ActivityType.Raid,
		PresentationNode: 238107129,
		SealCompleteImage: "/common/destiny2_content/icons/34af91f1cfc2358ca3c813e8a8a0bb5a.png",
		SealIncompleteImage: "/common/destiny2_content/icons/392fff0b6391ac1a8acf12ebf8189da1.png",
		TopLevel: true,
		SealHash: 865076293,
		SealObjectives: [
			116345475, 1334890488, 1447905713, 1510515137, 1732432755, 1896685129, 2045739672, 2237801267, 2259810484, 2487544289, 295018272, 3702810582,
			3922046691, 4259447007, 680822308, 710681626, 752641838, 942933865,
		],
		FlawlessHash: 2572383496,
		Active: true,
		Free: true,
	},

	CrownOfSorrow: {
		Modes: {
			Normal: [3333172150, 960175301],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		Active: false,
		Free: true,
	},

	DeepStoneCrypt: {
		Modes: {
			Normal: [3976949817, 910380154],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		PresentationNode: 2960810718,
		SealCompleteImage: "/common/destiny2_content/icons/ad2541fdf939dbd13f497c7730ebb7fb.png",
		SealIncompleteImage: "/common/destiny2_content/icons/7c75ee483c5ead72bb214d23d53f6b47.png",
		SealHash: 540377256,
		SealObjectives: [
			1277450448, 134885948, 1487317889, 22094034, 2530940166, 3185876102, 3200831458, 3323713181, 337542929, 3504856768, 3771160417, 3834307795,
			3875695735, 4216504853, 513707022, 518342793, 564366615, 64856166, 992355976,
		],
		FlawlessHash: 3560923614,
		Active: true,
		Free: false,
	},

	GardenOfSalvation: {
		Modes: {
			Normal: [1042180643, 2497200493, 3458480158, 3845997235],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		PresentationNode: 1827854727,
		SealCompleteImage: "/common/destiny2_content/icons/73145145af7557234148e93a9f504518.png",
		SealIncompleteImage: "/common/destiny2_content/icons/12fe6f9d691705cc1ed0ebf16576f74a.png",
		SealHash: 2909250963,
		SealObjectives: [
			1221037312, 1922270325, 2191554152, 2381358572, 2571794337, 277137394, 3427328428, 3719309782, 3804486505, 3860668859, 3866024089, 3949104239,
			4105510833, 44547560, 521675034, 637935773,
		],
		FlawlessHash: 1522774125,
		Active: true,
		Free: false,
	},

	KingsFall: {
		Modes: {
			Contest: [1063970578] /*Regicide*/,
			Normal: [1374392663, 2897223272],
			Master: [2964135793, 3257594522],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		PresentationNode: 2613142083,
		SealCompleteImage: "/common/destiny2_content/icons/1be2de95099f3b1fc8495b6eddde9024.png",
		SealIncompleteImage: "/common/destiny2_content/icons/9c88f0eb2197a6bcc7bf98ffd6148906.png",
		SealHash: 3910736783,
		SealObjectives: [
			4268824781, 3047702042, 1594888684, 70932677, 1760261415, 3666607158, 3147255355, 1329091971, 279569799, 1937728407, 3984168074, 3455875964,
			3293215595, 2840536766, 292491321, 4104207016, 2341906351, 3191912777, 3685101448, 3388215749, 2120297138,
		],
		FlawlessHash: 1360511082,
		Active: true,
		Free: true,
	},

	LastWish: {
		Modes: {
			Normal: [2122313384, 2214608156, 2214608157],
			Guided: [1661734046],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		PresentationNode: 1486062207,
		SealCompleteImage: "/common/destiny2_content/icons/9457a85d386aff3a5170287bf24b3ae2.png",
		SealIncompleteImage: "/common/destiny2_content/icons/423b959c92f0eef246eb90148028e602.png",
		SealHash: 1384029371,
		SealObjectives: [
			1359055399, 1711136422, 1847670729, 2756328801, 2826160801, 3000516033, 3234595894, 342038729, 3448775736, 3533973498, 380332968, 4078980921,
			623283604, 628370196, 717856991, 989244596,
		],
		FlawlessHash: 380332968,
		Active: true,
		Free: false,
	},
	Leviathan: {
		Modes: {
			Normal: [2693136600, 2693136601, 2693136602, 2693136603, 2693136604, 2693136605],
			Prestige: [
				1685065161, 1800508819, 2449714930, 3446541099, 3857338478, 3879860661, 3912437239, 417231112, 4206123728, 508802457, 757116822, 771164842,
			],
			Guided: [1699948563, 1875726950, 287649202, 3916343513, 4039317196, 89727599],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		Active: false,
		Free: true,
	},

	LeviathanEaterOfWorlds: {
		Modes: {
			Guided: [2164432138],
			Normal: [3089205900],
			Prestige: [809170886],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		Active: false,
		Free: true,
	},

	LeviathanSpireOfStars: {
		Modes: {
			Guided: [3004605630],
			Normal: [119944200],
			Prestige: [3213556450],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		Active: false,
		Free: true,
	},

	Pantheon: {
		Modes: {},
		SubActivities: [
			DestinyActivity.PhanteonAtraksSovereign,
			DestinyActivity.PhanteonOryxExalted,
			DestinyActivity.PhanteonRhulkIndomitable,
			DestinyActivity.PhanteonNezarecSublime,
		],
		Type: ActivityType.Raid,
		TopLevel: true,
		PresentationNode: 3492865493,
		SealCompleteImage: "/common/destiny2_content/icons/0b3457fbac5cd3a9cc8ee1fef34155c4.png",
		SealIncompleteImage: "/common/destiny2_content/icons/719e25fe621fce179b3fd23a6d7f58dc.png",
		SealHash: 3137935313,
		SealObjectives: [894827020, 1837704669, 2003855362, 1174708723, 2009395391, 2009395388, 2009395389, 2009395386, 2732129877, 2732129876],
		Active: false,
		Free: true,
	},

	PhanteonAtraksSovereign: {
		Modes: {
			Normal: [4169648179],
		},
		Type: ActivityType.Raid,
		TopLevel: false,
		ParentActivity: DestinyActivity.Pantheon,
		Active: false,
		Free: true,
	},

	PhanteonNezarecSublime: {
		Modes: {
			Normal: [4169648182],
		},
		Type: ActivityType.Raid,
		TopLevel: false,
		ParentActivity: DestinyActivity.Pantheon,
		Active: false,
		Free: true,
	},

	PhanteonOryxExalted: {
		Modes: {
			Normal: [4169648176],
		},
		Type: ActivityType.Raid,
		TopLevel: false,
		ParentActivity: DestinyActivity.Pantheon,
		Active: false,
		Free: true,
	},

	PhanteonRhulkIndomitable: {
		Modes: {
			Normal: [4169648177],
		},
		Type: ActivityType.Raid,
		TopLevel: false,
		ParentActivity: DestinyActivity.Pantheon,
		Active: false,
		Free: true,
	},

	RootOfNightmares: {
		Modes: {
			Normal: [2381413764],
			Master: [2918919505],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		PresentationNode: 1976056830,
		SealCompleteImage: "/common/destiny2_content/icons/0460df1df9f38c4c12813a126bca98d3.png",
		SealIncompleteImage: "/common/destiny2_content/icons/9e037b198dfce46642d5eff0dfe97eb9.png",
		SealHash: 2889189256,
		SealObjectives: [
			1160810407, 1247482413, 139617739, 1470555531, 1982000933, 2084487708, 210713679, 2656634354, 2764233436, 2778920213, 31076871, 3778413954,
			391307104, 4149006431, 4162933187, 4270724598, 4293716153, 499953236, 674616608, 921507736,
		],
		FlawlessHash: 397062446,
		Active: true,
		Free: false,
	},

	SalvationsEdge: {
		Modes: {
			Normal: [1541433876],
			Contest: [2192826039],
			Master: [4129614942],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		PresentationNode: 334829503,
		SealCompleteImage: "/common/destiny2_content/icons/d5b4d5163d7b60a73ef9f98c6e73753a.png",
		SealIncompleteImage: "/common/destiny2_content/icons/8eee2f16af5263e6b921085ad175b0ef.png",
		SealHash: 1382005115,
		SealObjectives: [
			1001835628, 1311861933, 1538747266, 1568864289, 1728165205, 1843442132, 2062070439, 2174160579, 2203607979, 2238088494, 2307589343, 2487240675,
			2705769344, 3123571268, 3202450274, 4098731599, 4266339619, 4283220514, 61627171, 632048942, 819153082, 870477756,
		],
		FlawlessHash: 3553593767,
		Active: true,
		Free: false,
	},

	ScourgeOfThePast: {
		Modes: {
			Normal: [2812525063, 548750096],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		Active: false,
		Free: true,
	},

	VaultOfGlass: {
		Modes: {
			Contest: [1485585878] /*Tempo's Edge*/,
			Guided: [3711931140],
			Normal: [3881495763],
			Master: [1681562271, 3022541210],
		},

		Type: ActivityType.Raid,
		TopLevel: true,
		PresentationNode: 3734352323,
		SealCompleteImage: "/common/destiny2_content/icons/7dfda29f41a56fe2a6eebc4cb7c27d19.png",
		SealIncompleteImage: "/common/destiny2_content/icons/94edf120e003752ca323ff795f2e68d8.png",
		SealHash: 4141971983,
		SealObjectives: [
			1024875083, 1129667036, 154213552, 1803186219, 1888851130, 1961032859, 1983700615, 2464700601, 2592913942, 2782679117, 3106039192, 3114569402,
			3790077074, 3890225317, 3903615031, 3969659747, 4170123161, 578313932, 706596766, 787552349, 874956966, 932039090, 991121189,
		],
		FlawlessHash: 2750088202,
		Active: true,
		Free: true,
	},

	VowOfTheDisciple: {
		Modes: {
			Guided: [4156879541],
			Other: [2906950631],
			Normal: [1441982566],
			Master: [3889634515, 4217492330],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		PresentationNode: 2886738008,
		SealCompleteImage: "/common/destiny2_content/icons/86d0ef0bc0cecf529c44fb592d3aebd0.png",
		SealIncompleteImage: "/common/destiny2_content/icons/6fa1163f2dcada1875be9421a7d147eb.png",
		SealHash: 1971228746,
		SealObjectives: [
			1053120087, 1120467498, 146328065, 1673084356, 1682546621, 1729647218, 1959737632, 2006434999, 2168422218, 2383291155, 3330343477, 3620246150,
			3950568572, 3991904123, 4241035147, 486676807, 610864524, 801186532, 990479197,
		],
		FlawlessHash: 4019717242,
		Active: true,
		Free: false,
	},
};
export const mapExoticMissions: { [key in keyof typeof ExoticMissions]: IActivity } = {
	Avalon: {
		Modes: {
			Normal: [3755529435, 509188661],
			Legend: [3083261666, 3951571983],
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: true,
		Free: false,
		// FlawlessHash: 3271224950,
		// MasterFlawlessHash: 1589025252,
		// SoloHash: 1967189514,
	},
	DualDestiny: {
		Modes: {
			Normal: [2162125410],
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: true,
		Free: false,
	},
	Excision: {
		Modes: {
			Grandmaster: [3794571135],
			Normal: [2657428132, 1512617309],
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: true,
		Free: false,
	},
	Harbinger: {
		Modes: {
			Normal: [1738383283],
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: false,
		Free: false,
	},
	Presage: {
		Modes: {
			Normal: [3883295757],
			Legend: [4201846671],
			NormalLegacy: [2124066889],
			Master: [4212753278],
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: true,
		Free: false,
	},
	SeraphsShield: {
		Modes: {
			Normal: [1221538367, 202306511],
			Legend: [2919809209, 995051012],
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: true,
		Free: false,
	},
	Starcrossed: {
		Modes: {
			Normal: [896748846, 196691221],
			Legend: [1013336498, 3214480871],
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: true,
		Free: false,
	},
	TheWhisper: {
		Modes: {
			Normal: [3743446313],
			Legend: [3871520787],
			NormalLegacy: [74501540],
			Heroic: [1099555105],
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: true,
		Free: true,
		FlawlessHash: 222099560,
		SoloFlawlessHash: 432190114,
		SoloHash: 3051225076,
	},

	VoxObscura: {
		Modes: {
			Normal: [2668737148, 901429423],
			Master: [613120446],
			Legend: [666172264],
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: true,
		Free: false,
	},

	ZeroHour: {
		Modes: {
			Normal: [3361746271],
			Legend: [1848771417],
			NormalLegacy: [3232506937],
			Heroic: [2731208666],
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: true,
		Free: true,
		FlawlessHash: 2966008051,
		SoloFlawlessHash: 1626830599,
		SoloHash: 748425411,
	},
};
export const mapScoredNightFalls: { [key in keyof typeof ScoredNightFalls]: IActivity } = {
	AGardenWorld: {
		Modes: {
			Grandmaster: [2533203708],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	BattlegroundBehemoth: {
		Modes: {
			Grandmaster: [3982925792, 8957763],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	BattlegroundFoothold: {
		Modes: {
			Grandmaster: [1593674948, 3580217919],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	BattlegroundHailstone: {
		Modes: {
			Grandmaster: [798920782, 881943181],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	BattlegroundOracle: {
		Modes: {
			Grandmaster: [284866935, 2969419388],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	BirthplaceOfTheVile: {
		Modes: {
			Grandmaster: [2766844306, 967120713],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	Broodhold: {
		Modes: {
			Grandmaster: [135872558, 265186825, 3879949581, 89113250],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	DefiantBattlegroundCosmodrome: {
		Modes: {
			Grandmaster: [3640623961, 53750498],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},
	DefiantBattlegroundEDZ: {
		Modes: {
			Grandmaster: [952545351, 2748682956],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},
	DefiantBattlegroundOrbitalPrison: {
		Modes: {
			Grandmaster: [2619900708, 1030419231],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},
	ExodusCrash: {
		Modes: {
			Grandmaster: [3233498454, 54961125, 68611398, 707920309, 2280860193, 2823591786],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	FallenSABER: {
		Modes: {
			Grandmaster: [3293630132, 676886831],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	HeistBattlegroundEuropa: {
		Modes: {
			Grandmaster: [247753793, 3458527562],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	HeistBattlegroundMars: {
		Modes: {
			Grandmaster: [446038093, 507866990],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	HeistBattlegroundMoon: {
		Modes: {
			Grandmaster: [1639515809, 3181063546],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	HyperNetCurrent: {
		Modes: {
			Grandmaster: [2039642510, 2082796332, 2389570605, 3429541735],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	LakeOfShadows: {
		Modes: {
			Grandmaster: [1302909043, 207226563, 3109193568, 3919254032],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	Liminality: {
		Modes: { Grandmaster: [1700470403, 2099835168] },
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},
	LegendPsiOpsBattlegroundCosmodrome: {
		Modes: {
			Grandmaster: [1387912492, 968118631, 3640623961],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	ProvingGrounds: {
		Modes: {
			Grandmaster: [2103025315, 3418624832],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	PsiOpsBattlegroundEDZ: {
		Modes: {
			Grandmaster: [2944405548, 4283638887],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	PsiOpsBattlegroundMoon: {
		Modes: {
			Grandmaster: [1764280975, 3410113364],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	SavathunsSong: {
		Modes: {
			Grandmaster: [2168858559, 3849697860],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	StrangeTerrain: {
		Modes: {
			Grandmaster: [3883876601],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheArmsDealer: {
		Modes: {
			Grandmaster: [1358381372, 1446478334, 1753547901, 3726640183],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheCorrupted: {
		Modes: {
			Grandmaster: [2416314393, 245243710, 3100302962, 3354105309],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheDevilsLair: {
		Modes: {
			Grandmaster: [1203950592, 2112435491],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheDisgraced: {
		Modes: {
			Grandmaster: [2136458560, 3381711459],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheFesteringCore: {
		Modes: {
			Grandmaster: [3455414851, 766116576],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheGlassway: {
		Modes: {
			Grandmaster: [3812135451, 4197461112],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheHollowedLair: {
		Modes: {
			Grandmaster: [1561733170, 283725097],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheInsightTerminus: {
		Modes: {
			Grandmaster: [2694576755, 3029388704, 3200108048, 554830595],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheInvertedSpire: {
		Modes: {
			Grandmaster: [2599001919, 281497220],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheLightblade: {
		Modes: {
			Grandmaster: [1964120205, 968885838],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheScarletKeep: {
		Modes: {
			Grandmaster: [1495545000, 3449817631],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TreeOfProbabilities: {
		Modes: {
			Grandmaster: [2023667984, 2660931443],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	WardenOfNothing: {
		Modes: {
			Grandmaster: [1473557543, 3597372938, 380956401, 3871967157, 4196944364, 557845334],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},
};
export const mapActivities: { [key in keyof typeof DestinyActivity]: IActivity } = {
	...mapDungeons,
	...mapRaids,
	...mapExoticMissions,
	...mapScoredNightFalls,
};

let _mapActivitiesAndModeByHash: Map<number, IActivityAndMode> | undefined = undefined;

function _getMapActivitiesAndModeByHash(activitiesFilter: { [key in keyof typeof DestinyActivity]: IActivity }) {
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