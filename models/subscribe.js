import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Subscribe = db.define(
  "subscribe",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    mediaName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    mediaIntroduction: {
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

export default Subscribe;
