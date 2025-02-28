import { StringsKeysOf } from "../common";
import { ActivityType } from "../enums/ActivityType";
import { DestinyDungeon } from "../enums/DestinyActivities";
import { ExoticWeapon } from "../enums/WeaponExotic";
import { IActivity } from "./activities";
import { ExoticCollectible } from "./exoticDrops";

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
		SealObjectives: [2105786548, 1350388308, 755549938, 196842574, 911294620, 3475888069, 2388189655, 3952021245, 1864837600, 1801613309, 3200960029],
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
		SealObjectives: [2519881105, 4136119953, 3584441401, 3817062456, 3202440564, 3358913961, 646449162, 3187362676, 470621007, 2238420633],
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
		SealObjectives: [905181048, 1584772332, 1151761978, 3006836031, 3561230229, 1990962776, 466074981, 395235013, 958830294, 3610349332],
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
		SealObjectives: [1342446533, 131896889, 2905044529, 1631738192, 2093999292, 588582033, 4010412130, 822588172, 4288088327, 2438176321],
		SoloHash: 2905044529,
		SoloFlawlessHash: 238037026,
		FlawlessHash: 982579018,
		Active: true,
		Free: false,
	},
	VespersHost: {
		Modes: {
			Contest: [3492566689, /*Contest mode*/
				1915770060, /*also Contest mode?*/],
			Normal: [300092127, 4293676253],
			Master: [],
		},
		Type: ActivityType.Dungeon,
		TopLevel: true,
		PresentationNode: 2723381343,
		SealCompleteImage: "/common/destiny2_content/icons/cc4ad92bcf822f43058293867b42ee0b.png",
		SealIncompleteImage: "/common/destiny2_content/icons/096c7920e21dc8bc243ad974fd5d87b9.png",
		SealHash: 4062961115,
		SealObjectives: [2944960648, 591040974, 1305974707, 3957675217, 1481046148, 2156976337, 720193913, 4009562, 3278909320],
		SoloHash: 591040974,
		SoloFlawlessHash: 1553599507,
		FlawlessHash: 1141690897,
		Active: true,
		Free: false,
	},
	SunderedDoctrine: {
		Modes: {
			Contest: [247869137],
			Normal: [3834447244],
			Master: [3521648250],
		},
		Type: ActivityType.Dungeon,
		TopLevel: true,
		PresentationNode: 2105055614,
		SealCompleteImage: "/common/destiny2_content/icons/7b17c4a3f9f9d3631fe67e8415d0bb4c.png",
		SealIncompleteImage: "/common/destiny2_content/icons/b38e0aefa27a8c0b83191fcbaee26c32.png",
		SealHash: 2963918856,
		SealObjectives: [1052417987, 2236876295, 1573451354, 376561218, 472168131, 1756133644, 2909873358, 1425479229, 538596919],
		SoloHash: 2236876295,
		SoloFlawlessHash: 28261116,
		FlawlessHash: 2384937912,
		Active: true,
		Free: false,
	}
};

export const DungeonExoticDrops: ExoticCollectible[] = [
	{
		collectibleHashes: [1660030044],
		itemHash: 814876684,
		icon: "/common/destiny2_content/icons/8e5d7a68305a0d1e53ccade9398c7e8b.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyDungeon[DestinyDungeon.TheShatteredThrone] as StringsKeysOf<typeof DestinyDungeon>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.WishEnder] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [1258579677],
		itemHash: 1395261499,
		icon: "/common/destiny2_content/icons/de34570a93281dc201690cfd146e6d24.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyDungeon[DestinyDungeon.PitOfHeresy] as StringsKeysOf<typeof DestinyDungeon>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.Xenophage] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [4027219968],
		itemHash: 1363886209,
		icon: "/common/destiny2_content/icons/b62083eed6a4708e581fc9a061bcc8e9.jpg",
		hasCatalyst: true,
		sourceActivity: DestinyDungeon[DestinyDungeon.GraspOfAvarice] as StringsKeysOf<typeof DestinyDungeon>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.Gjallarhorn] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [467760883],
		itemHash: 3664831848,
		icon: "/common/destiny2_content/icons/94c6933727fa885fb2002a8c7aee5e42.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyDungeon[DestinyDungeon.Duality] as StringsKeysOf<typeof DestinyDungeon>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.Heartshadow] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [3558330464],
		itemHash: 4174431791,
		icon: "/common/destiny2_content/icons/8c32410000243e6024130f755b23fbe6.jpg",
		hasCatalyst: true,
		sourceActivity: DestinyDungeon[DestinyDungeon.SpireOfTheWatcher] as StringsKeysOf<typeof DestinyDungeon>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.HierarchyOfNeeds] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [161963863],
		itemHash: 1441805468,
		icon: "/common/destiny2_content/icons/4984c634a7d2eca3baafc000a121263d.jpg",
		hasCatalyst: true,
		sourceActivity: DestinyDungeon[DestinyDungeon.GhostsOfTheDeep] as StringsKeysOf<typeof DestinyDungeon>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.TheNavigator] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [3275654322],
		itemHash: 3886719505,
		icon: "/common/destiny2_content/icons/fcae8edcd35227d35fca0a108d831840.jpg",
		hasCatalyst: true,
		sourceActivity: DestinyDungeon[DestinyDungeon.WarlordsRuin] as StringsKeysOf<typeof DestinyDungeon>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.BuriedBloodline] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [1643809765],
		itemHash: 1111334348,
		icon: "/common/destiny2_content/icons/7ec0e114e6e3c4db695006ce992b07dd.jpg",
		hasCatalyst: true,
		sourceActivity: DestinyDungeon[DestinyDungeon.VespersHost] as StringsKeysOf<typeof DestinyDungeon>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.IceBreaker] as StringsKeysOf<typeof ExoticWeapon>,
	},
];
