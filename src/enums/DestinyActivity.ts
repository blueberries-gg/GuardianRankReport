export enum Raids {
	Leviathan = 0,
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

export enum Dungeons {
	TheShatteredThrone = 100,
	PitOfHeresy,
	Prophecy,
	GraspOfAvarice,
	Duality,
	SpireOfTheWatcher,
	GhostsOfTheDeep,
	WarlordsRuin,
}

export enum ExoticMissions {
	Avalon = 200,
	DualDestiny,
	Excision,
	Harbinger,
	Presage,
	SeraphsShield,
	Starcrossed,
	TheWhisper,
	VoxObscura,
	ZeroHour,
}


export enum ScoredNightFalls {
	AGardenWorld = 300,
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
	TreeOfProbabilities,
	WardenOfNothing,
}


export const ActiveScoredNightFalls = [
	ScoredNightFalls[ScoredNightFalls.TheGlassway] as keyof typeof ScoredNightFalls,
	ScoredNightFalls[ScoredNightFalls.WardenOfNothing] as keyof typeof ScoredNightFalls,
	ScoredNightFalls[ScoredNightFalls.TheDisgraced] as keyof typeof ScoredNightFalls,
	ScoredNightFalls[ScoredNightFalls.FallenSABER] as keyof typeof ScoredNightFalls,
	ScoredNightFalls[ScoredNightFalls.Liminality] as keyof typeof ScoredNightFalls,
	ScoredNightFalls[ScoredNightFalls.ExodusCrash] as keyof typeof ScoredNightFalls,
	ScoredNightFalls[ScoredNightFalls.DefiantBattlegroundCosmodrome] as keyof typeof ScoredNightFalls,
	ScoredNightFalls[ScoredNightFalls.TheInsightTerminus] as keyof typeof ScoredNightFalls,
	ScoredNightFalls[ScoredNightFalls.TheDevilsLair] as keyof typeof ScoredNightFalls,
];

export const DestinyActivity = {
	...Raids,
	...Dungeons,
	...ExoticMissions,
	...ScoredNightFalls,
};

export type DestinyActivity = Dungeons | Raids | ScoredNightFalls | ExoticMissions;
