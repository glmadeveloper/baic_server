import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const BaicInX = db.define(
  "baicInX",
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
    image1: {
      type: DataTypes.STRING,
    },
    image1Title: {
      type: DataTypes.STRING,
    },
    image1Title_ar: {
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
    image3: {
      type: DataTypes.STRING,
    },
    image3Title: {
      type: DataTypes.STRING,
    },
    image3Title_ar: {
      type: DataTypes.STRING,
    },
    image4: {
      type: DataTypes.STRING,
    },
    image4Title: {
      type: DataTypes.STRING,
    },
    image4Title_ar: {
      type: DataTypes.STRING,
    },
    image5: {
      type: DataTypes.STRING,
    },
    image5Title: {
      type: DataTypes.STRING,
    },
    image5Title_ar: {
      type: DataTypes.STRING,
    },
    image6: {
      type: DataTypes.STRING,
    },
    image6Title: {
      type: DataTypes.STRING,
    },
    image6Title_ar: {
      type: DataTypes.STRING,
    },
    image7: {
      type: DataTypes.STRING,
    },
    image7Title: {
      type: DataTypes.STRING,
    },
    image7Title_ar: {
      type: DataTypes.STRING,
    },
    image8: {
      type: DataTypes.STRING,
    },
    image8Title: {
      type: DataTypes.STRING,
    },
    image8Title_ar: {
      type: DataTypes.STRING,
    },
    image9: {
      type: DataTypes.STRING,
    },
    image9Title: {
      type: DataTypes.STRING,
    },
    image9Title_ar: {
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

export default BaicInX;
