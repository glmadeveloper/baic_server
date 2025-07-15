import AfterSalesService from "../../models/afterSalesService.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";
const updateAfterSalesService = async (req, res) => {
  try {
    const id = req.params.id;
    const files = req.files;
    const body = req.body;
    let bannerImage;
    let worldImage;
    let featureImage;
    const find = await AfterSalesService.findOne({
      where: {
        id: id,
      },
    });
    if (find) {
      if (!_.isEmpty(files)) {
        console.log("first");
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "bannerImage") {
            bannerImage = files[i].filename;
            if (
              req.body.bannerImage &&
              req.body.bannerImage !== null &&
              req.body.bannerImage &&
              req.body.bannerImage !== "null" &&
              req.body.bannerImage &&
              req.body.bannerImage !== undefined &&
              req.body.bannerImage &&
              req.body.bannerImage !== "undefined" &&
              find.dataValues.bannerImage !== null &&
              find.dataValues.bannerImage !== "null" &&
              find.dataValues.bannerImage !== undefined &&
              find.dataValues.bannerImage !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.bannerImage);
            }
          }
        }

        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "worldImage") {
            worldImage = files[i].filename;
            if (
              req.body.worldimage &&
              req.body.worldimage !== null &&
              req.body.worldimage &&
              req.body.worldimage !== "null" &&
              req.body.worldimage &&
              req.body.worldimage !== undefined &&
              req.body.worldimage &&
              req.body.worldimage !== "undefined" &&
              find.dataValues.worldimage !== null &&
              find.dataValues.worldimage !== "null" &&
              find.dataValues.worldimage !== undefined &&
              find.dataValues.worldimage !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.worldimage);
            }
          }
        }

        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "featureImage") {
            featureImage = files[i].filename;
            if (
              req.body.featureimage &&
              req.body.featureimage !== null &&
              req.body.featureimage &&
              req.body.featureimage !== "null" &&
              req.body.featureimage &&
              req.body.featureimage !== undefined &&
              req.body.featureimage &&
              req.body.featureimage !== "undefined" &&
              find.dataValues.featureimage !== null &&
              find.dataValues.featureimage !== "null" &&
              find.dataValues.featureimage !== undefined &&
              find.dataValues.featureimage !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.featureimage);
            }
          }
        }
      } else {
        bannerImage = find.dataValues.bannerimage;
        worldImage = find.dataValues.worldimage;
        featureImage = find.dataValues.featureimage;
      }

      if (req.body.bannerImage && req.body.bannerImage === "null") {
        bannerImage = find.dataValues.bannerimage;
      }
      if (req.body.worldImage && req.body.worldImage === "null") {
        worldImage = find.dataValues.worldimage;
      }
      if (req.body.featureImage && req.body.featureImage === "null") {
        featureImage = find.dataValues.featureimage;
      }

      let data = {
        id: id,
        title: req.body.title,
        title_ar: req.body.title_ar,
        subTitle: req.body.subTitle,
        subTitle_ar: req.body.subTitle_ar,
        bannerImage: bannerImage,

        worldTitle: req.body.worldTitle,
        worldTitle_ar: req.body.worldTitle_ar,
        worldSubTitle: req.body.worldSubTitle,
        worldSubTitle_ar: req.body.worldSubTitle_ar,
        worldimage: worldImage,
        featureTitle: req.body.featureTitle,
        featureTitle_ar: req.body.featureTitle_ar,
        featureSubTitle: req.body.featureSubTitle,
        featureSubTitle_ar: req.body.featureSubTitle_ar,
        featureimage: featureImage,
      };

      const afterSalesService = await AfterSalesService.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: "After Sales service Update Successfully .",
        data: data,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "After Sales service  is  Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateAfterSalesService;
