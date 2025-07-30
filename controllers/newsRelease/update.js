import NewsRelease from "../../models/newsRelease.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";
const updateNewsRelease = async (req, res) => {
  try {
    const id = req.params.id;

    const test = await NewsRelease.findOne({
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
        subTitle: req.body.subTitle,
        subTitle_ar: req.body.subTitle_ar,
        description: req.body.description,
        description_ar: req.body.description_ar,
        otherNews: req.body.otherNews,
        meta_description: req.body.meta_description,
        meta_title: req.body.meta_title,
        meta_keywords: req.body.meta_keywords,
        image: image,
      };

      const newsRelease = await NewsRelease.update(data, { where: { id: id } });
      return res.json({
        status: true,
        message: "News Release Update Successfully .",
        data: newsRelease,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "News Release  is  Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateNewsRelease;
