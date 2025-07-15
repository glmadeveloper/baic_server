import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const JobCategories = db.define(
  'jobCategories',
  {
    jobCategeryName: {
      type: DataTypes.STRING,
    },
    jobCategeryName_ar: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  },
);

(async () => {
  await db.sync();
})();

export default JobCategories;
