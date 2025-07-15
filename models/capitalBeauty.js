import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const CapitalBeauty = db.define(
  "capitalBeauty",
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
    bannerSubTitle: {
      type: DataTypes.TEXT("long"),
    },
    bannerSubTitle_ar: {
      type: DataTypes.TEXT("long"),
    },
    image1: {
      type: DataTypes.STRING,
    },
    image1Description: {
      type: DataTypes.TEXT("long"),
    },
    image1Description_ar: {
      type: DataTypes.TEXT("long"),
    },
    gdImage1: {
      type: DataTypes.STRING,
    },
    gdImage2: {
      type: DataTypes.STRING,
    },
    gdImage3: {
      type: DataTypes.STRING,
    },
    gdImage4: {
      type: DataTypes.STRING,
    },
    gdImage5: {
      type: DataTypes.STRING,
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
    image4: {
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

export default CapitalBeauty;
