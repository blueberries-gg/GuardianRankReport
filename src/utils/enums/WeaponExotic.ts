import { DestinyRaid, DestinyDungeon, DestinyExoticMission } from "./DestinyActivities";

export enum ExoticWeapon {
    OneThousandVoices = DestinyRaid.LastWish,
    Divinity = DestinyRaid.GardenOfSalvation,
    EyesOfTomorrow = DestinyRaid.DeepStoneCrypt,
    VexMythoclast = DestinyRaid.VaultOfGlass,
    CollectiveObligation = DestinyRaid.VowOfTheDisciple,
    TouchOfMalice = DestinyRaid.KingsFall,
    ConditionalFinality = DestinyRaid.RootOfNightmares,
    Necrochasm = DestinyRaid.CrotasEnd,
    Euphony = DestinyRaid.SalvationsEdge,
    
    WishEnder = DestinyDungeon.TheShatteredThrone,
    Xenophage = DestinyDungeon.PitOfHeresy,
    Gjallarhorn = DestinyDungeon.GraspOfAvarice,
    Heartshadow = DestinyDungeon.Duality,
    HierarchyOfNeeds = DestinyDungeon.SpireOfTheWatcher,
    TheNavigator = DestinyDungeon.GhostsOfTheDeep,
    BuriedBloodline = DestinyDungeon.WarlordsRuin,
    IceBreaker = DestinyDungeon.VespersHost,

    WhisperOfTheWorm = DestinyExoticMission.TheWhisper,
    OutbreakPerfected = DestinyExoticMission.ZeroHour,
    DeadMansTale = DestinyExoticMission.Presage,
    DeadMessenger = DestinyExoticMission.VoxObscura,
    RevisionZero = DestinyExoticMission.SeraphsShield,
    Vexcalibur = DestinyExoticMission.Avalon,
    WishKeeper = DestinyExoticMission.Starcrossed,
    ChoirOfOne = DestinyExoticMission.Encore,
    SlayersFang =DestinyExoticMission.KellsFall,
    BarrowDyad = DestinyExoticMission.Derealize,
}