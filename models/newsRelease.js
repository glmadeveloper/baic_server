import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const NewsRelease = db.define(
  "news_release",
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
    description: {
      type: DataTypes.TEXT("long"),
    },
    description_ar: {
      type: DataTypes.TEXT("long"),
    },
    otherNews: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    image: {
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

export default NewsRelease;
