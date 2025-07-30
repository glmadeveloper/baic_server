import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const ResearchAndDevelopment = db.define(
  "researchAndDevelopment",
  {
    banner_image: {
      type: DataTypes.STRING,
    },
    banner_title: {
      type: DataTypes.STRING,
    },
    banner_title_ar: {
      type: DataTypes.STRING,
    },
    section1_title: {
      type: DataTypes.STRING,
    },
    section1_title_ar: {
      type: DataTypes.STRING,
    },
    section1_short_description_1: {
      type: DataTypes.TEXT("long"),
    },
    section1_short_description_1_ar: {
      type: DataTypes.TEXT("long"),
    },
    section1_short_description_2: {
      type: DataTypes.TEXT("long"),
    },
    section1_short_description_2_ar: {
      type: DataTypes.TEXT("long"),
    },
    section2_image: {
      type: DataTypes.STRING,
    },
    section2_title: {
      type: DataTypes.STRING,
    },
    section2_title_ar: {
      type: DataTypes.STRING,
    },
    section2_description: {
      type: DataTypes.TEXT("long"),
    },
    section2_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section3_image: {
      type: DataTypes.STRING,
    },
    section3_title: {
      type: DataTypes.STRING,
    },
    section3_title_ar: {
      type: DataTypes.STRING,
    },
    section3_description: {
      type: DataTypes.TEXT("long"),
    },
    section3_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section4_left_title: {
      type: DataTypes.STRING,
    },
    section4_left_title_ar: {
      type: DataTypes.STRING,
    },
    section4_left_description: {
      type: DataTypes.TEXT("long"),
    },
    section4_left_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section4_right_image: {
      type: DataTypes.STRING,
    },
    section4_right_title: {
      type: DataTypes.STRING,
    },
    section4_right_title_ar: {
      type: DataTypes.STRING,
    },
    section4_right_description: {
      type: DataTypes.TEXT("long"),
    },
    section4_right_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section4_left_image: {
      type: DataTypes.STRING,
    },
    section5_title: {
      type: DataTypes.STRING,
    },
    section5_title_ar: {
      type: DataTypes.STRING,
    },
    section5_description: {
      type: DataTypes.TEXT("long"),
    },
    section5_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section5_image: {
      type: DataTypes.STRING,
    },
    section6_title: {
      type: DataTypes.STRING,
    },
    section6_title_ar: {
      type: DataTypes.STRING,
    },
    section6_description: {
      type: DataTypes.TEXT("long"),
    },
    section6_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section7_title: {
      type: DataTypes.STRING,
    },
    section7_title_ar: {
      type: DataTypes.STRING,
    },
    section7_description: {
      type: DataTypes.TEXT("long"),
    },
    section7_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section7_image: {
      type: DataTypes.STRING,
    },
    section8_main_title: {
      type: DataTypes.STRING,
    },
    section8_main_title_ar: {
      type: DataTypes.STRING,
    },
    section8_left_title: {
      type: DataTypes.STRING,
    },
    section8_left_title_ar: {
      type: DataTypes.STRING,
    },
    section8_left_description: {
      type: DataTypes.TEXT("long"),
    },
    section8_left_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section8_right_image: {
      type: DataTypes.STRING,
    },
    section8_right_title: {
      type: DataTypes.STRING,
    },
    section8_right_title_ar: {
      type: DataTypes.STRING,
    },
    section8_right_description: {
      type: DataTypes.TEXT("long"),
    },
    section8_right_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section8_left_image: {
      type: DataTypes.STRING,
    },
    section8_left_image1: {
      type: DataTypes.STRING,
    },
    section9_title: {
      type: DataTypes.STRING,
    },
    section9_title_ar: {
      type: DataTypes.STRING,
    },
    section9_description: {
      type: DataTypes.TEXT("long"),
    },
    section9_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section9_image: {
      type: DataTypes.STRING,
    },
    section10_title: {
      type: DataTypes.STRING,
    },
    section10_title_ar: {
      type: DataTypes.STRING,
    },
    section10_short_description: {
      type: DataTypes.TEXT("long"),
    },
    section10_short_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section10_right_description: {
      type: DataTypes.TEXT("long"),
    },
    section10_right_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section10_image: {
      type: DataTypes.STRING,
    },
    section11_title: {
      type: DataTypes.STRING,
    },
    section11_title_ar: {
      type: DataTypes.STRING,
    },
    section11_image: {
      type: DataTypes.STRING,
    },
    section12_main_title: {
      type: DataTypes.STRING,
    },
    section12_main_title_ar: {
      type: DataTypes.STRING,
    },
    section12_image: {
      type: DataTypes.STRING,
    },
    section12_title: {
      type: DataTypes.STRING,
    },
    section12_title_ar: {
      type: DataTypes.STRING,
    },
    section12_description: {
      type: DataTypes.TEXT("long"),
    },
    section12_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section13_main_title: {
      type: DataTypes.STRING,
    },
    section13_main_title_ar: {
      type: DataTypes.STRING,
    },
    section13_main_description: {
      type: DataTypes.TEXT("long"),
    },
    section13_main_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section13_left_image: {
      type: DataTypes.STRING,
    },
    section13_right_description: {
      type: DataTypes.TEXT("long"),
    },
    section13_right_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section14_title: {
      type: DataTypes.STRING,
    },
    section14_title_ar: {
      type: DataTypes.STRING,
    },
    section14_description: {
      type: DataTypes.TEXT("long"),
    },
    section14_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section14_image: {
      type: DataTypes.STRING,
    },
    meta_description: {
      type: DataTypes.TEXT,
    },
    meta_title: {
      type: DataTypes.STRING,
    },
    meta_keywords: {
      type: DataTypes.STRING,
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

export default ResearchAndDevelopment;
