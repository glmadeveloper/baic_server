import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const JoinUs = db.define(
  "joinUs",
  {
    gender: {
      type: DataTypes.STRING,
    },

    firstName: {
      type: DataTypes.STRING,
    },

    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },

    phoneNumber: {
      type: DataTypes.INTEGER,
    },

    nationality: {
      type: DataTypes.STRING,
    },

    jobTitle: {
      type: DataTypes.STRING,
    },

    countryCode: {
      type: DataTypes.INTEGER,
    },

    message: {
      type: DataTypes.STRING,
    },
    pdf: {
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

export default JoinUs;
