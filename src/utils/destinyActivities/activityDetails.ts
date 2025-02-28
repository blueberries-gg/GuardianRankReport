import { DestinyActivity } from "../enums/DestinyActivities";
import CrotasEnd from "../../resources/images/loot/CrotasEnd.jpg";
import DeepStoneCrypt from "../../resources/images/loot/DeepStoneCrypt.jpg";
import Duality from "../../resources/images/loot/Duality.jpg";
import GardenOfSalvation from "../../resources/images/loot/GardenOfSalvation.jpg";
import GhostsOfTheDeep from "../../resources/images/loot/GhostsOfTheDeep.jpg";
import GraspOfAvarice from "../../resources/images/loot/GraspOfAvarice.jpg";
import KingsFall from "../../resources/images/loot/KingsFall.jpg";
import LastWish from "../../resources/images/loot/LastWish.png";
import lootPlaceholder from "../../resources/images/lootPlaceholder.png";
import PitOfHeresy from "../../resources/images/loot/PitOfHeresy.jpg";
import Prophecy from "../../resources/images/loot/Prophecy.jpg";
import RootOfNightmares from "../../resources/images/loot/RootOfNightmares.jpg";
import SalvationsEdge from "../../resources/images/loot/SalvationsEdge.jpg";
import SpireOfTheWatcher from "../../resources/images/loot/SpireOfTheWatcher.jpg";
import TheShatteredThrone from "../../resources/images/loot/TheShatteredThrone.jpg";
import VaultOfGlass from "../../resources/images/loot/VaultOfGlass.jpg";
import VowOfTheDisciple from "../../resources/images/loot/VowOfTheDisciple.jpg";
import WarlordsRuin from "../../resources/images/loot/WarlordsRuin.jpg";
import VespersHost from "../../resources/images/loot/VespersHost.jpeg";


