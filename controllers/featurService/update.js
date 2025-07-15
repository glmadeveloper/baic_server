import FeatureService from "../../models/featureService.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";
const updateFeatureService = async (req, res) => {
  try {
    const id = req.params.id;

    const test = await FeatureService.findOne({
      where: {
        id: id,
      },
    });

    if (test) {
      let image =
        typeof req.files.image !== "undefined"
          ? req.files.image[0].filename
          : "";
      console.log(" IMAGE", image);
      if (_.isEmpty(image)) {
        image = test.dataValues.image ? test.dataValues.image : "";
      }
      if (!_.isEmpty(image)) {
        console.log("first", imagePath1 + test.dataValues.image);
        image = image ? image : test.dataValues.image;
        if (
          req.body.image &&
          req.body.image !== null &&
          req.body.image &&
          req.body.image !== "null" &&
          req.body.image &&
          req.body.image !== undefined &&
          req.body.image &&
          req.body.image !== "undefined" &&
          test.dataValues.image !== null &&
          test.dataValues.image !== "null" &&
          test.dataValues.image !== undefined &&
          test.dataValues.image !== "undefined"
        ) {
          fs.unlinkSync(imagePath1 + test.dataValues.image);
        }
        console.log("First IAGE", image);
      }
      const data = {
        id: id,
        title: req.body.title,
        title_ar: req.body.title_ar,
        image: image,
      };

      const feature = await FeatureService.update(data, { where: { id: id } });
      return res.json({
        status: true,
        message: "Feature Update Successfully .",
        data: feature,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Feature  is  Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateFeatureService;
