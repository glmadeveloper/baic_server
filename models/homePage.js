import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Homepage = db.define(
  "homepage",
  {
    banner_image1: {
      type: DataTypes.STRING,
    },
    banner_image1_title: {
      type: DataTypes.STRING,
    },
    banner_image1_title_ar: {
      type: DataTypes.STRING,
    },
    banner_image1_description: {
      type: DataTypes.STRING,
    },
    banner_image1_description_ar: {
      type: DataTypes.STRING,
    },
    banner_image1_button1: {
      type: DataTypes.STRING,
    },
    banner_image1_button1_url: {
      type: DataTypes.STRING,
    },
    banner_image1_button2: {
      type: DataTypes.STRING,
    },
    banner_image1_button2_url: {
      type: DataTypes.STRING,
    },
    banner_image2: {
      type: DataTypes.STRING,
    },
    banner_image2_title: {
      type: DataTypes.STRING,
    },
    banner_image2_title_ar: {
      type: DataTypes.STRING,
    },
    banner_image2_description: {
      type: DataTypes.STRING,
    },
    banner_image2_description_ar: {
      type: DataTypes.STRING,
    },
    banner_image2_button1: {
      type: DataTypes.STRING,
    },
    banner_image2_button1_url: {
      type: DataTypes.STRING,
    },
    banner_image2_button2: {
      type: DataTypes.STRING,
    },
    banner_image2_button2_url: {
      type: DataTypes.STRING,
    },
    banner_image3: {
      type: DataTypes.STRING,
    },
    banner_image3_title: {
      type: DataTypes.STRING,
    },
    banner_image3_title_ar: {
      type: DataTypes.STRING,
    },
    banner_image3_description: {
      type: DataTypes.STRING,
    },
    banner_image3_description_ar: {
      type: DataTypes.STRING,
    },
    banner_image3_button1: {
      type: DataTypes.STRING,
    },
    banner_image3_button1_url: {
      type: DataTypes.STRING,
    },
    banner_image3_button2: {
      type: DataTypes.STRING,
    },
    banner_image3_button2_url: {
      type: DataTypes.STRING,
    },
    instagram_link: {
      type: DataTypes.STRING,
    },
    facebook_link: {
      type: DataTypes.STRING,
    },
    linkedin_link: {
      type: DataTypes.STRING,
    },
    logo: {
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

export default Homepage;
