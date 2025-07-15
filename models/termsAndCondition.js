import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const TermsAndCondition = db.define(
  "termsAndCondition",
  {
    title: {
      type: DataTypes.STRING,
    },
    title_ar: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT("long"),
    },
    description_ar: {
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

export default TermsAndCondition;
