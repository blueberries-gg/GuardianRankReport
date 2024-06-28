import { ActivityType } from "../enums/ActivityType";
import { DestinyDungeon } from "../enums/DestinyActivities";
import { IActivity } from "./activities";

export const DungeonsBaseDefinitions: { [key in keyof typeof DestinyDungeon]: IActivity } = {
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