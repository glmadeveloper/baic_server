import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const History = db.define(
  "history",
  {
    year: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT("long"),
    },
    description_ar: {
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

export default History;
