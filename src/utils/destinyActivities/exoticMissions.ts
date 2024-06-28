import { ActivityType } from "../enums/ActivityType";
import { DestinyExoticMission } from "../enums/DestinyActivities";
import { IActivity } from "./activities";

export const ExoticMissionsBaseDefinitions: { [key in keyof typeof DestinyExoticMission]: IActivity } = {
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
			GrandMaster: [3794571135],
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