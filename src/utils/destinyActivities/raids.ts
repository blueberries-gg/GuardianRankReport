import { ActivityType } from "../enums/ActivityType";
import { DestinyRaid } from "../enums/DestinyActivities";
import { StringsKeysOf } from "../common";
import { IActivity } from "./activities";
import { ExoticCollectible } from "./exoticDrops";
import { ExoticWeapon } from "../enums/WeaponExotic";

export const RaidsBaseDefinitions: { [key in keyof typeof DestinyRaid]: IActivity } = {
	CrotasEnd: {
		Modes: {
			Contest: [156253568] /*Superior Swordplay*/,
			Normal: [4179289725],
			Master: [1507509200],
		},
		Type: ActivityType.Raid,
		PresentationNode: 238107129,
		SealCompleteImage: "/common/destiny2_content/icons/67b88e8ebdb0f879584aefb86546b03e.png",
		SealIncompleteImage: "/common/destiny2_content/icons/3aa7d29d579752dfa69ba96dac132d3b.png",
		TopLevel: true,
		SealHash: 865076293,
		SealObjectives: [
			3922046691, 2045739672, 710681626, 116345475, 2487544289, 2259810484, 1510515137, 942933865, 3702810582, 1447905713, 1334890488, 4259447007,
			680822308, 2237801267, 752641838, 1896685129, 1732432755, 295018272,
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
			3504856768, 3185876102, 518342793, 564366615, 3834307795, 3200831458, 513707022, 3875695735, 992355976, 134885948, 3323713181, 22094034, 4216504853,
			64856166, 3771160417, 337542929, 1277450448, 2530940166, 1487317889,
		],
		FlawlessHash: 3560923614,
		Active: true,
		Free: false,
	},

	GardenOfSalvation: {
		Modes: {
			Normal: [1042180643, 2497200493, 3458480158, 3845997235, 2659723068,3823237780],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		PresentationNode: 1827854727,
		SealCompleteImage: "/common/destiny2_content/icons/73145145af7557234148e93a9f504518.png",
		SealIncompleteImage: "/common/destiny2_content/icons/12fe6f9d691705cc1ed0ebf16576f74a.png",
		SealHash: 2909250963,
		SealObjectives: [
			3866024089, 3804486505, 1221037312, 3427328428, 277137394, 2571794337, 1922270325, 3719309782, 4105510833, 637935773, 44547560, 2381358572,
			3860668859, 2191554152, 3949104239, 521675034,
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
			2756328801, 3533973498, 3000516033, 1847670729, 4078980921, 342038729, 3448775736, 1711136422, 380332968, 3234595894, 623283604, 2826160801,
			989244596, 717856991, 1359055399, 628370196,
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
			DestinyRaid[DestinyRaid.PhanteonAtraksSovereign] as StringsKeysOf<typeof DestinyRaid>,
			DestinyRaid[DestinyRaid.PhanteonOryxExalted] as StringsKeysOf<typeof DestinyRaid>,
			DestinyRaid[DestinyRaid.PhanteonRhulkIndomitable] as StringsKeysOf<typeof DestinyRaid>,
			DestinyRaid[DestinyRaid.PhanteonNezarecSublime] as StringsKeysOf<typeof DestinyRaid>,
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
		ParentActivity: DestinyRaid[DestinyRaid.Pantheon] as StringsKeysOf<typeof DestinyRaid>,
		Active: false,
		Free: true,
	},

	PhanteonNezarecSublime: {
		Modes: {
			Normal: [4169648182],
		},
		Type: ActivityType.Raid,
		TopLevel: false,
		ParentActivity: DestinyRaid[DestinyRaid.Pantheon] as StringsKeysOf<typeof DestinyRaid>,
		Active: false,
		Free: true,
	},

	PhanteonOryxExalted: {
		Modes: {
			Normal: [4169648176],
		},
		Type: ActivityType.Raid,
		TopLevel: false,
		ParentActivity: DestinyRaid[DestinyRaid.Pantheon] as StringsKeysOf<typeof DestinyRaid>,
		Active: false,
		Free: true,
	},

	PhanteonRhulkIndomitable: {
		Modes: {
			Normal: [4169648177],
		},
		Type: ActivityType.Raid,
		TopLevel: false,
		ParentActivity: DestinyRaid[DestinyRaid.Pantheon] as StringsKeysOf<typeof DestinyRaid>,
		Active: false,
		Free: true,
	},

	RootOfNightmares: {
		Modes: {
			Normal: [2381413764, 1191701339/* Missing??? Thannks Tom*/],
			Master: [2918919505],
		},
		Type: ActivityType.Raid,
		TopLevel: true,
		PresentationNode: 1976056830,
		SealCompleteImage: "/common/destiny2_content/icons/0460df1df9f38c4c12813a126bca98d3.png",
		SealIncompleteImage: "/common/destiny2_content/icons/9e037b198dfce46642d5eff0dfe97eb9.png",
		SealHash: 2889189256,
		SealObjectives: [
			674616608, 4270724598, 391307104, 4293716153, 1160810407, 4162933187, 2656634354, 31076871, 1982000933, 921507736, 139617739, 2084487708,
			1470555531, 2778920213, 2764233436, 1247482413, 499953236, 210713679, 3778413954, 4149006431,
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
			1568864289, 2487240675, 1728165205, 819153082, 2238088494, 4283220514, 4266339619, 1001835628, 2174160579, 2307589343, 2705769344, 2062070439,
			61627171, 632048942, 4098731599, 1538747266, 1311861933, 1843442132, 870477756, 2203607979, 3202450274, 3123571268,
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
			2782679117, 3114569402, 578313932, 932039090, 991121189, 1983700615, 2592913942, 1961032859, 3969659747, 874956966, 706596766, 4170123161,
			1888851130, 787552349, 154213552, 3903615031, 1803186219, 2464700601, 3106039192, 1129667036, 1024875083, 3890225317, 3790077074,
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
			1729647218, 2168422218, 610864524, 3330343477, 2383291155, 1053120087, 3620246150, 4241035147, 1682546621, 1673084356, 146328065, 1959737632,
			2006434999, 1120467498, 990479197, 801186532, 3991904123, 3950568572, 486676807,
		],
		FlawlessHash: 4019717242,
		Active: true,
		Free: false,
	},
};

export const RaidExoticDrops: ExoticCollectible[] = [
	{
		collectibleHashes: [199171385],
		itemHash: 2069224589,
		icon: "/common/destiny2_content/icons/51c53df606cca474dce3cadbf7d5ce28.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyRaid[DestinyRaid.LastWish] as StringsKeysOf<typeof DestinyRaid>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.OneThousandVoices] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [1988948484],
		itemHash: 4103414242,
		icon: "/common/destiny2_content/icons/c6aa03536fd68b5fca5ad6b83ea0cf1e.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyRaid[DestinyRaid.GardenOfSalvation] as StringsKeysOf<typeof DestinyRaid>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.Divinity] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [753200559],
		itemHash: 2399110176,
		icon: "/common/destiny2_content/icons/9caeff89015f02ad52e6fefe95398b01.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyRaid[DestinyRaid.DeepStoneCrypt] as StringsKeysOf<typeof DestinyRaid>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.EyesOfTomorrow] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [2300465938],
		itemHash: 4289226715,
		icon: "/common/destiny2_content/icons/111a10b59029fc6a9ca5e821267e6f6c.jpg",
		hasCatalyst: true,
		sourceActivity: DestinyRaid[DestinyRaid.VaultOfGlass] as StringsKeysOf<typeof DestinyRaid>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.VexMythoclast] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [2817568609],
		itemHash: 3505113722,
		icon: "/common/destiny2_content/icons/238ab90ba2f858ebb8a5a1797a13fdd4.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyRaid[DestinyRaid.VowOfTheDisciple] as StringsKeysOf<typeof DestinyRaid>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.CollectiveObligation] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [192937277],
		itemHash: 1802135586,
		icon: "/common/destiny2_content/icons/106a8a40a6e55b5ec5088a26d1ed979d.jpg",
		hasCatalyst: true,
		sourceActivity: DestinyRaid[DestinyRaid.KingsFall] as StringsKeysOf<typeof DestinyRaid>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.TouchOfMalice] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [2553509474],
		itemHash: 3371017761,
		icon: "/common/destiny2_content/icons/c9b4d65adcdfcadde871e5961ce912fb.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyRaid[DestinyRaid.RootOfNightmares] as StringsKeysOf<typeof DestinyRaid>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.ConditionalFinality] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [203521123],
		itemHash: 1034055198,
		icon: "/common/destiny2_content/icons/52e8bb636771f4731da3f73f06fcad04.jpg",
		hasCatalyst: true,
		sourceActivity: DestinyRaid[DestinyRaid.CrotasEnd] as StringsKeysOf<typeof DestinyRaid>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.Necrochasm] as StringsKeysOf<typeof ExoticWeapon>,
	},
	{
		collectibleHashes: [3411864064],
		itemHash: 3284383335,
		icon: "/common/destiny2_content/icons/fe16110003f0cc75145eed012458a667.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyRaid[DestinyRaid.SalvationsEdge] as StringsKeysOf<typeof DestinyRaid>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.Euphony] as StringsKeysOf<typeof ExoticWeapon>,
	},
];
