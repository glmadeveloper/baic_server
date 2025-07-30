import ConceptCar from "../../models/conceptCar.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";
const updateConceptCar = async (req, res) => {
  try {
    const id = req.params.id;
    const files = req.files;
    const body = req.body;
    let bannerImage;
    let section_1_image;
    let section_2_image;
    let section_3_image;
    let section_4_image1;
    let section_4_image2;
    let section_4_image3;
    let section_5_image;
    let section_6_image;
    let section_7_image;
    let section_8_image;
    let section_9_image;
    let section_10_image1;
    let section_10_image2;
    let section_10_image3;
    let section_10_image4;
    const find = await ConceptCar.findOne({
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
          if (files[i].fieldname === "section_1_image") {
            section_1_image = files[i].filename;
            if (
              req.body.section_1_image &&
              req.body.section_1_image !== null &&
              req.body.section_1_image &&
              req.body.section_1_image !== "null" &&
              req.body.section_1_image &&
              req.body.section_1_image !== undefined &&
              req.body.section_1_image &&
              req.body.section_1_image !== "undefined" &&
              find.dataValues.section_1_image !== null &&
              find.dataValues.section_1_image !== "null" &&
              find.dataValues.section_1_image !== undefined &&
              find.dataValues.section_1_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_1_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_2_image") {
            section_2_image = files[i].filename;
            if (
              req.body.section_2_image &&
              req.body.section_2_image !== null &&
              req.body.section_2_image &&
              req.body.section_2_image !== "null" &&
              req.body.section_2_image &&
              req.body.section_2_image !== undefined &&
              req.body.section_2_image &&
              req.body.section_2_image !== "undefined" &&
              find.dataValues.section_2_image !== null &&
              find.dataValues.section_2_image !== "null" &&
              find.dataValues.section_2_image !== undefined &&
              find.dataValues.section_2_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_2_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_3_image") {
            section_3_image = files[i].filename;
            if (
              req.body.section_3_image &&
              req.body.section_3_image !== null &&
              req.body.section_3_image &&
              req.body.section_3_image !== "null" &&
              req.body.section_3_image &&
              req.body.section_3_image !== undefined &&
              req.body.section_3_image &&
              req.body.section_3_image !== "undefined" &&
              find.dataValues.section_3_image !== null &&
              find.dataValues.section_3_image !== "null" &&
              find.dataValues.section_3_image !== undefined &&
              find.dataValues.section_3_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_3_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_4_image1") {
            section_4_image1 = files[i].filename;
            if (
              req.body.section_4_image1 &&
              req.body.section_4_image1 !== null &&
              req.body.section_4_image1 &&
              req.body.section_4_image1 !== "null" &&
              req.body.section_4_image1 &&
              req.body.section_4_image1 !== undefined &&
              req.body.section_4_image1 &&
              req.body.section_4_image1 !== "undefined" &&
              find.dataValues.section_4_image1 !== null &&
              find.dataValues.section_4_image1 !== "null" &&
              find.dataValues.section_4_image1 !== undefined &&
              find.dataValues.section_4_image1 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_4_image1);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_4_image2") {
            section_4_image2 = files[i].filename;
            if (
              req.body.section_4_image2 &&
              req.body.section_4_image2 !== null &&
              req.body.section_4_image2 &&
              req.body.section_4_image2 !== "null" &&
              req.body.section_4_image2 &&
              req.body.section_4_image2 !== undefined &&
              req.body.section_4_image2 &&
              req.body.section_4_image2 !== "undefined" &&
              find.dataValues.section_4_image2 !== null &&
              find.dataValues.section_4_image2 !== "null" &&
              find.dataValues.section_4_image2 !== undefined &&
              find.dataValues.section_4_image2 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_4_image2);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_4_image3") {
            section_4_image3 = files[i].filename;
            if (
              req.body.section_4_image3 &&
              req.body.section_4_image3 !== null &&
              req.body.section_4_image3 &&
              req.body.section_4_image3 !== "null" &&
              req.body.section_4_image3 &&
              req.body.section_4_image3 !== undefined &&
              req.body.section_4_image3 &&
              req.body.section_4_image3 !== "undefined" &&
              find.dataValues.section_4_image3 !== null &&
              find.dataValues.section_4_image3 !== "null" &&
              find.dataValues.section_4_image3 !== undefined &&
              find.dataValues.section_4_image3 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_4_image3);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_5_image") {
            section_5_image = files[i].filename;
            if (
              req.body.section_5_image &&
              req.body.section_5_image !== null &&
              req.body.section_5_image &&
              req.body.section_5_image !== "null" &&
              req.body.section_5_image &&
              req.body.section_5_image !== undefined &&
              req.body.section_5_image &&
              req.body.section_5_image !== "undefined" &&
              find.dataValues.section_5_image !== null &&
              find.dataValues.section_5_image !== "null" &&
              find.dataValues.section_5_image !== undefined &&
              find.dataValues.section_5_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_5_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_6_image") {
            section_6_image = files[i].filename;
            if (
              req.body.section_6_image &&
              req.body.section_6_image !== null &&
              req.body.section_6_image &&
              req.body.section_6_image !== "null" &&
              req.body.section_6_image &&
              req.body.section_6_image !== undefined &&
              req.body.section_6_image &&
              req.body.section_6_image !== "undefined" &&
              find.dataValues.section_6_image !== null &&
              find.dataValues.section_6_image !== "null" &&
              find.dataValues.section_6_image !== undefined &&
              find.dataValues.section_6_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_6_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_7_image") {
            section_7_image = files[i].filename;
            if (
              req.body.section_7_image &&
              req.body.section_7_image !== null &&
              req.body.section_7_image &&
              req.body.section_7_image !== "null" &&
              req.body.section_7_image &&
              req.body.section_7_image !== undefined &&
              req.body.section_7_image &&
              req.body.section_7_image !== "undefined" &&
              find.dataValues.section_7_image !== null &&
              find.dataValues.section_7_image !== "null" &&
              find.dataValues.section_7_image !== undefined &&
              find.dataValues.section_7_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_7_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_8_image") {
            section_8_image = files[i].filename;
            if (
              req.body.section_8_image &&
              req.body.section_8_image !== null &&
              req.body.section_8_image &&
              req.body.section_8_image !== "null" &&
              req.body.section_8_image &&
              req.body.section_8_image !== undefined &&
              req.body.section_8_image &&
              req.body.section_8_image !== "undefined" &&
              find.dataValues.section_8_image !== null &&
              find.dataValues.section_8_image !== "null" &&
              find.dataValues.section_8_image !== undefined &&
              find.dataValues.section_8_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_8_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_9_image") {
            section_9_image = files[i].filename;
            if (
              req.body.section_9_image &&
              req.body.section_9_image !== null &&
              req.body.section_9_image &&
              req.body.section_9_image !== "null" &&
              req.body.section_9_image &&
              req.body.section_9_image !== undefined &&
              req.body.section_9_image &&
              req.body.section_9_image !== "undefined" &&
              find.dataValues.section_9_image !== null &&
              find.dataValues.section_9_image !== "null" &&
              find.dataValues.section_9_image !== undefined &&
              find.dataValues.section_9_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_9_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_10_image1") {
            section_10_image1 = files[i].filename;
            if (
              req.body.section_10_image1 &&
              req.body.section_10_image1 !== null &&
              req.body.section_10_image1 &&
              req.body.section_10_image1 !== "null" &&
              req.body.section_10_image1 &&
              req.body.section_10_image1 !== undefined &&
              req.body.section_10_image1 &&
              req.body.section_10_image1 !== "undefined" &&
              find.dataValues.section_10_image1 !== null &&
              find.dataValues.section_10_image1 !== "null" &&
              find.dataValues.section_10_image1 !== undefined &&
              find.dataValues.section_10_image1 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_10_image1);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_10_image2") {
            section_10_image2 = files[i].filename;
            if (
              req.body.section_10_image2 &&
              req.body.section_10_image2 !== null &&
              req.body.section_10_image2 &&
              req.body.section_10_image2 !== "null" &&
              req.body.section_10_image2 &&
              req.body.section_10_image2 !== undefined &&
              req.body.section_10_image2 &&
              req.body.section_10_image2 !== "undefined" &&
              find.dataValues.section_10_image2 !== null &&
              find.dataValues.section_10_image2 !== "null" &&
              find.dataValues.section_10_image2 !== undefined &&
              find.dataValues.section_10_image2 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_10_image2);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_10_image3") {
            section_10_image3 = files[i].filename;
            if (
              req.body.section_10_image3 &&
              req.body.section_10_image3 !== null &&
              req.body.section_10_image3 &&
              req.body.section_10_image3 !== "null" &&
              req.body.section_10_image3 &&
              req.body.section_10_image3 !== undefined &&
              req.body.section_10_image3 &&
              req.body.section_10_image3 !== "undefined" &&
              find.dataValues.section_10_image3 !== null &&
              find.dataValues.section_10_image3 !== "null" &&
              find.dataValues.section_10_image3 !== undefined &&
              find.dataValues.section_10_image3 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_10_image3);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section_10_image4") {
            section_10_image4 = files[i].filename;
            if (
              req.body.section_10_image4 &&
              req.body.section_10_image4 !== null &&
              req.body.section_10_image4 &&
              req.body.section_10_image4 !== "null" &&
              req.body.section_10_image4 &&
              req.body.section_10_image4 !== undefined &&
              req.body.section_10_image4 &&
              req.body.section_10_image4 !== "undefined" &&
              find.dataValues.section_10_image4 !== null &&
              find.dataValues.section_10_image4 !== "null" &&
              find.dataValues.section_10_image4 !== undefined &&
              find.dataValues.section_10_image4 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section_10_image4);
            }
          }
        }
      } else {
        bannerImage = find.dataValues.bannerimage;
        section_1_image = find.dataValues.section_1_image;
        section_2_image = find.dataValues.section_2_image;
        section_3_image = find.dataValues.section_3_image;
        section_4_image1 = find.dataValues.section_4_image1;
        section_4_image2 = find.dataValues.section_4_image2;
        section_4_image3 = find.dataValues.section_4_image3;
        section_5_image = find.dataValues.section_5_image;
        section_6_image = find.dataValues.section_6_image;
        section_7_image = find.dataValues.section_7_image;
        section_8_image = find.dataValues.section_8_image;
        section_9_image = find.dataValues.section_9_image;
        section_10_image1 = find.dataValues.section_10_image1;
        section_10_image2 = find.dataValues.section_10_image2;
        section_10_image3 = find.dataValues.section_10_image3;
        section_10_image4 = find.dataValues.section_10_image4;
      }

      if (req.body.bannerImage && req.body.bannerImage === "null") {
        bannerImage = find.dataValues.bannerimage;
      }
      if (req.body.section_1_image && req.body.section_1_image === "null") {
        section_1_image = find.dataValues.section_1_image;
      }
      if (req.body.section_2_image && req.body.section_2_image === "null") {
        section_2_image = find.dataValues.section_2_image;
      }
      if (req.body.section_3_image && req.body.section_3_image === "null") {
        section_3_image = find.dataValues.section_3_image;
      }
      if (req.body.section_4_image1 && req.body.section_4_image1 === "null") {
        section_4_image1 = find.dataValues.section_4_image1;
      }
      if (req.body.section_4_image2 && req.body.section_4_image2 === "null") {
        section_4_image2 = find.dataValues.section_4_image2;
      }
      if (req.body.section_4_image3 && req.body.section_4_image3 === "null") {
        section_4_image3 = find.dataValues.section_4_image3;
      }
      if (req.body.section_5_image && req.body.section_5_image === "null") {
        section_5_image = find.dataValues.section_5_image;
      }
      if (req.body.section_6_image && req.body.section_6_image === "null") {
        section_6_image = find.dataValues.section_6_image;
      }
      if (req.body.section_7_image && req.body.section_7_image === "null") {
        section_7_image = find.dataValues.section_7_image;
      }
      if (req.body.section_8_image && req.body.section_8_image === "null") {
        section_8_image = find.dataValues.section_8_image;
      }
      if (req.body.section_9_image && req.body.section_9_image === "null") {
        section_9_image = find.dataValues.section_9_image;
      }
      if (req.body.section_10_image1 && req.body.section_10_image1 === "null") {
        section_10_image1 = find.dataValues.section_10_image1;
      }
      if (req.body.section_10_image2 && req.body.section_10_image2 === "null") {
        section_10_image2 = find.dataValues.section_10_image2;
      }
      if (req.body.section_10_image3 && req.body.section_10_image3 === "null") {
        section_10_image3 = find.dataValues.section_10_image3;
      }
      if (req.body.section_10_image4 && req.body.section_10_image4 === "null") {
        section_10_image4 = find.dataValues.section_10_image4;
      }

      let data = {
        id: id,
        bannerImage: bannerImage,
        section_1_image: section_1_image,
        section_1_title: req.body.section_1_title,
        section_1_title_ar: req.body.section_1_title_ar,
        section_1_description: req.body.section_1_description,
        section_1_description_ar: req.body.section_1_description_ar,
        section_2_image: section_2_image,
        section_2_description: req.body.section_2_description,
        section_2_description_ar: req.body.section_2_description_ar,
        section_3_image: section_3_image,
        section_3_title: req.body.section_3_title,
        section_3_title_ar: req.body.section_3_title_ar,
        section_4_title1: req.body.section_4_title1,
        section_4_title1_ar: req.body.section_4_title1_ar,
        section_4_description1: req.body.section_4_description1,
        section_4_description1_ar: req.body.section_4_description1_ar,
        section_4_image1: section_4_image1,

        section_4_title2: req.body.section_4_title2,
        section_4_title2_ar: req.body.section_4_title2_ar,
        section_4_description2: req.body.section_4_description2,
        section_4_description2_ar: req.body.section_4_description2_ar,
        section_4_image2: section_4_image2,

        section_4_title3: req.body.section_4_title3,
        section_4_title3_ar: req.body.section_4_title3_ar,
        section_4_description3: req.body.section_4_description3,
        section_4_description3_ar: req.body.section_4_description3_ar,
        section_4_image3: section_4_image3,

        section_4_main_description: req.body.section_4_main_description,
        section_4_main_description_ar: req.body.section_4_main_description_ar,
        section_5_image: section_5_image,
        section_5_description: req.body.section_5_description,
        section_5_description_ar: req.body.section_5_description_ar,

        section_6_image: section_6_image,
        section_6_description: req.body.section_6_description,
        section_6_description_ar: req.body.section_6_description_ar,
        section_7_image: section_7_image,
        section_7_title: req.body.section_7_title,
        section_7_title_ar: req.body.section_7_title_ar,
        section_7_description: req.body.section_7_description,
        section_7_description_ar: req.body.section_7_description_ar,
        section_8_image: section_8_image,
        section_8_description: req.body.section_8_description,
        section_8_description_ar: req.body.section_8_description_ar,
        section_9_image: section_9_image,
        section_9_title: req.body.section_9_title,
        section_9_title_ar: req.body.section_9_title_ar,

        section_10_image1: section_10_image1,
        section_10_title1: req.body.section_10_title1,
        section_10_title1_ar: req.body.section_10_title1_ar,

        section_10_image2: section_10_image2,
        section_10_title2: req.body.section_10_title2,
        section_10_title2_ar: req.body.section_10_title2_ar,

        section_10_image3: section_10_image3,
        section_10_title3: req.body.section_10_title3,
        section_10_title3_ar: req.body.section_10_title3_ar,

        section_10_image4: section_10_image4,
        section_10_title4: req.body.section_10_title4,
        section_10_title4_ar: req.body.section_10_title4_ar,
        meta_description: req.body.meta_description,
        meta_title: req.body.meta_title,
        meta_keywords: req.body.meta_keywords,
      };

      const conceptCar = await ConceptCar.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: "Concept Car Update Successfully .",
        data: data,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Concept Car  is  Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateConceptCar;
