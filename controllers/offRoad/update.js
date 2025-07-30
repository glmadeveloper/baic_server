import OffRoad from "../../models/offRoad.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";
const updateOffRoad = async (req, res) => {
  console.log("REQ>BODY", req.body);
  console.log("REQ>FILES", req.files);
  try {
    const id = req.params.id;
    const files = req.files;
    const body = req.body;
    let bannerImage;
    let image1;
    let image2;
    let image3;
    const find = await OffRoad.findOne({
      where: {
        id: id,
      },
    });
    if (find) {
      if (!_.isEmpty(files)) {
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
          if (files[i].fieldname === "image1") {
            image1 = files[i].filename;
            if (
              req.body.image1 &&
              req.body.image1 !== null &&
              req.body.image1 &&
              req.body.image1 !== "null" &&
              req.body.image1 &&
              req.body.image1 !== undefined &&
              req.body.image1 &&
              req.body.image1 !== "undefined" &&
              find.dataValues.image1 !== null &&
              find.dataValues.image1 !== "null" &&
              find.dataValues.image1 !== undefined &&
              find.dataValues.image1 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.image1);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "image2") {
            image2 = files[i].filename;
            if (
              req.body.image2 &&
              req.body.image2 !== null &&
              req.body.image2 &&
              req.body.image2 !== "null" &&
              req.body.image2 &&
              req.body.image2 !== undefined &&
              req.body.image2 &&
              req.body.image2 !== "undefined" &&
              find.dataValues.image2 !== null &&
              find.dataValues.image2 !== "null" &&
              find.dataValues.image2 !== undefined &&
              find.dataValues.image2 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.image2);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "image3") {
            image3 = files[i].filename;
            if (
              req.body.image3 &&
              req.body.image3 !== null &&
              req.body.image3 &&
              req.body.image3 !== "null" &&
              req.body.image3 &&
              req.body.image3 !== undefined &&
              req.body.image3 &&
              req.body.image3 !== "undefined" &&
              find.dataValues.image3 !== null &&
              find.dataValues.image3 !== "null" &&
              find.dataValues.image3 !== undefined &&
              find.dataValues.image3 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.image3);
            }
          }
        }
      } else {
        bannerImage = find.dataValues.bannerImage;
        image1 = find.dataValues.image1;
        image2 = find.dataValues.image2;
        image3 = find.dataValues.image3;
      }

      if (req.body.bannerImage && req.body.bannerImage === "null") {
        bannerImage = find.dataValues.bannerImage;
      }
      if (req.body.image1 && req.body.image1 === "null") {
        image1 = find.dataValues.image1;
      }
      if (req.body.image2 && req.body.image2 === "null") {
        image2 = find.dataValues.image2;
      }
      if (req.body.image3 && req.body.image3 === "null") {
        image3 = find.dataValues.image3;
      }

      const data = {
        id: id,
        bannerImage: bannerImage,
        bannerTitle: req.body.bannerTitle,
        bannerTitle_ar: req.body.bannerTitle_ar,
        bannerDescription: req.body.bannerDescription,
        bannerDescription_ar: req.body.bannerDescription_ar,
        image1: image1,
        image1Title: req.body.image1Title,
        image1Title_ar: req.body.image1Title_ar,
        image1Description: req.body.image1Description,
        image1Description_ar: req.body.image1Description_ar,
        image1MainDescription: req.body.image1MainDescription,
        image1MainDescription_ar: req.body.image1MainDescription_ar,
        image2: image2,
        image2Title: req.body.image2Title,
        image2Title_ar: req.body.image2Title_ar,
        image2Description: req.body.image2Description,
        image2Description_ar: req.body.image2Description_ar,
        image3: image3,
        image3Title: req.body.image3Title,
        image3Title_ar: req.body.image3Title_ar,
        image3Description: req.body.image3Description,
        image3Description_ar: req.body.image3Description_ar,
        meta_description: req.body.meta_description,
        meta_title: req.body.meta_title,
        meta_keywords: req.body.meta_keywords,
      };

      const offRoad = await OffRoad.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: "Off Road service Update Successfully .",
        data: data,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Off Road service is Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateOffRoad;
