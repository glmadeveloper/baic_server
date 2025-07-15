import BaicInX from "../../models/baicInX.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";
const updateBaicInX = async (req, res) => {
  try {
    const id = req.params.id;
    const files = req.files;
    const body = req.body;
    let bannerImage;
    let image1;
    let image2;
    let image3;
    let image4;
    let image5;
    let image6;
    let image7;
    let image8;
    let image9;
    const find = await BaicInX.findOne({
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
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "image5") {
            image5 = files[i].filename;
            if (
              req.body.image5 &&
              req.body.image5 !== null &&
              req.body.image5 &&
              req.body.image5 !== "null" &&
              req.body.image5 &&
              req.body.image5 !== undefined &&
              req.body.image5 &&
              req.body.image5 !== "undefined" &&
              find.dataValues.image5 !== null &&
              find.dataValues.image5 !== "null" &&
              find.dataValues.image5 !== undefined &&
              find.dataValues.image5 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.image5);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "image6") {
            image6 = files[i].filename;
            if (
              req.body.image6 &&
              req.body.image6 !== null &&
              req.body.image6 &&
              req.body.image6 !== "null" &&
              req.body.image6 &&
              req.body.image6 !== undefined &&
              req.body.image6 &&
              req.body.image6 !== "undefined" &&
              find.dataValues.image6 !== null &&
              find.dataValues.image6 !== "null" &&
              find.dataValues.image6 !== undefined &&
              find.dataValues.image6 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.image6);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "image7") {
            image7 = files[i].filename;
            if (
              req.body.image7 &&
              req.body.image7 !== null &&
              req.body.image7 &&
              req.body.image7 !== "null" &&
              req.body.image7 &&
              req.body.image7 !== undefined &&
              req.body.image7 &&
              req.body.image7 !== "undefined" &&
              find.dataValues.image7 !== null &&
              find.dataValues.image7 !== "null" &&
              find.dataValues.image7 !== undefined &&
              find.dataValues.image7 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.image7);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "image8") {
            image8 = files[i].filename;
            if (
              req.body.image8 &&
              req.body.image8 !== null &&
              req.body.image8 &&
              req.body.image8 !== "null" &&
              req.body.image8 &&
              req.body.image8 !== undefined &&
              req.body.image8 &&
              req.body.image8 !== "undefined" &&
              find.dataValues.image8 !== null &&
              find.dataValues.image8 !== "null" &&
              find.dataValues.image8 !== undefined &&
              find.dataValues.image8 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.image8);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "image9") {
            image9 = files[i].filename;
            if (
              req.body.image9 &&
              req.body.image9 !== null &&
              req.body.image9 &&
              req.body.image9 !== "null" &&
              req.body.image9 &&
              req.body.image9 !== undefined &&
              req.body.image9 &&
              req.body.image9 !== "undefined" &&
              find.dataValues.image9 !== null &&
              find.dataValues.image9 !== "null" &&
              find.dataValues.image9 !== undefined &&
              find.dataValues.image9 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.image9);
            }
          }
        }
      } else {
        bannerImage = find.dataValues.bannerImage;
        image1 = find.dataValues.image1;
        image2 = find.dataValues.image2;
        image3 = find.dataValues.image3;
        image4 = find.dataValues.image4;
        image5 = find.dataValues.image5;
        image6 = find.dataValues.image6;
        image7 = find.dataValues.image7;
        image8 = find.dataValues.image8;
        image9 = find.dataValues.image9;
      }
      if (req.body.bannerImage && req.body.bannerImage === "null") {
        bannerImage = find.dataValues.bannerimage;
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
      if (req.body.image4 && req.body.image4 === "null") {
        image4 = find.dataValues.image4;
      }
      if (req.body.image5 && req.body.image5 === "null") {
        image5 = find.dataValues.image5;
      }
      if (req.body.image6 && req.body.image6 === "null") {
        image6 = find.dataValues.image6;
      }
      if (req.body.image7 && req.body.image7 === "null") {
        image7 = find.dataValues.image7;
      }
      if (req.body.image8 && req.body.image8 === "null") {
        image8 = find.dataValues.image8;
      }
      if (req.body.image9 && req.body.image9 === "null") {
        image9 = find.dataValues.image9;
      }
      const data = {
        id: id,
        bannerImage: bannerImage,
        bannerTitle: req.body.bannerTitle,
        bannerTitle_ar: req.body.bannerTitle_ar,
        image1: image1,
        image1Title: req.body.image1Title,
        image1Title_ar: req.body.image1Title_ar,
        image2: image2,
        image2Title: req.body.image2Title,
        image2Title_ar: req.body.image2Title_ar,
        image3: image3,
        image3Title: req.body.image3Title,
        image3Title_ar: req.body.image3Title_ar,
        image4: image4,
        image4Title: req.body.image4Title,
        image4Title_ar: req.body.image4Title_ar,
        image5: image5,
        image5Title: req.body.image5Title,
        image5Title_ar: req.body.image5Title_ar,
        image6: image6,
        image6Title: req.body.image6Title,
        image6Title_ar: req.body.image6Title_ar,
        image7: image7,
        image7Title: req.body.image7Title,
        image7Title_ar: req.body.image7Title_ar,
        image8: image8,
        image8Title: req.body.image8Title,
        image8Title_ar: req.body.image8Title_ar,
        image9: image9,
        image9Title: req.body.image9Title,
        image9Title_ar: req.body.image9Title_ar,
      };

      const baicInX = await BaicInX.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: "Baic In X Update Successfully .",
        data: data,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Baic In X is Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateBaicInX;
