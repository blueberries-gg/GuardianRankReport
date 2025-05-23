export enum DestinyRaid {
	Leviathan = 1,
	LeviathanEaterOfWorlds,
	LeviathanSpireOfStars,
	LastWish,
	ScourgeOfThePast,
	CrownOfSorrow,
	GardenOfSalvation,
	DeepStoneCrypt,
	VaultOfGlass,
	VowOfTheDisciple,
	KingsFall,
	RootOfNightmares,
	CrotasEnd,
	Pantheon,
	PhanteonAtraksSovereign,
	PhanteonOryxExalted,
	PhanteonRhulkIndomitable,
	PhanteonNezarecSublime,
	SalvationsEdge,
}

export enum DestinyDungeon {
	TheShatteredThrone = 101,
	PitOfHeresy,
	Prophecy,
	GraspOfAvarice,
	Duality,
	SpireOfTheWatcher,
	GhostsOfTheDeep,
	WarlordsRuin,
	VespersHost,
	SunderedDoctrine,
}

export enum DestinyExoticMission {
	TheWhisper = 201,
	ZeroHour,
	Harbinger,
	Presage,
	VoxObscura,
	SeraphsShield,
	Avalon,
	Starcrossed,
	Excision,
	DualDestiny,
	Encore,
	KellsFall,
	Derealize
}

export enum DestinyGrandMasterNightFall {
	AGardenWorld = 301,
	BattlegroundBehemoth,
	BattlegroundFoothold,
	BattlegroundHailstone,
	BattlegroundOracle,
	BirthplaceOfTheVile,
	Broodhold,
	DefiantBattlegroundCosmodrome,
	DefiantBattlegroundEDZ,
	DefiantBattlegroundOrbitalPrison,
	ExodusCrash,
	FallenSABER,
	HeistBattlegroundEuropa,
	HeistBattlegroundMars,
	HeistBattlegroundMoon,
	HyperNetCurrent,
	LakeOfShadows,
	LegendPsiOpsBattlegroundCosmodrome,
	Liminality,
	ProvingGrounds,
	PsiOpsBattlegroundEDZ,
	PsiOpsBattlegroundMoon,
	SavathunsSong,
	StrangeTerrain,
	TheArmsDealer,
	TheCorrupted,
	TheDevilsLair,
	TheDisgraced,
	TheFesteringCore,
	TheGlassway,
	TheHollowedLair,
	TheInsightTerminus,
	TheInvertedSpire,
	TheLightblade,
	TheScarletKeep,
	TheSunlessCell,
	TreeOfProbabilities,
	WardenOfNothing,
}
export enum DestinyGenericActivity {
	None = 0,
}
export const DestinyActivity = {
	...DestinyGenericActivity,
	...DestinyRaid,
	...DestinyDungeon,
	...DestinyExoticMission,
	...DestinyGrandMasterNightFall,
};

export type DestinyActivity =  DestinyGenericActivity | DestinyRaid | DestinyDungeon | DestinyExoticMission | DestinyGrandMasterNightFall ;
