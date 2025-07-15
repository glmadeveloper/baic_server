import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Model from "./model.js";

const { DataTypes } = Sequelize;

const ModelCategory = db.define(
  "modelCategory",
  {
    name: {
      type: DataTypes.STRING,
    },
    name_ar: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

ModelCategory.hasMany(Model, {
  onDelete: "set null",
});
ModelCategory.hasMany(Model, {
  foreignKey: "categoryId",
});

Model.belongsTo(ModelCategory, {
  foreignKey: "categoryId",
});

(async () => {
  await db.sync();
})();

export default ModelCategory;
