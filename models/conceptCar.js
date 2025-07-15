import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const ConceptCar = db.define(
  "conceptCar",
  {
    bannerImage: {
      type: DataTypes.STRING,
    },
    section_1_image: {
      type: DataTypes.STRING,
    },
    section_1_title: {
      type: DataTypes.STRING,
    },
    section_1_title_ar: {
      type: DataTypes.STRING,
    },
    section_1_description: {
      type: DataTypes.TEXT("long"),
    },
    section_1_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section_2_image: {
      type: DataTypes.STRING,
    },
    section_2_description: {
      type: DataTypes.TEXT("long"),
    },
    section_2_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section_3_image: {
      type: DataTypes.STRING,
    },
    section_3_title: {
      type: DataTypes.STRING,
    },
    section_3_title_ar: {
      type: DataTypes.STRING,
    },
    section_4_title1: {
      type: DataTypes.STRING,
    },
    section_4_title1_ar: {
      type: DataTypes.STRING,
    },
    section_4_description1: {
      type: DataTypes.TEXT("long"),
    },
    section_4_description1_ar: {
      type: DataTypes.TEXT("long"),
    },
    section_4_image1: {
      type: DataTypes.STRING,
    },

    section_4_title2: {
      type: DataTypes.STRING,
    },
    section_4_title2_ar: {
      type: DataTypes.STRING,
    },
    section_4_description2: {
      type: DataTypes.TEXT("long"),
    },
    section_4_description2_ar: {
      type: DataTypes.TEXT("long"),
    },
    section_4_image2: {
      type: DataTypes.STRING,
    },

    section_4_title3: {
      type: DataTypes.STRING,
    },
    section_4_title3_ar: {
      type: DataTypes.STRING,
    },
    section_4_description3: {
      type: DataTypes.TEXT("long"),
    },
    section_4_description3_ar: {
      type: DataTypes.TEXT("long"),
    },
    section_4_image3: {
      type: DataTypes.STRING,
    },

    section_4_main_description: {
      type: DataTypes.TEXT("long"),
    },
    section_4_main_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section_5_image: {
      type: DataTypes.STRING,
    },
    section_5_description: {
      type: DataTypes.TEXT("long"),
    },
    section_5_description_ar: {
      type: DataTypes.TEXT("long"),
    },

    section_6_image: {
      type: DataTypes.STRING,
    },
    section_6_description: {
      type: DataTypes.TEXT("long"),
    },
    section_6_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section_7_image: {
      type: DataTypes.STRING,
    },
    section_7_title: {
      type: DataTypes.STRING,
    },
    section_7_title_ar: {
      type: DataTypes.STRING,
    },
    section_7_description: {
      type: DataTypes.TEXT("long"),
    },
    section_7_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section_8_image: {
      type: DataTypes.STRING,
    },
    section_8_description: {
      type: DataTypes.TEXT("long"),
    },
    section_8_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section_9_image: {
      type: DataTypes.STRING,
    },
    section_9_title: {
      type: DataTypes.TEXT("long"),
    },
    section_9_title_ar: {
      type: DataTypes.TEXT("long"),
    },

    section_10_image1: {
      type: DataTypes.STRING,
    },
    section_10_title1: {
      type: DataTypes.TEXT("long"),
    },
    section_10_title1_ar: {
      type: DataTypes.TEXT("long"),
    },

    section_10_image2: {
      type: DataTypes.STRING,
    },
    section_10_title2: {
      type: DataTypes.TEXT("long"),
    },
    section_10_title2_ar: {
      type: DataTypes.TEXT("long"),
    },

    section_10_image3: {
      type: DataTypes.STRING,
    },
    section_10_title3: {
      type: DataTypes.TEXT("long"),
    },
    section_10_title3_ar: {
      type: DataTypes.TEXT("long"),
    },

    section_10_image4: {
      type: DataTypes.STRING,
    },
    section_10_title4: {
      type: DataTypes.TEXT("long"),
    },
    section_10_title4_ar: {
      type: DataTypes.TEXT("long"),
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

(async () => {
  await db.sync();
})();

export default ConceptCar;
