import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const TestDrive = db.define(
  "testDrive",
  {
    country: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    modelId: {
      type: DataTypes.INTEGER,
      references: {
        model: "model",
        key: "id",
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

export default TestDrive;
