import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Homepagebaner = db.define(
  "homepagebanner",
  {
    image: {
      type: DataTypes.STRING,
    },
    title_en: {
      type: DataTypes.STRING,
    },
    title_ar: {
      type: DataTypes.STRING,
    },
    description_en: {
      type: DataTypes.STRING,
    },
    description_ar: {
      type: DataTypes.STRING,
    },
    button1: {
      type: DataTypes.STRING,
    },
    button1_url: {
      type: DataTypes.STRING,
    },
    button2: {
      type: DataTypes.STRING,
    },
    button2_url: {
      type: DataTypes.STRING,
    },
    homepageId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'homepage',
        key: 'id',
      },
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

export default Homepagebaner;
