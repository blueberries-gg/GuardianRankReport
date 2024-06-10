import "core-js/stable";
import "core-js/proposals/set-methods-v2";
import { ActivityType } from "../enums/ActivityType";
import { DestinyActivity } from "../enums/DestinyActivity";
import { ModeType } from "../enums/ModeType";

export interface IActivity {
	Modes: { [key in keyof typeof ModeType]?: number[] };
	Type: ActivityType;
	TitleHash?: number;
	RelatedObjectives?: number[];
	FlawlessHash?: number[];
	SoloHash?: number[];
}

export interface IActivityAndMode {
	Activity: keyof typeof DestinyActivity;
	Mode: keyof typeof ModeType;
	UnderlyingMode: keyof typeof ModeType;
}

export interface IDisplayActivity {
	Activity: keyof typeof DestinyActivity;
	Completions: Map<keyof typeof ModeType, Map<keyof typeof ModeType, number>>;
	Flawless?: boolean;
	Solo?: boolean;
}

export const mapActivities: { [key in keyof typeof DestinyActivity]: IActivity } = {
	AGardenWorld: {
		Modes: {
			Grandmaster: [2533203708],
		},
		Type: ActivityType.ScoredNightFall,
	},
	PhanteonAtraksSovereign: {
		Modes: {
			Normal: [4169648179],
		},
		Type: ActivityType.Raid,
	},

	Avalon: {
		Modes: {
			Normal: [3755529435],
			Legend: [3083261666],
		},
		Type: ActivityType.ExoticMission,
	},

	BattlegroundBehemoth: {
		Modes: {
			Grandmaster: [3982925792, 8957763],
		},
		Type: ActivityType.ScoredNightFall,
	},

	BattlegroundFoothold: {
		Modes: {
			Grandmaster: [1593674948, 3580217919],
		},
		Type: ActivityType.ScoredNightFall,
	},

	BattlegroundHailstone: {
		Modes: {
			Grandmaster: [798920782, 881943181],
		},
		Type: ActivityType.ScoredNightFall,
	},

	BattlegroundOracle: {
		Modes: {
			Grandmaster: [284866935, 2969419388],
		},
		Type: ActivityType.ScoredNightFall,
	},

	BirthplaceOfTheVile: {
		Modes: {
			Grandmaster: [2766844306, 967120713],
		},
		Type: ActivityType.ScoredNightFall,
	},

	Broodhold: {
		Modes: {
			Grandmaster: [135872558, 265186825, 3879949581, 89113250],
		},
		Type: ActivityType.ScoredNightFall,
	},

	CrotasEnd: {
		Modes: {
			Contest: [156253568],
			Normal: [4179289725],
			Master: [1507509200],
		},
		Type: ActivityType.Raid,
	},

	CrownOfSorrow: {
		Modes: {
			Normal: [3333172150, 960175301],
		},
		Type: ActivityType.Raid,
	},

	DeepStoneCrypt: {
		Modes: {
			Normal: [3976949817, 910380154],
		},
		Type: ActivityType.Raid,
	},

	Duality: {
		Modes: {
			Normal: [2823159265],
			Master: [1668217731, 3012587626],
		},
		Type: ActivityType.Dungeon,
	},

	ExodusCrash: {
		Modes: {
			Grandmaster: [3233498454, 54961125, 68611398, 707920309],
		},
		Type: ActivityType.ScoredNightFall,
	},

	FallenSABER: {
		Modes: {
			Grandmaster: [3293630132, 676886831],
		},
		Type: ActivityType.ScoredNightFall,
	},

	GardenOfSalvation: {
		Modes: {
			Normal: [1042180643, 2497200493, 3458480158, 3845997235],
		},
		Type: ActivityType.Raid,
	},

	GhostsOfTheDeep: {
		Modes: {
			Normal: [313828469],
			Master: [2716998124],
		},
		Type: ActivityType.Dungeon,
	},

	GraspOfAvarice: {
		Modes: {
			Normal: [4078656646],
			Master: [1112917203, 3774021532],
		},
		Type: ActivityType.Dungeon,
	},

	Harbinger: {
		Modes: {
			Normal: [1738383283],
		},
		Type: ActivityType.ExoticMission,
	},

	HeistBattlegroundEuropa: {
		Modes: {
			Grandmaster: [247753793, 3458527562],
		},
		Type: ActivityType.ScoredNightFall,
	},

	HeistBattlegroundMars: {
		Modes: {
			Grandmaster: [446038093, 507866990],
		},
		Type: ActivityType.ScoredNightFall,
	},

	HeistBattlegroundMoon: {
		Modes: {
			Grandmaster: [1639515809, 3181063546],
		},
		Type: ActivityType.ScoredNightFall,
	},

	HyperNetCurrent: {
		Modes: {
			Grandmaster: [2039642510, 2082796332, 2389570605, 3429541735],
		},
		Type: ActivityType.ScoredNightFall,
	},

	KingsFall: {
		Modes: {
			Contest: [1063970578],
			Normal: [1374392663, 2897223272],
			Master: [2964135793, 3257594522],
		},
		Type: ActivityType.Raid,
	},

	LakeOfShadows: {
		Modes: {
			Grandmaster: [1302909043, 207226563, 3109193568, 3919254032],
		},
		Type: ActivityType.ScoredNightFall,
	},

	LastWish: {
		Modes: {
			Normal: [2122313384, 2214608156, 2214608157],
			Guided: [1661734046],
		},
		Type: ActivityType.Raid,
	},

	LegendPsiOpsBattlegroundCosmodrome: {
		Modes: {
			Grandmaster: [1387912492, 968118631],
		},
		Type: ActivityType.ScoredNightFall,
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
	},

	LeviathanEaterOfWorlds: {
		Modes: {
			Guided: [2164432138],
			Normal: [3089205900],
			Prestige: [809170886],
		},
		Type: ActivityType.Raid,
	},

	LeviathanSpireOfStars: {
		Modes: {
			Guided: [3004605630],
			Normal: [119944200],
			Prestige: [3213556450],
		},
		Type: ActivityType.Raid,
	},

	PhanteonNezarecSublime: {
		Modes: {
			Normal: [4169648182],
		},
		Type: ActivityType.Raid,
	},

	OperationSeraphsShield: {
		Modes: {
			Normal: [1221538367, 202306511],
			Legend: [2919809209, 995051012],
		},
		Type: ActivityType.ExoticMission,
	},

	PhanteonOryxExalted: {
		Modes: {
			Normal: [4169648176],
		},
		Type: ActivityType.Raid,
	},

	PitOfHeresy: {
		Modes: {
			Other: [2559374368, 2559374374, 2559374375, 785700673, 785700678],
			Normal: [1375089621, 2582501063],
		},
		Type: ActivityType.Dungeon,
	},

	Presage: {
		Modes: {
			Normal: [3883295757],
			Legend: [4201846671],
			NormalLegacy: [2124066889],
			Master: [4212753278],
		},
		Type: ActivityType.ExoticMission,
	},

	Prophecy: {
		Modes: {
			Normal: [1077850348, 4148187374],
		},
		Type: ActivityType.Dungeon,
	},

	ProvingGrounds: {
		Modes: {
			Grandmaster: [2103025315, 3418624832],
		},
		Type: ActivityType.ScoredNightFall,
	},

	PsiOpsBattlegroundEDZ: {
		Modes: {
			Grandmaster: [2944405548, 4283638887],
		},
		Type: ActivityType.ScoredNightFall,
	},

	PsiOpsBattlegroundMoon: {
		Modes: {
			Grandmaster: [1764280975, 3410113364],
		},
		Type: ActivityType.ScoredNightFall,
	},

	PhanteonRhulkIndomitable: {
		Modes: {
			Normal: [4169648177],
		},
		Type: ActivityType.Raid,
	},
	RootOfNightmares: {
		Modes: {
			Normal: [2381413764],
			Master: [2918919505],
		},
		Type: ActivityType.Raid,
	},
	SalvationsEdge: {
		Modes: {
			Normal: [1541433876],
			Contest: [2192826039],
		},
		Type: ActivityType.Raid,
	},
	SavathunsSong: {
		Modes: {
			Grandmaster: [2168858559, 3849697860],
		},
		Type: ActivityType.ScoredNightFall,
	},
	ScourgeOfThePast: {
		Modes: {
			Normal: [2812525063, 548750096],
		},
		Type: ActivityType.Raid,
	},
	SpireOfTheWatcher: {
		Modes: {
			Normal: [1262462921],
			Master: [1801496203, 2296818662],
		},
		Type: ActivityType.Dungeon,
	},
	Starcrossed: {
		Modes: {
			Normal: [896748846],
			Legend: [1013336498],
		},
		Type: ActivityType.ExoticMission,
	},
	StrangeTerrain: {
		Modes: {
			Grandmaster: [3883876601],
		},
		Type: ActivityType.ScoredNightFall,
	},
	TheArmsDealer: {
		Modes: {
			Grandmaster: [1358381372, 1446478334, 1753547901, 3726640183],
		},
		Type: ActivityType.ScoredNightFall,
	},
	TheCorrupted: {
		Modes: {
			Grandmaster: [2416314393, 245243710, 3100302962, 3354105309],
		},
		Type: ActivityType.ScoredNightFall,
	},
	TheDevilsLair: {
		Modes: {
			Grandmaster: [1203950592, 2112435491],
		},
		Type: ActivityType.ScoredNightFall,
	},
	TheDisgraced: {
		Modes: {
			Grandmaster: [2136458560, 3381711459],
		},
		Type: ActivityType.ScoredNightFall,
	},
	TheFesteringCore: {
		Modes: {
			Grandmaster: [3455414851, 766116576],
		},
		Type: ActivityType.ScoredNightFall,
	},
	TheGlassway: {
		Modes: {
			Grandmaster: [3812135451, 4197461112],
		},
		Type: ActivityType.ScoredNightFall,
	},
	TheHollowedLair: {
		Modes: {
			Grandmaster: [1561733170, 283725097],
		},
		Type: ActivityType.ScoredNightFall,
	},
	TheInsightTerminus: {
		Modes: {
			Grandmaster: [2694576755, 3029388704, 3200108048, 554830595],
		},
		Type: ActivityType.ScoredNightFall,
	},
	TheInvertedSpire: {
		Modes: {
			Grandmaster: [2599001919, 281497220],
		},
		Type: ActivityType.ScoredNightFall,
	},
	TheLightblade: {
		Modes: {
			Grandmaster: [1964120205, 968885838],
		},
		Type: ActivityType.ScoredNightFall,
	},
	TheScarletKeep: {
		Modes: {
			Grandmaster: [1495545000, 3449817631],
		},
		Type: ActivityType.ScoredNightFall,
	},
	TheShatteredThrone: {
		Modes: {
			Normal: [2032534090],
		},
		Type: ActivityType.Dungeon,
	},
	TheWhisper: {
		Modes: {
			Normal: [3743446313],
			Legend: [3871520787],
			NormalLegacy: [74501540],
			Heroic: [1099555105],
		},
		Type: ActivityType.ExoticMission,
	},
	TreeOfProbabilities: {
		Modes: {
			Grandmaster: [2023667984, 2660931443],
		},
		Type: ActivityType.ScoredNightFall,
	},
	VaultOfGlass: {
		Modes: {
			Contest: [1485585878],
			Guided: [3711931140],
			Normal: [3881495763],
			Master: [1681562271, 3022541210],
		},
		Type: ActivityType.Raid,
	},
	VowOfTheDisciple: {
		Modes: {
			Guided: [4156879541],
			Other: [2906950631],
			Normal: [1441982566],
			Master: [3889634515, 4217492330],
		},
		Type: ActivityType.Raid,
	},
	VoxObscura: {
		Modes: {
			Normal: [2668737148, 901429423],
			Master: [613120446],
			Legend: [666172264],
		},
		Type: ActivityType.ExoticMission,
	},
	WardenOfNothing: {
		Modes: {
			Grandmaster: [1473557543, 3597372938, 380956401, 3871967157, 4196944364, 557845334],
		},
		Type: ActivityType.ScoredNightFall,
	},
	WarlordsRuin: {
		Modes: {
			Normal: [2004855007],
			Master: [2534833093],
		},
		Type: ActivityType.Dungeon,
	},
	ZeroHour: {
		Modes: {
			Normal: [3361746271],
			Legend: [1848771417],
			NormalLegacy: [3232506937],
			Heroic: [2731208666],
		},
		Type: ActivityType.ExoticMission,
	},
};

