import { StringsKeysOf } from "../utils/common";

export enum ExoticMissions {
	Avalon = "Avalon",
	DualDestiny = "DualDestiny",
	Excision = "Excision",
	Harbinger = "Harbinger",
	Presage = "Presage",
	SeraphsShield = "SeraphsShield",
	Starcrossed = "Starcrossed",
	TheWhisper = "TheWhisper",
	VoxObscura = "VoxObscura",
	ZeroHour = "ZeroHour",
} 
export enum Raids {
	CrotasEnd = "CrotasEnd",
	CrownOfSorrow = "CrownOfSorrow",
	DeepStoneCrypt = "DeepStoneCrypt",
	GardenOfSalvation = "GardenOfSalvation",
	KingsFall = "KingsFall",
	LastWish = "LastWish",
	Leviathan = "Leviathan",
	LeviathanEaterOfWorlds = "LeviathanEaterOfWorlds",
	LeviathanSpireOfStars = "LeviathanSpireOfStars",
	Pantheon = "Pantheon",
	PhanteonAtraksSovereign = "PhanteonAtraksSovereign",
	PhanteonNezarecSublime = "PhanteonNezarecSublime",
	PhanteonOryxExalted = "PhanteonOryxExalted",
	PhanteonRhulkIndomitable = "PhanteonRhulkIndomitable",
	RootOfNightmares = "RootOfNightmares",
	SalvationsEdge = "SalvationsEdge",
	ScourgeOfThePast = "ScourgeOfThePast",
	VaultOfGlass = "VaultOfGlass",
	VowOfTheDisciple = "VowOfTheDisciple",
}
export enum Dungeons {
	Duality = "Duality",
	GhostsOfTheDeep = "GhostsOfTheDeep",
	GraspOfAvarice = "GraspOfAvarice",
	PitOfHeresy = "PitOfHeresy",
	Prophecy = "Prophecy",
	SpireOfTheWatcher = "SpireOfTheWatcher",
	TheShatteredThrone = "TheShatteredThrone",
	WarlordsRuin = "WarlordsRuin",
}
export enum ScoredNightFalls {
	AGardenWorld = "AGardenWorld",
	BattlegroundBehemoth = "BattlegroundBehemoth",
	BattlegroundFoothold = "BattlegroundFoothold",
	BattlegroundHailstone = "BattlegroundHailstone",
	BattlegroundOracle = "BattlegroundOracle",
	BirthplaceOfTheVile = "BirthplaceOfTheVile",
	Broodhold = "Broodhold",
	DefiantBattlegroundCosmodrome = "DefiantBattlegroundCosmodrome",
	DefiantBattlegroundEDZ = "DefiantBattlegroundEDZ",
	DefiantBattlegroundOrbitalPrison= "DefiantBattlegroundOrbitalPrison",
	ExodusCrash = "ExodusCrash",
	FallenSABER = "FallenSABER",
	HeistBattlegroundEuropa = "HeistBattlegroundEuropa",
	HeistBattlegroundMars = "HeistBattlegroundMars",
	HeistBattlegroundMoon = "HeistBattlegroundMoon",
	HyperNetCurrent = "HyperNetCurrent",
	LakeOfShadows = "LakeOfShadows",
	LegendPsiOpsBattlegroundCosmodrome = "LegendPsiOpsBattlegroundCosmodrome",
	Liminality = "Liminality",
	ProvingGrounds = "ProvingGrounds",
	PsiOpsBattlegroundEDZ = "PsiOpsBattlegroundEDZ",
	PsiOpsBattlegroundMoon = "PsiOpsBattlegroundMoon",
	SavathunsSong = "SavathunsSong",
	StrangeTerrain = "StrangeTerrain",
	TheArmsDealer = "TheArmsDealer",
	TheCorrupted = "TheCorrupted",
	TheDevilsLair = "TheDevilsLair",
	TheDisgraced = "TheDisgraced",
	TheFesteringCore = "TheFesteringCore",
	TheGlassway = "TheGlassway",
	TheHollowedLair = "TheHollowedLair",
	TheInsightTerminus = "TheInsightTerminus",
	TheInvertedSpire = "TheInvertedSpire",
	TheLightblade = "TheLightblade",
	TheScarletKeep = "TheScarletKeep",
	TreeOfProbabilities = "TreeOfProbabilities",
	WardenOfNothing = "WardenOfNothing",
}

export const DestinyActivity = {
	...Dungeons,
	...Raids,
	...ScoredNightFalls,
	...ExoticMissions,
};

export type DestinyActivity = Dungeons | Raids | ScoredNightFalls | ExoticMissions ;

//export const DestinyActivity = { ...ExoticMissions, ...Raids, ...Dungeons, ...ScoredNightFalls };
//export const DestinyActivity = Object.assign({}, ExoticMissions, Raids, Dungeons, ScoredNightFalls); // also work
//export type DestinyActivity = ExoticMissions | Raids | Dungeons | ScoredNightFalls;

//export type DestinyActivity =  (typeof ExoticMissions) &  (typeof Raids) &  (typeof Dungeons) &  (typeof ScoredNightFalls);// & { ...ExoticMissions, ...Raids, ...Dungeons, ...ScoredNightFalls };
