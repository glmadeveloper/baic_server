import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const ModelWithColors = db.define(
  "modelsWithColors",
  {
    color: {
      type: DataTypes.STRING,
    },
    color_ar: {
      type: DataTypes.STRING,
    },

    image: {
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

export default ModelWithColors;
