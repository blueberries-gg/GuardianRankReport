import { ActivityType } from "../enums/ActivityType";
import { DestinyGrandMasterNightFall } from "../enums/DestinyActivities";
import { IActivity } from "./activities";

export const ScoredNightFallsBaseDefinitions: { [key in keyof typeof DestinyGrandMasterNightFall]: IActivity } = {
	AGardenWorld: {
		Modes: {
			GrandMaster: [2533203708],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	BattlegroundBehemoth: {
		Modes: {
			GrandMaster: [3982925792, 8957763],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	BattlegroundFoothold: {
		Modes: {
			GrandMaster: [1593674948, 3580217919],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	BattlegroundHailstone: {
		Modes: {
			GrandMaster: [798920782, 881943181],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	BattlegroundOracle: {
		Modes: {
			GrandMaster: [284866935, 2969419388],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	BirthplaceOfTheVile: {
		Modes: {
			GrandMaster: [2766844306, 967120713],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	Broodhold: {
		Modes: {
			GrandMaster: [135872558, 265186825, 3879949581, 89113250],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	DefiantBattlegroundCosmodrome: {
		Modes: {
			GrandMaster: [3640623961, 53750498],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},
	DefiantBattlegroundEDZ: {
		Modes: {
			GrandMaster: [952545351, 2748682956],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},
	DefiantBattlegroundOrbitalPrison: {
		Modes: {
			GrandMaster: [2619900708, 1030419231],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},
	ExodusCrash: {
		Modes: {
			GrandMaster: [3233498454, 54961125, 68611398, 707920309, 2280860193, 2823591786],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	FallenSABER: {
		Modes: {
			GrandMaster: [3293630132, 676886831],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	HeistBattlegroundEuropa: {
		Modes: {
			GrandMaster: [247753793, 3458527562],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	HeistBattlegroundMars: {
		Modes: {
			GrandMaster: [446038093, 507866990],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	HeistBattlegroundMoon: {
		Modes: {
			GrandMaster: [1639515809, 3181063546],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	HyperNetCurrent: {
		Modes: {
			GrandMaster: [2039642510, 2082796332, 2389570605, 3429541735],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	LakeOfShadows: {
		Modes: {
			GrandMaster: [1302909043, 207226563, 3109193568, 3919254032],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	LegendPsiOpsBattlegroundCosmodrome: {
		Modes: {
			GrandMaster: [1387912492, 968118631],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	Liminality: {
		Modes: { GrandMaster: [1700470403, 2099835168] },
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},
	
	ProvingGrounds: {
		Modes: {
			GrandMaster: [2103025315, 3418624832],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	PsiOpsBattlegroundEDZ: {
		Modes: {
			GrandMaster: [2944405548, 4283638887],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	PsiOpsBattlegroundMoon: {
		Modes: {
			GrandMaster: [1764280975, 3410113364],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	SavathunsSong: {
		Modes: {
			GrandMaster: [2168858559, 3849697860],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	StrangeTerrain: {
		Modes: {
			GrandMaster: [3883876601],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheArmsDealer: {
		Modes: {
			GrandMaster: [1358381372, 1446478334, 1753547901, 3726640183],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheCorrupted: {
		Modes: {
			GrandMaster: [2416314393, 245243710, 3100302962, 3354105309],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheDevilsLair: {
		Modes: {
			GrandMaster: [1203950592, 2112435491],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheDisgraced: {
		Modes: {
			GrandMaster: [2136458560, 3381711459],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheFesteringCore: {
		Modes: {
			GrandMaster: [3455414851, 766116576],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheGlassway: {
		Modes: {
			GrandMaster: [3812135451, 4197461112],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheHollowedLair: {
		Modes: {
			GrandMaster: [1561733170, 283725097],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheInsightTerminus: {
		Modes: {
			GrandMaster: [2694576755, 3029388704, 3200108048, 554830595],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheInvertedSpire: {
		Modes: {
			GrandMaster: [2599001919, 281497220],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheLightblade: {
		Modes: {
			GrandMaster: [1964120205, 968885838],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TheScarletKeep: {
		Modes: {
			GrandMaster: [1495545000, 3449817631],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	TreeOfProbabilities: {
		Modes: {
			GrandMaster: [2023667984, 2660931443],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},

	WardenOfNothing: {
		Modes: {
			GrandMaster: [1473557543, 3597372938, 380956401, 3871967157, 4196944364, 557845334],
		},
		Type: ActivityType.ScoredNightFall,
		TopLevel: true,
		Free: true,
	},
};