export const DestinyActivityDetails: {
	[key in keyof typeof DestinyActivity]: { description: string[]; image: string; imageWidth: number; imageHeight: number; link: string };
} = {
    AGardenWorld: {
        description: [
            "Help Osiris cut back an out-of-control Vex Mind.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/rituals_a_garden_world.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    BattlegroundBehemoth: {
        description: [
            "Empress Caiatl has deployed a tank fortress to Nessus and opened an invitation to survivors of the Red Legion to vie for a seat on her War Council. Vanquish the Cabal and prove yourself in glorious combat against her Chosen.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/nessus_battleground_behemoth.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    BattlegroundFoothold: {
        description: [
            "In an act of vengeance for the destruction of their homeworld, the Cabal have struck out against a Hive nest dug deep into the Cosmodrome. Use this opportunity to hit the Cabal hard and show them that humanity will not back down.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/cosmodrome_battleground_foothold.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    BattlegroundHailstone: {
        description: [
            "In a bid to earn Empress Caiatl's favor, a Cabal force has descended on Europa to scour the icy moon for relics of the Golden Age including the secrets of the Exo contained in the Deep Stone Crypt. Travel to Europa and put a stop to this operation.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/europa_battleground_hailstone.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    BattlegroundOracle: {
        description: [
            "A group of former Red Legion Psions are communing with Vex prediction engines deep within Nessus. They seek to gain tactical insights by analyzing simulations of future events against their own psychic foresight. Eliminate this threat before they can deliver their intelligence to Empress Caiatl.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/nessus_battleground_oracle.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    BirthplaceOfTheVile: {
        description: [
            "Aided by the Witness, the Scorn have gained the power to break into the Throne World through areas the Light cannot touch. Beat them back.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_birthplace.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    Broodhold: {
        description: [
            "Eradicate a Hive infestation seething in the depths of the Tangled Shore.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_virgo.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    DefiantBattlegroundCosmodrome: {
        description: [
            "Rescue captives from a Shadow Legion Pyramid outpost in the Cosmodrome.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/season_20_battleground_turnabout.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    DefiantBattlegroundEDZ: {
        description: [
            "Rescue captives from a Shadow Legion Pyramid outpost in the EDZ.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/season_20_battleground_exeter.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    DefiantBattlegroundOrbitalPrison: {
        description: [
            "Rescue captives from a Shadow Legion prison in near-Earth orbit.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/season_20_battleground_bulkhead.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    ExodusCrash: {
        description: [
            "Purge the Vex and Fallen, who have overrun the Exodus Black crash site.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_exodus_crash.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    FallenSABER: {
        description: [
            "Enter Rasputin's bunker in the Cosmodrome and discover the source of the security breach.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/cosmodrome_fallen_saber.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    HeistBattlegroundEuropa: {
        description: [
            "Brave the cold winds of Europa to reclaim fragments of a hidden submind's code from the depths of Bray Exoscience.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/season_19_battleground_europa.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    HeistBattlegroundMars: {
        description: [
            "Blitz the BrayTech Futurescape campus on Mars to repossess fragments of the submind Charlemagne's code.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/season_19_battleground_polaris.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    HeistBattlegroundMoon: {
        description: [
            "Infiltrate the Seraph bunker tucked under the dust of the Moon to reclaim fragments of the submind Malahayati's code.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/season_19_battleground_luna.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    HyperNetCurrent: {
        description: [
            "Stop the Shadow Legion from bringing down Neomuna's defenses.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/lightfall_strike_plunger.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    LakeOfShadows: {
        description: [
            //"Stem the tide of Taken flowing into the European Dead Zone from beneath the waves.",
            "Purge the European Dead Zone of the Taken and Shadow Legion forces threatening to overtake the Reservoir and poison the precious water it holds.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_lake_of_shadows.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    LegendPsiOpsBattlegroundCosmodrome: {
        description: [
            "The Lucent Hive are using stolen Guardian Light for some wicked purpose. Breach their stronghold and uncover their plot.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/battleground_nestegg_s16.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    Liminality: {
        description: [
            "Carve your way through a treacherous mountain pass teeming with Lucent Hive and Taken.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_pickaxe.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    ProvingGrounds: {
        description: [
            "Defeat Caiatl's Chosen aboard the Land Tank, Halphas Electus, on Nessus.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/nessus_proving_grounds.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    PsiOpsBattlegroundEDZ: {
        description: [
            "Guardians have recently gone missing in the EDZ. Investigate their disappearances and hunt down the Lucent Hive responsible.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/battleground_chainsaw_s16.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    PsiOpsBattlegroundMoon: {
        description: [
            "The Lucent Hive have opened a portal between Savathûn's throne world and the Scarlet Keep. Break up the portal ritual, and prevent a full-scale invasion of Earth.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/battleground_trespass_s16.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    SavathunsSong: {
        description: [
            "Delve deep into the Hive-infested Arcology in search of missing fireteams.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_savanthuns_song.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    StrangeTerrain: {
        description: [
            "Defeat Nokris before he completes his ritual.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_nokris.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheArmsDealer: {
        description: [
            //"Shut down the operations of an ironmonger providing weapons to the Red Legion.",
            "Stifle the legacy of a notorious ironmonger providing weapons to the Shadow Legion.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_the_arms_dealer.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheCorrupted: {
        description: [
            "Hunt down one of Queen Mara's most trusted advisors and free her from Taken possession.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_gemini.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheDevilsLair: {
        description: [
            "Enter into the Devils' Lair and weaken the Fallen presence within the Cosmodrome.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/cosmodrome_devils_lair.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheDisgraced: {
        description: [
            "Defeat the shamed Hive Wizard Navôta in the Cosmodrome.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/cosmodrome-strike-gantry.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheFesteringCore: {
        description: [
            "Descend into the heart of Io's Pyramidion and root out a burgeoning infestation.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_the_festering_core.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheGlassway: {
        description: [
            "Prevent ancient and powerful Vex from escaping the Glassway on Europa.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/europa-strike-blackbird.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheHollowedLair: {
        description: [
            "The Fanatic has returned. Take him down and finish the job you started.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_taurus.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheInsightTerminus: {
        description: [
            "Break into the ancient Vex installation.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_glee.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheInvertedSpire: {
        description: [
            "End the Red Legion expedition that's ripped open the planet's surface.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_inverted_spire.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheLightblade: {
        description: [
            "Recover an artifact from a monument to Oryx, located deep in the swamps of Savathûn's throne world.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_lightblade.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheScarletKeep: {
        description: [
            "Investigate the recently erected Scarlet Keep and discover its dark purpose.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_the_scarlet_keep.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TreeOfProbabilities: {
        description: [
            "Contain a rampant army of Red Legion within the Infinite Forest.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/rituals_tree_of_probabilities.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    WardenOfNothing: {
        description: [
            "Help the Drifter restore order at the Prison of Elders.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/strike_aries.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheWhisper: {
        description: [
            "Investigate a Taken anomaly deep beneath the surface of Io.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/whisper.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    ZeroHour: {
        description: [
            "Race against the clock to stop House Salvation agents from stealing a dangerous weapon from the Old Tower.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/zero-hour.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    Harbinger: {
        description: [
            "Embody the will of the Traveler and hunt those who would serve the Darkness.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/edz_exotic_harbinger.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    Presage: {
        description: [
            "Jump coordinates matching an errant distress signal.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/exotic_quest_presage.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    VoxObscura: {
        description: [
            "Despite the Vanguard's recent victories, a dissident Psion faction continues to release Darkness-inspired propaganda. Return to Mars and learn how far the conspiracy goes.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/exotic_mission_chrome.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    SeraphsShield: {
        description: [
            "Infiltrate Seraph Station in Earth's orbit to plant a virus in the Warsat network.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/season_19_exotic_mission.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    Avalon: {
        description: [
            "Investigate a Vex network node in the EDZ that has been overwritten with a single word: AVALON.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/season_20_mission_avalon.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    Starcrossed: {
        description: [
            "Within the Black Garden, the Sol Divisive toil endlessly, systematically shutting down potential futures. With Riven's blessing, it's time to shut them down.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/mission_starcrossed.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    Excision: {
        description: [
            "Join your fellow Guardians to unmake the Witness once and for all.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/fistbump.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    DualDestiny: {
        description: [
            "Two Guardians enter the depths of the Pale Heart in search of power…",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/double_agents.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    Encore: {
        description: ["Explore the strange structures at the core of Nessus, converted by the Vex at the Conductor's command."],
        image: "https://www.bungie.net/img/destiny_content/pgcr/encore.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    TheShatteredThrone: {
        description: [
            "Strike back at the curse that plagues the Dreaming City.",
        ],
        image: TheShatteredThrone.src,
        imageWidth: TheShatteredThrone.width,
        imageHeight: TheShatteredThrone.height,
        link: "https://www.blueberries.gg/weapons/shattered-throne-loot-table/"
    },
    PitOfHeresy: {
        description: [
            "Deep beneath Sorrow's Harbor, the Hive keep their darkest secrets.",
        ],
        image: PitOfHeresy.src,
        imageWidth: PitOfHeresy.width,
        imageHeight: PitOfHeresy.height,
        link: "https://www.blueberries.gg/weapons/pit-of-heresy-loot-table/"
    },
    Prophecy: {
        description: [
            "Enter the realm of the Nine and ask the question: \"What is the nature of the Darkness?\"",
        ],
        image: Prophecy.src,
        imageWidth: Prophecy.width,
        imageHeight: Prophecy.height,
        link: "https://www.blueberries.gg/weapons/destiny-2-prophecy-loot/"
    },
    GraspOfAvarice: {
        description: [
            "A cautionary tale for adventurers willing to trade their humanity for riches.",
        ],
        image: GraspOfAvarice.src,
        imageWidth: GraspOfAvarice.width,
        imageHeight: GraspOfAvarice.height,
        link: "https://www.blueberries.gg/weapons/grasp-of-avarice-loot/"
    },
    Duality: {
        description: [
            "Dive into the depths of the exiled emperor's mind in search of dark secrets.",
        ],
        image: Duality.src,
        imageWidth: Duality.width,
        imageHeight: Duality.height,
        link: "https://www.blueberries.gg/weapons/duality-loot-table/"
    },
    SpireOfTheWatcher: {
        description: [
            "Machinations run wild in this dust-ridden ruin. Bring them to heel.",
        ],
        image: SpireOfTheWatcher.src,
        imageWidth: SpireOfTheWatcher.width,
        imageHeight: SpireOfTheWatcher.height,
        link: "https://www.blueberries.gg/weapons/spire-of-the-watcher-loot/"
    },
    GhostsOfTheDeep: {
        description: [
            "Drown in the deep, or rise from it.",
        ],
        image: GhostsOfTheDeep.src,
        imageWidth: GhostsOfTheDeep.width,
        imageHeight: GhostsOfTheDeep.height,
        link: "https://www.blueberries.gg/weapons/ghosts-of-the-deep-loot/"
    },
    WarlordsRuin: {
        description: [
            "Nestled deep in the mountains of the EDZ, Scorn lay claim to a Dark Age castle containing dangerous relics, and a blighted vengeance festers in the dirt.",
        ],
        image: WarlordsRuin.src,
        imageWidth: WarlordsRuin.width,
        imageHeight: WarlordsRuin.height,
        link: "https://www.blueberries.gg/weapons/warlords-ruin-loot-table/"
    },
    VespersHost: {
        description: [
            "Defy the algorithm. Cut through its web.",
        ],
        image: VespersHost.src,
        imageWidth: VespersHost.width,
        imageHeight: VespersHost.height,
        link: "https://www.blueberries.gg/weapons/vespers-host-loot-table/"
    },
    Leviathan: {
        description: [
            "\"Grow fat from strength.\"",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/raid_gluttony.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    LeviathanEaterOfWorlds: {
        description: [
            "\"In the belly of the beast.\"",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/raids_leviathan_eater_of_worlds.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    LeviathanSpireOfStars: {
        description: [
            "On the wings of Icarus.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/raid_greed.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    LastWish: {
        description: [
            "\"The opportunity of a lifetime.\"",
        ],
        image: LastWish.src,
        imageWidth: LastWish.width,
        imageHeight: LastWish.height,
        link: "https://www.blueberries.gg/weapons/destiny-2-last-wish-loot-table/"
    },
    ScourgeOfThePast: {
        description: [
            "Beneath the ruins of the Last City lies the Black Armory's most precious vault, now under siege by Siviks and his crew, the Kell's Scourge.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/raids.1305rh0093145r13t5hn10tnz.raid_sunset.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    CrownOfSorrow: {
        description: [
            "Grow [weak] with [pride].",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/raid_eclipse.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    GardenOfSalvation: {
        description: [
            "\"The Garden calls out to you.\"",
        ],
        image: GardenOfSalvation.src,
        imageWidth: GardenOfSalvation.width,
        imageHeight: GardenOfSalvation.height,
        link: "https://www.blueberries.gg/weapons/garden-of-salvation-loot-table/"
    },
    DeepStoneCrypt: {
        description: [
            "The chains of legacy must be broken.",
        ],
        image: DeepStoneCrypt.src,
        imageWidth: DeepStoneCrypt.width,
        imageHeight: DeepStoneCrypt.height,
        link: "https://www.blueberries.gg/weapons/destiny-2-deep-stone-crypt-loot/"
    },
    VaultOfGlass: {
        description: [
            "Beneath Venus, evil stirs…",
        ],
        image: VaultOfGlass.src,
        imageWidth: VaultOfGlass.width,
        imageHeight: VaultOfGlass.height,
        link: "https://www.blueberries.gg/weapons/vault-of-glass-loot/"
    },
    VowOfTheDisciple: {
        description: [
            "The disciple beckons…",
        ],
        image: VowOfTheDisciple.src,
        imageWidth: VowOfTheDisciple.width,
        imageHeight: VowOfTheDisciple.height,
        link: "https://www.blueberries.gg/weapons/vow-of-the-disciple-loot-table/"
    },
    KingsFall: {
        description: [
            "Long live the King…",
        ],
        image: KingsFall.src,
        imageWidth: KingsFall.width,
        imageHeight: KingsFall.height,
        link: "https://www.blueberries.gg/weapons/kings-fall-loot-table/"
    },
    RootOfNightmares: {
        description: [
            "A sinister threat has taken root.",
        ],
        image: RootOfNightmares.src,
        imageWidth: RootOfNightmares.width,
        imageHeight: RootOfNightmares.height,
        link: "https://www.blueberries.gg/weapons/root-of-nightmares-loot-table/"
    },
    CrotasEnd: {
        description: [
            "He waits in the dark below.",
        ],
        image: CrotasEnd.src,
        imageWidth: CrotasEnd.width,
        imageHeight: CrotasEnd.height,
        link: "https://www.blueberries.gg/weapons/crotas-end-loot/"
    },
    Pantheon: {
        description: [
            "Face off against a series of raid bosses enhanced with the Witness's power.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/pantheon_golgoroth.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    PhanteonAtraksSovereign: {
        description: [
            "Face off against a series of raid bosses enhanced with the Witness's power.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/pantheon_golgoroth.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    PhanteonOryxExalted: {
        description: [
            "Face off against a series of raid bosses enhanced with the Witness's power.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/pantheon_golgoroth.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    PhanteonRhulkIndomitable: {
        description: [
            "Face off against a series of raid bosses enhanced with the Witness's power.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/pantheon_golgoroth.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    PhanteonNezarecSublime: {
        description: [
            "Face off against a series of raid bosses enhanced with the Witness's power.",
        ],
        image: "https://www.bungie.net/img/destiny_content/pgcr/pantheon_golgoroth.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    SalvationsEdge: {
        description: [
            "Free the Light.",
        ],
        image: SalvationsEdge.src,
        imageWidth: SalvationsEdge.width,
        imageHeight: SalvationsEdge.height,
        link: "https://www.blueberries.gg/weapons/salvations-edge-loot-table/"
    },
    KellsFall: {
        description: ["Enter Fikrul's Revenant Fortress in the Tangled Shore, where dark reflections make it difficult to discern illusion from reality."],
        image: "https://www.bungie.net/img/destiny_content/pgcr/fikrul_keep.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    Derealize: {
        description: ["Investigate the source of a mysterious Taken power—and claim it before anyone else can."],
        image: "https://www.bungie.net/img/theme/destiny/bgs/pgcrs/placeholder.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
    SunderedDoctrine: {
        description: ["Power lies in the deepest vault."],
        image: "https://www.bungie.net/img/destiny_content/pgcr/dungeon_delver.jpg",
        imageWidth: 1280,
        imageHeight: 720,
        link: "https://www.blueberries.gg/weapons/sundered-doctrine-loot-table/"
    },
    None: {
        description: [
            "Empty template",
            "Nothing should show by default, unless client messes with javascript",
        ],
        image: lootPlaceholder.src,
        imageWidth: 1280,
        imageHeight: 720,
        link: ""
    },
};
