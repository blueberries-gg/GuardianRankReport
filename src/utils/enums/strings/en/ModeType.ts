import { ModeType } from "../../ModeType";

export const ModeTypeString: { [key in keyof typeof ModeType]: string } = {
	GrandMaster: "Grandmaster",
	Normal: "Normal",
	Legend: "Legend",
	Master: "Master",
	Contest: "Contest",
	Prestige: "Prestige",
	NormalLegacy: "Normal (Legacy)",
	Other: "Other",
	Guided: "Guided Games",
	Heroic: "Heroic",
	Eternity: "Eternity",
	Explorer: "Explorer",
	Ultimatum: "Ultimatum"
};