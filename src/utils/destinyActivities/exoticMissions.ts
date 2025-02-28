import { StringsKeysOf } from "../common";
import { ActivityType } from "../enums/ActivityType";
import { DestinyActivity, DestinyDungeon, DestinyExoticMission } from "../enums/DestinyActivities";
import { ExoticWeapon } from "../enums/WeaponExotic";
import { IActivity } from "./activities";
import { ExoticCollectible } from "./exoticDrops";

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
	Encore: {
		Modes: {
			Normal: [1550266704, 3542111805, 3542111804, 3542111807],
			Legend: [655052177, 2362862867, 2741939455, 2362862866, 2362862865]
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: true,
		Free: true
	},
	KellsFall: {
		Modes: {
			Normal: [3212612420, 3296787721, 715393254, 1583447699],
			Legend: [133833536, 1044034163, 264074906, 3447248293]
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: true,
		Free: true
	},
	Derealize: {
		Modes: {
			Normal: [648675065],
			Legend: []
		},
		Type: ActivityType.ExoticMission,
		TopLevel: true,
		Active: true,
		Free: true
	}
};

export const ExoticMissionExoticDrops: ExoticCollectible[] = [

	{
		collectibleHashes: [1763610692, 545218287, 3875807583],
		itemHash: 1891561814,
		icon: "/common/destiny2_content/icons/e47c31826843f6fd0aa863eac6fd093e.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyExoticMission[DestinyExoticMission.TheWhisper] as StringsKeysOf<typeof DestinyExoticMission>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.WhisperOfTheWorm] as StringsKeysOf<typeof ExoticWeapon>
	},
	{
		collectibleHashes: [360254771, 449896716, 2500286745],
		itemHash: 3824673936,
		icon: "/common/destiny2_content/icons/a1b6a5f3e52878610397249986300b23.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyExoticMission[DestinyExoticMission.ZeroHour] as StringsKeysOf<typeof DestinyExoticMission>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.OutbreakPerfected] as StringsKeysOf<typeof ExoticWeapon>
	},
	/*{
		collectibleHash: 653763964,
		itemHash: 3856705927,
		icon: "/common/destiny2_content/icons/cef1290d58a2d94d1437e1e569fa7996.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyExoticMission[DestinyExoticMission.Harbinger] as StringsKeysOf<typeof DestinyExoticMission>,
		weaponExotic: WeaponExotics[WeaponExotics.Hawkmoon] as StringsKeysOf<typeof WeaponExotics>
	},*/
	{
		collectibleHashes: [3324472233, 2143216566, 3723101298],
		itemHash: 2188764214,
		icon: "/common/destiny2_content/icons/cfc2c246cfd404d749fffbfe3ae3dfec.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyExoticMission[DestinyExoticMission.Presage] as StringsKeysOf<typeof DestinyExoticMission>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.DeadMansTale] as StringsKeysOf<typeof ExoticWeapon>
	},
	{
		collectibleHashes: [360554695, 2097871936, 4028619088],
		itemHash: 46125926,
		icon: "/common/destiny2_content/icons/0824b34bb37e0bb7c32b91adf6dcb79e.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyExoticMission[DestinyExoticMission.VoxObscura] as StringsKeysOf<typeof DestinyExoticMission>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.DeadMessenger] as StringsKeysOf<typeof ExoticWeapon>
	},
	{
		collectibleHashes: [1161231112, 760708739],
		itemHash: 1473821207,
		icon: "/common/destiny2_content/icons/040a104defcc7011b570886e3ec3c73f.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyExoticMission[DestinyExoticMission.SeraphsShield] as StringsKeysOf<typeof DestinyExoticMission>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.RevisionZero] as StringsKeysOf<typeof ExoticWeapon>
	},
	{
		collectibleHashes: [2629609052],
		itemHash: 3118061005,
		icon: "/common/destiny2_content/icons/735baec8c23ff1416ae6a8c72c729432.jpg",
		hasCatalyst: true,
		sourceActivity: DestinyExoticMission[DestinyExoticMission.Avalon] as StringsKeysOf<typeof DestinyExoticMission>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.Vexcalibur] as StringsKeysOf<typeof ExoticWeapon>
	},
	{
		collectibleHashes: [3826612761, 221021254],
		itemHash: 2910326942,
		icon: "/common/destiny2_content/icons/6b47d872840188bc913d6307fa537c3c.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyExoticMission[DestinyExoticMission.Starcrossed] as StringsKeysOf<typeof DestinyExoticMission>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.WishKeeper] as StringsKeysOf<typeof ExoticWeapon>
	},
	{
		collectibleHashes: [2176629195, 3866803860],
		itemHash: 3698448090,
		icon: "/common/destiny2_content/icons/80cc90861aa83c63de2273457a6c9345.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyExoticMission[DestinyExoticMission.Encore] as StringsKeysOf<typeof DestinyExoticMission>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.ChoirOfOne] as StringsKeysOf<typeof ExoticWeapon>
	},
	{
		collectibleHashes: [2454134342, 2690809637],
		itemHash: 1047932517,
		icon: "/common/destiny2_content/icons/45ba5d9ee8e425e1f9d50cb561fe4982.jpg",
		hasCatalyst: true,
		sourceActivity: DestinyExoticMission[DestinyExoticMission.KellsFall] as StringsKeysOf<typeof DestinyExoticMission>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.SlayersFang] as StringsKeysOf<typeof ExoticWeapon>
	},
	{
		collectibleHashes: [622567281, 2756203682],
		itemHash: 1481594633,
		icon: "/common/destiny2_content/icons/938bc6eb5c5c772e2f3d066380179d36.jpg",
		hasCatalyst: false,
		sourceActivity: DestinyExoticMission[DestinyExoticMission.Derealize] as StringsKeysOf<typeof DestinyExoticMission>,
		exoticWeapon: ExoticWeapon[ExoticWeapon.BarrowDyad] as StringsKeysOf<typeof ExoticWeapon>
	},
]