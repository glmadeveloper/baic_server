import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const OverView = db.define(
  "overView",
  {
    banner_description: {
      type: DataTypes.TEXT("long"),
    },
    banner_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    banner_image: {
      type: DataTypes.STRING,
    },
    banner_title: {
      type: DataTypes.STRING,
    },
    banner_title_ar: {
      type: DataTypes.STRING,
    },
    section1_image: {
      type: DataTypes.STRING,
    },
    section1_title: {
      type: DataTypes.STRING,
    },
    section1_title_ar: {
      type: DataTypes.STRING,
    },
    section1_description: {
      type: DataTypes.TEXT("long"),
    },
    section1_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    section2_image: {
      type: DataTypes.STRING,
    },
    section2_image_title1: {
      type: DataTypes.STRING,
    },
    section2_image_title1_ar: {
      type: DataTypes.STRING,
    },
    section2_image_title2: {
      type: DataTypes.STRING,
    },
    section2_image_title2_ar: {
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
    section3_title1: {
      type: DataTypes.TEXT("long"),
    },
    section3_title1_ar: {
      type: DataTypes.TEXT("long"),
    },
    section3_description1: {
      type: DataTypes.TEXT("long"),
    },
    section3_description1_ar: {
      type: DataTypes.TEXT("long"),
    },
    section3_title2: {
      type: DataTypes.TEXT("long"),
    },
    section3_title2_ar: {
      type: DataTypes.TEXT("long"),
    },
    section3_description2: {
      type: DataTypes.TEXT("long"),
    },
    section3_description2_ar: {
      type: DataTypes.TEXT("long"),
    },
    section3_description3: {
      type: DataTypes.TEXT("long"),
    },
    section3_description3_ar: {
      type: DataTypes.TEXT("long"),
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

export default OverView;
