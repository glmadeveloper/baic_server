import { Sequelize } from "sequelize";
import db from "../config/database.js";
import ModelWithColors from "./modelWithColors.js";
import TestDrive from "./testDrive.js";
import MultiMedia from "./multiMedia.js";
const { DataTypes } = Sequelize;

const Model = db.define(
  "model",
  {
    name: {
      type: DataTypes.STRING,
    },
    name_ar: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT("long"),
    },
    description_ar: {
      type: DataTypes.TEXT("long"),
    },
    image1: {
      type: DataTypes.STRING,
    },
    image1_title: {
      type: DataTypes.STRING,
    },
    image1_title_ar: {
      type: DataTypes.STRING,
    },
    image1_description: {
      type: DataTypes.TEXT("long"),
    },
    image1_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    image2: {
      type: DataTypes.STRING,
    },
    image2_title: {
      type: DataTypes.STRING,
    },
    image2_title_ar: {
      type: DataTypes.STRING,
    },
    image2_description: {
      type: DataTypes.TEXT("long"),
    },
    image2_description_ar: {
      type: DataTypes.TEXT("long"),
    },
    modelAndConfiguration: {
      type: DataTypes.TEXT("long"),
    },
    vr_link: {
      type: DataTypes.STRING,
    },
    power: {
      type: DataTypes.STRING,
    },
    torque: {
      type: DataTypes.STRING,
    },
    wheelbase: {
      type: DataTypes.STRING,
    },
      moreSections: {
      type: DataTypes.JSON,
    },
    designType: {
      type: DataTypes.ENUM("normal", "advanced"), // Enum for design type
      allowNull: false,
    },
    normalSections: {
      type: DataTypes.JSON, // For normal designType: one section with many images
      allowNull: true,
    },
    advancedSections: {
      type: DataTypes.JSON, // For advanced designType: 3 sections with many images
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "modelCategory",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);



Model.hasMany(ModelWithColors, {
  onDelete: "set null",
});
Model.hasMany(ModelWithColors, {
  foreignKey: "modelId",
});

ModelWithColors.belongsTo(Model, {
  foreignKey: "modelId",
});

Model.hasMany(TestDrive, {
  onDelete: "set null",
});
Model.hasMany(TestDrive, {
  foreignKey: "modelId",
});

TestDrive.belongsTo(Model, {
  foreignKey: "modelId",
});

Model.hasMany(MultiMedia, {
  onDelete: "set null",
});
Model.hasMany(MultiMedia, {
  foreignKey: "modelId",
});

MultiMedia.belongsTo(Model, {
  foreignKey: "modelId",
});

(async () => {
  await db.sync({alter : true});
})();

export default Model;





























