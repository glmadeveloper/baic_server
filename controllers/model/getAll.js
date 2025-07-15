import Model from "../../models/model.js";
import ModelCategory from "../../models/modelCategory.js";

const getAllModel = async (req, res) => {
  try {
    const models = await Model.findAll({
      include: [
        {
          model: ModelCategory,
        },
      ],
    });

    // Base URL for images
    // const baseUrl = "http://localhost:30006";

    // Iterate over each model to update the image paths based on designType
    models.forEach((model) => {
      // If the designType is normal, iterate over normalSections and update image paths
      if (model.designType === "normal" && model.normalSections) {
        if (typeof model.normalSections === "string") {
          model.normalSections = JSON.parse(model.normalSections); // Convert JSON string to an array
        }
        model.normalSections.forEach((section) => {
          if (section.image_en) {
            section.image_en = `${section.image_en}`;
          }
          if (section.image_ar) {
            section.image_ar = `${section.image_ar}`;
          }
        });
      }

      // If the designType is advanced, iterate over advancedSections and update image paths
      if (model.designType === "advanced" && model.advancedSections) {
        if (typeof model.advancedSections === "string") {
          model.advancedSections = JSON.parse(model.advancedSections); // Convert JSON string to an array
        }
        model.advancedSections.forEach((section) => {
          if (section.image_en) {
            section.image_en = `${section.image_en}`;
          }
          if (section.image_ar) {
            section.image_ar = `${section.image_ar}`;
          }
        });
      }
    });

    // Return the modified model data with updated image URLs
    if (models) {
      return res.json({
        status: true,
        message: "Model List Successfully Located.",
        data: models,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Models are not listed.",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllModel;
