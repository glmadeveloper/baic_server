import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const OffRoad = db.define(
  "offRoad",
  {
    bannerImage: {
      type: DataTypes.STRING,
    },
    bannerTitle: {
      type: DataTypes.STRING,
    },
    bannerTitle_ar: {
      type: DataTypes.STRING,
    },
    bannerDescription: {
      type: DataTypes.TEXT("long"),
    },
    bannerDescription_ar: {
      type: DataTypes.TEXT("long"),
    },
    image1: {
      type: DataTypes.STRING,
    },
    image1Title: {
      type: DataTypes.STRING,
    },
    image1Title_ar: {
      type: DataTypes.STRING,
    },
    image1Description: {
      type: DataTypes.TEXT("long"),
    },
    image1Description_ar: {
      type: DataTypes.TEXT("long"),
    },
    image1MainDescription: {
      type: DataTypes.TEXT("long"),
    },
    image1MainDescription_ar: {
      type: DataTypes.TEXT("long"),
    },
    image2: {
      type: DataTypes.STRING,
    },
    image2Title: {
      type: DataTypes.STRING,
    },
    image2Title_ar: {
      type: DataTypes.STRING,
    },
    image2Description: {
      type: DataTypes.TEXT("long"),
    },
    image2Description_ar: {
      type: DataTypes.TEXT("long"),
    },
    image3: {
      type: DataTypes.STRING,
    },
    image3Title: {
      type: DataTypes.STRING,
    },
    image3Title_ar: {
      type: DataTypes.STRING,
    },
    image3Description: {
      type: DataTypes.TEXT("long"),
    },
    image3Description_ar: {
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

export default OffRoad;
