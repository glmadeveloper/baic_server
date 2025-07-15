import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const MultiMedia = db.define(
  "multiMedia",
  {
    title: {
      type: DataTypes.STRING,
    },
    title_ar: {
      type: DataTypes.STRING,
    },
    typeOfMedia: {
      type: DataTypes.STRING,
    },

    media: {
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

export default MultiMedia;
