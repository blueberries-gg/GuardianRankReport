import { ModeType } from "../../ModeType";

export const ModeTypeString: { [key in keyof typeof ModeType]: string } = {
	GrandMaster: "GrandMaster",
	Normal: "Normal",
	Legend: "Legend",
	Master: "Master",
	Contest: "Contest",
	Prestige: "Prestige",
	NormalLegacy: "Normal (Legacy)",
	Other: "Other",
	Guided: "Guided Games",
	Heroic: "Heroic",
};