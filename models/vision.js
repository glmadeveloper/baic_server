import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Vision = db.define(
  "vision",
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
    image: {
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

export default Vision;
