import { DestinyActivity } from "../enums/DestinyActivities";
import WarlordsRuin from "../../resources/images/loot/WarlordsRuin.jpg";
import lootPlaceholder from "../../resources/images/lootPlaceholder.png";


export const DestinyActivityDetails: {
	[key in keyof typeof DestinyActivity]: { description: string[]; image: string; imageWidth: number; imageHeight: number; link: string };
} = {
	AGardenWorld: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	BattlegroundBehemoth: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	BattlegroundFoothold: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	BattlegroundHailstone: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	BattlegroundOracle: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	BirthplaceOfTheVile: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	Broodhold: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	DefiantBattlegroundCosmodrome: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	DefiantBattlegroundEDZ: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	DefiantBattlegroundOrbitalPrison: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	ExodusCrash: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	FallenSABER: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	HeistBattlegroundEuropa: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	HeistBattlegroundMars: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	HeistBattlegroundMoon: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	HyperNetCurrent: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	LakeOfShadows: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	LegendPsiOpsBattlegroundCosmodrome: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	Liminality: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	ProvingGrounds: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	PsiOpsBattlegroundEDZ: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	PsiOpsBattlegroundMoon: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	SavathunsSong: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	StrangeTerrain: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheArmsDealer: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheCorrupted: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheDevilsLair: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheDisgraced: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheFesteringCore: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheGlassway: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheHollowedLair: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheInsightTerminus: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheInvertedSpire: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheLightblade: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheScarletKeep: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TreeOfProbabilities: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	WardenOfNothing: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheWhisper: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	ZeroHour: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	Harbinger: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	Presage: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	VoxObscura: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	SeraphsShield: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/root-of-nightmares-loot-table/"
    },
	Avalon: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	Starcrossed: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	Excision: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	DualDestiny: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	TheShatteredThrone: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/shattered-throne-loot-table/"
    },
	PitOfHeresy: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/pit-of-heresy-loot-table/"
    },
	Prophecy: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/destiny-2-prophecy-loot/"
    },
	GraspOfAvarice: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/grasp-of-avarice-loot/"
    },
	Duality: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/duality-loot-table/"
    },
	SpireOfTheWatcher: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/spire-of-the-watcher-loot/"
    },
	GhostsOfTheDeep: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/ghosts-of-the-deep-loot/"
    },
	WarlordsRuin: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: WarlordsRuin.src,
        imageWidth: WarlordsRuin.width,
        imageHeight: WarlordsRuin.height,
        link: "https://www.blueberries.gg/weapons/warlords-ruin-loot-table/"
    },
	Leviathan: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	LeviathanEaterOfWorlds: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	LeviathanSpireOfStars: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	LastWish: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/destiny-2-last-wish-loot-table/"
    },
	ScourgeOfThePast: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	CrownOfSorrow: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	GardenOfSalvation: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/garden-of-salvation-loot-table/"
    },
	DeepStoneCrypt: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/destiny-2-deep-stone-crypt-loot/"
    },
	VaultOfGlass: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/vault-of-glass-loot/"
    },
	VowOfTheDisciple: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/vow-of-the-disciple-loot-table/"
    },
	KingsFall: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/kings-fall-loot-table/"
    },
	RootOfNightmares: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/root-of-nightmares-loot-table/"
    },
	CrotasEnd: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/crotas-end-loot/"
    },
	Pantheon: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	PhanteonAtraksSovereign: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	PhanteonOryxExalted: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	PhanteonRhulkIndomitable: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	PhanteonNezarecSublime: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
	SalvationsEdge: {
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perferendis porro ab quia. Officia dicta beatae, quo sunt nobis nisi placeat tenetur sapiente harum. Consequuntur labore dolorum voluptate inventore iste nulla numquam consequatur dicta possimus!",
            "Dolorem suscipit quos repudiandae. Nisi nesciunt alias perspiciatis animi! Sequi non ex debitis in sit eum dignissimos velit hic animi quos saepe tempore, beatae eos explicabo recusandae nisi libero facere ipsum dolores iure a deserunt?",
            "Unde, voluptas molestiae perferendis maxime atque culpa sed autem sequi earum quia repellat laboriosam illo voluptatum voluptatem, iusto et cumque libero! Similique optio sit fugit! Eaque, qui doloremque. Accusantium asperiores maxime corrupti provident veritatis neque.",
            "Quibusdam iusto, quo velit ut quidem sapiente perferendis suscipit dolorum ab consectetur voluptatum quaerat quas magni facere molestiae incidunt deleniti vel qui tempora! Officiis iure quos sit molestiae totam eum porro repellat laborum consequuntur nihil?",
        ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: "https://www.blueberries.gg/weapons/salvations-edge-loot-table/"
    },
	None: {
        description: [
            "Empty template",
            "Nothing should show by default, unless client messes with javascript",
       ],
        image: lootPlaceholder.src,
        imageWidth: lootPlaceholder.width,
        imageHeight: lootPlaceholder.height,
        link: ""
    },
};
