import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const TestDrivePage = db.define(
  "testDrivePage",
  {
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

export default TestDrivePage;
