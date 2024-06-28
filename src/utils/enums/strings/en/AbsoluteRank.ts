import { AbsoluteRank } from "../../AbsoluteRank";

export const AbsoluteRankString: { [key in AbsoluteRank]: string } = {
	[AbsoluteRank.Untested]: "Untested",
	[AbsoluteRank.Copper]: "Copper",
	[AbsoluteRank.Bronze]: "Bronze",
	[AbsoluteRank.Silver]: "Silver",
	[AbsoluteRank.Gold]: "Gold",
	[AbsoluteRank.Diamond]: "Diamond",
	[AbsoluteRank.Platinum]: "Platinum",
	[AbsoluteRank.Adept]: "Adept",
	[AbsoluteRank.Ascendant]: "Ascendant"
}