import CapitalBeauty from "../../models/capitalBeauty.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";
const updateCapitalBeauty = async (req, res) => {
  try {
    const id = req.params.id;
    const files = req.files;
    const body = req.body;
    let bannerImage;
    let image1;
    let gdImage1;
    let gdImage2;
    let gdImage3;
    let gdImage4;
    let gdImage5;
    let image2;
    let image3;
    let image4;
    const find = await CapitalBeauty.findOne({
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
          if (files[i].fieldname === "gdImage1") {
            gdImage1 = files[i].filename;
            if (
              req.body.gdImage1 &&
              req.body.gdImage1 !== null &&
              req.body.gdImage1 &&
              req.body.gdImage1 !== "null" &&
              req.body.gdImage1 &&
              req.body.gdImage1 !== undefined &&
              req.body.gdImage1 &&
              req.body.gdImage1 !== "undefined" &&
              find.dataValues.gdImage1 !== null &&
              find.dataValues.gdImage1 !== "null" &&
              find.dataValues.gdImage1 !== undefined &&
              find.dataValues.gdImage1 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.gdImage1);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "gdImage2") {
            gdImage2 = files[i].filename;
            if (
              req.body.gdImage2 &&
              req.body.gdImage2 !== null &&
              req.body.gdImage2 &&
              req.body.gdImage2 !== "null" &&
              req.body.gdImage2 &&
              req.body.gdImage2 !== undefined &&
              req.body.gdImage2 &&
              req.body.gdImage2 !== "undefined" &&
              find.dataValues.gdImage2 !== null &&
              find.dataValues.gdImage2 !== "null" &&
              find.dataValues.gdImage2 !== undefined &&
              find.dataValues.gdImage2 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.gdImage2);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "gdImage3") {
            gdImage3 = files[i].filename;
            if (
              req.body.gdImage3 &&
              req.body.gdImage3 !== null &&
              req.body.gdImage3 &&
              req.body.gdImage3 !== "null" &&
              req.body.gdImage3 &&
              req.body.gdImage3 !== undefined &&
              req.body.gdImage3 &&
              req.body.gdImage3 !== "undefined" &&
              find.dataValues.gdImage3 !== null &&
              find.dataValues.gdImage3 !== "null" &&
              find.dataValues.gdImage3 !== undefined &&
              find.dataValues.gdImage3 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.gdImage3);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "gdImage4") {
            gdImage4 = files[i].filename;
            if (
              req.body.gdImage4 &&
              req.body.gdImage4 !== null &&
              req.body.gdImage4 &&
              req.body.gdImage4 !== "null" &&
              req.body.gdImage4 &&
              req.body.gdImage4 !== undefined &&
              req.body.gdImage4 &&
              req.body.gdImage4 !== "undefined" &&
              find.dataValues.gdImage4 !== null &&
              find.dataValues.gdImage4 !== "null" &&
              find.dataValues.gdImage4 !== undefined &&
              find.dataValues.gdImage4 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.gdImage4);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "gdImage5") {
            gdImage5 = files[i].filename;
            if (
              req.body.gdImage5 &&
              req.body.gdImage5 !== null &&
              req.body.gdImage5 &&
              req.body.gdImage5 !== "null" &&
              req.body.gdImage5 &&
              req.body.gdImage5 !== undefined &&
              req.body.gdImage5 &&
              req.body.gdImage5 !== "undefined" &&
              find.dataValues.gdImage5 !== null &&
              find.dataValues.gdImage5 !== "null" &&
              find.dataValues.gdImage5 !== undefined &&
              find.dataValues.gdImage5 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.gdImage5);
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
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "image4") {
            image4 = files[i].filename;
            if (
              req.body.image4 &&
              req.body.image4 !== null &&
              req.body.image4 &&
              req.body.image4 !== "null" &&
              req.body.image4 &&
              req.body.image4 !== undefined &&
              req.body.image4 &&
              req.body.image4 !== "undefined" &&
              find.dataValues.image4 !== null &&
              find.dataValues.image4 !== "null" &&
              find.dataValues.image4 !== undefined &&
              find.dataValues.image4 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.image4);
            }
          }
        }
      } else {
        bannerImage = find.dataValues.bannerImage;
        image1 = find.dataValues.image1;
        gdImage1 = find.dataValues.gdImage1;
        gdImage2 = find.dataValues.gdImage2;
        gdImage3 = find.dataValues.gdImage3;
        gdImage4 = find.dataValues.gdImage4;
        gdImage5 = find.dataValues.gdImage5;
        image2 = find.dataValues.image2;
        image3 = find.dataValues.image3;
        image4 = find.dataValues.image4;
      }
      if (req.body.bannerImage && req.body.bannerImage === "null") {
        bannerImage = find.dataValues.bannerimage;
      }
      if (req.body.image1 && req.body.image1 === "null") {
        image1 = find.dataValues.image1;
      }
      if (req.body.gdImage1 && req.body.gdImage1 === "null") {
        gdImage1 = find.dataValues.gdImage1;
      }
      if (req.body.gdImage2 && req.body.gdImage2 === "null") {
        gdImage2 = find.dataValues.gdImage2;
      }
      if (req.body.gdImage3 && req.body.gdImage3 === "null") {
        gdImage3 = find.dataValues.gdImage3;
      }
      if (req.body.gdImage4 && req.body.gdImage4 === "null") {
        gdImage4 = find.dataValues.gdImage4;
      }
      if (req.body.gdImage5 && req.body.gdImage5 === "null") {
        gdImage5 = find.dataValues.gdImage5;
      }
      if (req.body.image2 && req.body.image2 === "null") {
        image2 = find.dataValues.image2;
      }
      if (req.body.image3 && req.body.image3 === "null") {
        image3 = find.dataValues.image3;
      }
      if (req.body.image4 && req.body.image4 === "null") {
        image4 = find.dataValues.image4;
      }
      const data = {
        id: id,
        bannerImage: bannerImage,
        bannerTitle: req.body.bannerTitle,
        bannerTitle_ar: req.body.bannerTitle_ar,
        bannerSubTitle: req.body.bannerSubTitle,
        bannerSubTitle_ar: req.body.bannerSubTitle_ar,
        image1: image1,
        image1Description: req.body.image1Description,
        image1Description_ar: req.body.image1Description_ar,
        gdImage1: gdImage1,
        gdImage2: gdImage2,
        gdImage3: gdImage3,
        gdImage4: gdImage4,
        gdImage5: gdImage5,
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
        image4: image4,
      };

      const capitalBeauty = await CapitalBeauty.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: "Capital Beauty Update Successfully .",
        data: data,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Capital Beauty is Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateCapitalBeauty;
