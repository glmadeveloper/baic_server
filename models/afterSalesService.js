import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const AfterSalesService = db.define(
  "afterSalesService",
  {
    title: {
      type: DataTypes.STRING,
    },
    title_ar: {
      type: DataTypes.STRING,
    },
    subTitle: {
      type: DataTypes.TEXT("long"),
    },
    subTitle_ar: {
      type: DataTypes.TEXT("long"),
    },
    bannerImage: {
      type: DataTypes.STRING,
    },

    worldTitle: {
      type: DataTypes.STRING,
    },
    worldTitle_ar: {
      type: DataTypes.STRING,
    },
    worldSubTitle: {
      type: DataTypes.TEXT("long"),
    },
    worldSubTitle_ar: {
      type: DataTypes.TEXT("long"),
    },
    worldimage: {
      type: DataTypes.STRING,
    },
    featureTitle: {
      type: DataTypes.STRING,
    },
    featureTitle_ar: {
      type: DataTypes.STRING,
    },
    featureSubTitle: {
      type: DataTypes.TEXT("long"),
    },
    featureSubTitle_ar: {
      type: DataTypes.TEXT("long"),
    },
    featureimage: {
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

export default AfterSalesService;
