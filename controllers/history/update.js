import History from "../../models/history.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";
const updateHistory = async (req, res) => {
  try {
    const id = req.params.id;

    const test = await History.findOne({
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
        year: req.body.year,
        description: req.body.description,
        description_ar: req.body.description_ar,
        image: image,
      };

      const history = await History.update(data, { where: { id: id } });
      return res.json({
        status: true,
        message: "History Update Successfully .",
        data: history,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "History  is  Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateHistory;
