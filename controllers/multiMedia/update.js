import MultiMedia from "../../models/multiMedia.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";
const updateMultiMedia = async (req, res) => {
  try {
    const id = req.params.id;

    const test = await MultiMedia.findOne({
      where: {
        id: id,
      },
    });

    if (test) {
      let media =
        typeof req.files.media !== "undefined"
          ? req.files.media[0].filename
          : "";
      console.log(" IMAGE", media);
      if (_.isEmpty(media)) {
        media = test.dataValues.media ? test.dataValues.media : "";
      }
      if (!_.isEmpty(media)) {
        console.log("first", imagePath1 + test.dataValues.media);
        media = media ? media : test.dataValues.media;
        if (
          req.body.media &&
          req.body.media !== null &&
          req.body.media &&
          req.body.media !== "null" &&
          req.body.media &&
          req.body.media !== undefined &&
          req.body.media &&
          req.body.media !== "undefined" &&
          test.dataValues.media !== null &&
          test.dataValues.media !== "null" &&
          test.dataValues.media !== undefined &&
          test.dataValues.media !== "undefined"
        ) {
          fs.unlinkSync(imagePath1 + test.dataValues.media);
        }

        console.log("First IAGE", media);
      }
      const data = {
        id: id,
        title: req.body.title,
        title_ar: req.body.title_ar,
        typeOfMedia: req.body.typeOfMedia,
        typeOfMedia_ar: req.body.typeOfMedia_ar,
        modelId: req.body.modelId,
        media: media,
      };

      const multiMedia = await MultiMedia.update(data, { where: { id: id } });
      return res.json({
        status: true,
        message: "Multi Media Update Successfully .",
        data: multiMedia,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Multi Media is Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateMultiMedia;