let _mapActivitiesAndModeByHash: Map<number, IActivityAndMode> | undefined = undefined;

function _getMapActivitesAndModeByHash(activitiesFilter: { [key in keyof typeof DestinyActivity]: IActivity }) {
	if (_mapActivitiesAndModeByHash == undefined) {
		_mapActivitiesAndModeByHash = new Map<number, IActivityAndMode>();
		Object.entries(activitiesFilter).flatMap(([activityName, activity]) =>
			Object.entries(activity.Modes).flatMap(([modeName, modeHashes]) =>
				modeHashes!.forEach((m) => {
					let mode = modeName as keyof typeof ModeType;
					let modeType = ModeType[modeName as keyof typeof ModeType];
					if (modeType == ModeType.Contest || modeType == ModeType.Guided || modeType == ModeType.NormalLegacy)
						// This modes should be considered Normal for clear calculations
						mode = ModeType[ModeType.Normal] as keyof typeof ModeType;
					if (modeType == ModeType.Legend)
						// Legend should be considered Master for clear calculations
						mode = ModeType[ModeType.Master] as keyof typeof ModeType;
					_mapActivitiesAndModeByHash!.set(m, {
						Activity: activityName as keyof typeof DestinyActivity,
						Mode: mode as keyof typeof ModeType,
						UnderlyingMode: modeName as keyof typeof ModeType,
					});
				})
			)
		);
	}
	return _mapActivitiesAndModeByHash;
}

export const mapActivitiesAndModeByHash: Map<number, IActivityAndMode> = _getMapActivitesAndModeByHash(mapActivities);
