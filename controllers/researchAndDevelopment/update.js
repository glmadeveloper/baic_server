import ResearchAndDevelopment from "../../models/researchAndDevelopment.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";
const updateResearch = async (req, res) => {
  try {
    const id = req.params.id;
    const files = req.files;
    const body = req.body;
    let banner_image;
    let section2_image;
    let section3_image;
    let section4_right_image;
    let section4_left_image;
    let section5_image;
    let section7_image;
    let section8_right_image;
    let section8_left_image;
    let section8_left_image1;
    let section9_image;
    let section10_image;
    let section11_image;
    let section12_image;
    let section13_left_image;
    let section14_image;

    const find = await ResearchAndDevelopment.findOne({
      where: {
        id: id,
      },
    });
    if (find) {
      if (!_.isEmpty(files)) {
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "banner_image") {
            banner_image = files[i].filename;
            if (
              req.body.banner_image &&
              req.body.banner_image !== null &&
              req.body.banner_image &&
              req.body.banner_image !== "null" &&
              req.body.banner_image &&
              req.body.banner_image !== undefined &&
              req.body.banner_image &&
              req.body.banner_image !== "undefined" &&
              find.dataValues.banner_image !== null &&
              find.dataValues.banner_image !== "null" &&
              find.dataValues.banner_image !== undefined &&
              find.dataValues.banner_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.banner_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section2_image") {
            section2_image = files[i].filename;
            if (
              req.body.section2_image &&
              req.body.section2_image !== null &&
              req.body.section2_image &&
              req.body.section2_image !== "null" &&
              req.body.section2_image &&
              req.body.section2_image !== undefined &&
              req.body.section2_image &&
              req.body.section2_image !== "undefined" &&
              find.dataValues.section2_image !== null &&
              find.dataValues.section2_image !== "null" &&
              find.dataValues.section2_image !== undefined &&
              find.dataValues.section2_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section2_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section3_image") {
            section3_image = files[i].filename;
            if (
              req.body.section3_image &&
              req.body.section3_image !== null &&
              req.body.section3_image &&
              req.body.section3_image !== "null" &&
              req.body.section3_image &&
              req.body.section3_image !== undefined &&
              req.body.section3_image &&
              req.body.section3_image !== "undefined" &&
              find.dataValues.section3_image !== null &&
              find.dataValues.section3_image !== "null" &&
              find.dataValues.section3_image !== undefined &&
              find.dataValues.section3_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section3_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section4_right_image") {
            section4_right_image = files[i].filename;
            if (
              req.body.section4_right_image &&
              req.body.section4_right_image !== null &&
              req.body.section4_right_image &&
              req.body.section4_right_image !== "null" &&
              req.body.section4_right_image &&
              req.body.section4_right_image !== undefined &&
              req.body.section4_right_image &&
              req.body.section4_right_image !== "undefined" &&
              find.dataValues.section4_right_image !== null &&
              find.dataValues.section4_right_image !== "null" &&
              find.dataValues.section4_right_image !== undefined &&
              find.dataValues.section4_right_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section4_right_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section4_left_image") {
            section4_left_image = files[i].filename;
            if (
              req.body.section4_left_image &&
              req.body.section4_left_image !== null &&
              req.body.section4_left_image &&
              req.body.section4_left_image !== "null" &&
              req.body.section4_left_image &&
              req.body.section4_left_image !== undefined &&
              req.body.section4_left_image &&
              req.body.section4_left_image !== "undefined" &&
              find.dataValues.section4_left_image !== null &&
              find.dataValues.section4_left_image !== "null" &&
              find.dataValues.section4_left_image !== undefined &&
              find.dataValues.section4_left_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section4_left_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section5_image") {
            section5_image = files[i].filename;
            if (
              req.body.section5_image &&
              req.body.section5_image !== null &&
              req.body.section5_image &&
              req.body.section5_image !== "null" &&
              req.body.section5_image &&
              req.body.section5_image !== undefined &&
              req.body.section5_image &&
              req.body.section5_image !== "undefined" &&
              find.dataValues.section5_image !== null &&
              find.dataValues.section5_image !== "null" &&
              find.dataValues.section5_image !== undefined &&
              find.dataValues.section5_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section5_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section7_image") {
            section7_image = files[i].filename;
            if (
              req.body.section7_image &&
              req.body.section7_image !== null &&
              req.body.section7_image &&
              req.body.section7_image !== "null" &&
              req.body.section7_image &&
              req.body.section7_image !== undefined &&
              req.body.section7_image &&
              req.body.section7_image !== "undefined" &&
              find.dataValues.section7_image !== null &&
              find.dataValues.section7_image !== "null" &&
              find.dataValues.section7_image !== undefined &&
              find.dataValues.section7_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section7_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section8_right_image") {
            section8_right_image = files[i].filename;
            if (
              req.body.section8_right_image &&
              req.body.section8_right_image !== null &&
              req.body.section8_right_image &&
              req.body.section8_right_image !== "null" &&
              req.body.section8_right_image &&
              req.body.section8_right_image !== undefined &&
              req.body.section8_right_image &&
              req.body.section8_right_image !== "undefined" &&
              find.dataValues.section8_right_image !== null &&
              find.dataValues.section8_right_image !== "null" &&
              find.dataValues.section8_right_image !== undefined &&
              find.dataValues.section8_right_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section8_right_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section8_left_image") {
            section8_left_image = files[i].filename;
            if (
              req.body.section8_left_image &&
              req.body.section8_left_image !== null &&
              req.body.section8_left_image &&
              req.body.section8_left_image !== "null" &&
              req.body.section8_left_image &&
              req.body.section8_left_image !== undefined &&
              req.body.section8_left_image &&
              req.body.section8_left_image !== "undefined" &&
              find.dataValues.section8_left_image !== null &&
              find.dataValues.section8_left_image !== "null" &&
              find.dataValues.section8_left_image !== undefined &&
              find.dataValues.section8_left_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section8_left_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section8_left_image1") {
            section8_left_image1 = files[i].filename;
            if (
              req.body.section8_left_image1 &&
              req.body.section8_left_image1 !== null &&
              req.body.section8_left_image1 &&
              req.body.section8_left_image1 !== "null" &&
              req.body.section8_left_image1 &&
              req.body.section8_left_image1 !== undefined &&
              req.body.section8_left_image1 &&
              req.body.section8_left_image1 !== "undefined" &&
              find.dataValues.section8_left_image1 !== null &&
              find.dataValues.section8_left_image1 !== "null" &&
              find.dataValues.section8_left_image1 !== undefined &&
              find.dataValues.section8_left_image1 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section8_left_image1);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section9_image") {
            section9_image = files[i].filename;
            if (
              req.body.section9_image &&
              req.body.section9_image !== null &&
              req.body.section9_image &&
              req.body.section9_image !== "null" &&
              req.body.section9_image &&
              req.body.section9_image !== undefined &&
              req.body.section9_image &&
              req.body.section9_image !== "undefined" &&
              find.dataValues.section9_image !== null &&
              find.dataValues.section9_image !== "null" &&
              find.dataValues.section9_image !== undefined &&
              find.dataValues.section9_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section9_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section10_image") {
            section10_image = files[i].filename;
            if (
              req.body.section10_image &&
              req.body.section10_image !== null &&
              req.body.section10_image &&
              req.body.section10_image !== "null" &&
              req.body.section10_image &&
              req.body.section10_image !== undefined &&
              req.body.section10_image &&
              req.body.section10_image !== "undefined" &&
              find.dataValues.section10_image !== null &&
              find.dataValues.section10_image !== "null" &&
              find.dataValues.section10_image !== undefined &&
              find.dataValues.section10_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section10_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section11_image") {
            section11_image = files[i].filename;
            if (
              req.body.section11_image &&
              req.body.section11_image !== null &&
              req.body.section11_image &&
              req.body.section11_image !== "null" &&
              req.body.section11_image &&
              req.body.section11_image !== undefined &&
              req.body.section11_image &&
              req.body.section11_image !== "undefined" &&
              find.dataValues.section11_image !== null &&
              find.dataValues.section11_image !== "null" &&
              find.dataValues.section11_image !== undefined &&
              find.dataValues.section11_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section11_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section12_image") {
            section12_image = files[i].filename;
            if (
              req.body.section12_image &&
              req.body.section12_image !== null &&
              req.body.section12_image &&
              req.body.section12_image !== "null" &&
              req.body.section12_image &&
              req.body.section12_image !== undefined &&
              req.body.section12_image &&
              req.body.section12_image !== "undefined" &&
              find.dataValues.section12_image !== null &&
              find.dataValues.section12_image !== "null" &&
              find.dataValues.section12_image !== undefined &&
              find.dataValues.section12_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section12_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section13_left_image") {
            section13_left_image = files[i].filename;
            if (
              req.body.section13_left_image &&
              req.body.section13_left_image !== null &&
              req.body.section13_left_image &&
              req.body.section13_left_image !== "null" &&
              req.body.section13_left_image &&
              req.body.section13_left_image !== undefined &&
              req.body.section13_left_image &&
              req.body.section13_left_image !== "undefined" &&
              find.dataValues.section13_left_image !== null &&
              find.dataValues.section13_left_image !== "null" &&
              find.dataValues.section13_left_image !== undefined &&
              find.dataValues.section13_left_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section13_left_image);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "section14_image") {
            section14_image = files[i].filename;
            if (
              req.body.section14_image &&
              req.body.section14_image !== null &&
              req.body.section14_image &&
              req.body.section14_image !== "null" &&
              req.body.section14_image &&
              req.body.section14_image !== undefined &&
              req.body.section14_image &&
              req.body.section14_image !== "undefined" &&
              find.dataValues.section14_image !== null &&
              find.dataValues.section14_image !== "null" &&
              find.dataValues.section14_image !== undefined &&
              find.dataValues.section14_image !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.section14_image);
            }
          }
        }
      } else {
        banner_image = find.dataValues.banner_image;
        section2_image = find.dataValues.section2_image;
        section3_image = find.dataValues.section3_image;
        section4_right_image = find.dataValues.section4_right_image;
        section4_left_image = find.dataValues.section4_left_image;
        section5_image = find.dataValues.section5_image;
        section7_image = find.dataValues.section7_image;
        section8_right_image = find.dataValues.section8_right_image;
        section8_left_image = find.dataValues.section8_left_image;
        section8_left_image1 = find.dataValues.section8_left_image1;
        section9_image = find.dataValues.section9_image;
        section10_image = find.dataValues.section10_image;
        section11_image = find.dataValues.section11_image;
        section12_image = find.dataValues.section12_image;
        section13_left_image = find.dataValues.section13_left_image;
        section14_image = find.dataValues.section14_image;
      }

      if (req.body.banner_image && req.body.banner_image === "null") {
        banner_image = find.dataValues.banner_image;
      }
      if (req.body.section2_image && req.body.section2_image === "null") {
        section2_image = find.dataValues.section2_image;
      }
      if (req.body.section3_image && req.body.section3_image === "null") {
        section3_image = find.dataValues.section3_image;
      }
      if (
        req.body.section4_right_image &&
        req.body.section4_right_image === "null"
      ) {
        section4_right_image = find.dataValues.section4_right_image;
      }
      if (
        req.body.section4_left_image &&
        req.body.section4_left_image === "null"
      ) {
        section4_left_image = find.dataValues.section4_left_image;
      }
      if (req.body.section5_image && req.body.section5_image === "null") {
        section5_image = find.dataValues.section5_image;
      }
      if (req.body.section7_image && req.body.section7_image === "null") {
        section7_image = find.dataValues.section7_image;
      }
      if (
        req.body.section8_right_image &&
        req.body.section8_right_image === "null"
      ) {
        section8_right_image = find.dataValues.section8_right_image;
      }
      if (
        req.body.section8_left_image &&
        req.body.section8_left_image === "null"
      ) {
        section8_left_image = find.dataValues.section8_left_image;
      }
      if (
        req.body.section8_left_image1 &&
        req.body.section8_left_image1 === "null"
      ) {
        section8_left_image1 = find.dataValues.section8_left_image1;
      }
      if (req.body.section9_image && req.body.section9_image === "null") {
        section9_image = find.dataValues.section9_image;
      }
      if (req.body.section10_image && req.body.section10_image === "null") {
        section10_image = find.dataValues.section10_image;
      }
      if (req.body.section11_image && req.body.section11_image === "null") {
        section11_image = find.dataValues.section11_image;
      }
      if (req.body.section12_image && req.body.section12_image === "null") {
        section12_image = find.dataValues.section12_image;
      }
      if (
        req.body.section13_left_image &&
        req.body.section13_left_image === "null"
      ) {
        section13_left_image = find.dataValues.section13_left_image;
      }
      if (req.body.section14_image && req.body.section14_image === "null") {
        section14_image = find.dataValues.section14_image;
      }

      const data = {
        id: id,
        banner_image: banner_image,
        banner_title: req.body.banner_title,
        banner_title_ar: req.body.banner_title_ar,
        section1_title: req.body.section1_title,
        section1_title_ar: req.body.section1_title_ar,
        section1_short_description_1: req.body.section1_short_description_1,
        section1_short_description_1_ar:
          req.body.section1_short_description_1_ar,
        section1_short_description_2: req.body.section1_short_description_2,
        section1_short_description_2_ar:
          req.body.section1_short_description_2_ar,
        section2_image: section2_image,
        section2_title: req.body.section2_title,
        section2_title_ar: req.body.section2_title_ar,
        section2_description: req.body.section2_description,
        section2_description_ar: req.body.section2_description_ar,
        section3_image: section3_image,
        section3_title: req.body.section3_title,
        section3_title_ar: req.body.section3_title_ar,
        section3_description: req.body.section3_description,
        section3_description_ar: req.body.section3_description_ar,
        section4_left_title: req.body.section4_left_title,
        section4_left_title_ar: req.body.section4_left_title_ar,
        section4_left_description: req.body.section4_left_description,
        section4_left_description_ar: req.body.section4_left_description_ar,
        section4_right_image: section4_right_image,
        section4_right_title: req.body.section4_right_title,
        section4_right_title_ar: req.body.section4_right_title_ar,
        section4_right_description: req.body.section4_right_description,
        section4_right_description_ar: req.body.section4_right_description_ar,
        section4_left_image: section4_left_image,
        section5_title: req.body.section5_title,
        section5_title_ar: req.body.section5_title_ar,
        section5_description: req.body.section5_description,
        section5_description_ar: req.body.section5_description_ar,
        section5_image: section5_image,
        section6_title: req.body.section6_title,
        section6_title_ar: req.body.section6_title_ar,
        section6_description: req.body.section6_description,
        section6_description_ar: req.body.section6_description_ar,
        section7_title: req.body.section7_title,
        section7_title_ar: req.body.section7_title_ar,
        section7_description: req.body.section7_description,
        section7_description_ar: req.body.section7_description_ar,
        section7_image: section7_image,
        section8_main_title: req.body.section8_main_title,
        section8_main_title_ar: req.body.section8_main_title_ar,
        section8_left_title: req.body.section8_left_title,
        section8_left_title_ar: req.body.section8_left_title_ar,
        section8_left_description: req.body.section8_left_description,
        section8_left_description_ar: req.body.section8_left_description_ar,
        section8_right_image: section8_right_image,
        section8_right_title: req.body.section8_right_title,
        section8_right_title_ar: req.body.section8_right_title_ar,
        section8_right_description: req.body.section8_right_description,
        section8_right_description_ar: req.body.section8_right_description_ar,
        section8_left_image: section8_left_image,
        section8_left_image1: section8_left_image1,
        section9_title: req.body.section9_title,
        section9_title_ar: req.body.section9_title_ar,
        section9_description: req.body.section9_description,
        section9_description_ar: req.body.section9_description_ar,
        section9_image: section9_image,
        section10_title: req.body.section10_title,
        section10_title_ar: req.body.section10_title_ar,
        section10_short_description: req.body.section10_short_description,
        section10_short_description_ar: req.body.section10_short_description_ar,
        section10_right_description: req.body.section10_right_description,
        section10_right_description_ar: req.body.section10_right_description_ar,
        section10_image: section10_image,
        section11_title: req.body.section11_title,
        section11_title_ar: req.body.section11_title_ar,
        section11_image: section11_image,
        section12_main_title: req.body.section12_main_title,
        section12_main_title_ar: req.body.section12_main_title_ar,
        section12_image: section12_image,
        section12_title: req.body.section12_title,
        section12_title_ar: req.body.section12_title_ar,
        section12_description: req.body.section12_description,
        section12_description_ar: req.body.section12_description_ar,
        section13_main_title: req.body.section13_main_title,
        section13_main_title_ar: req.body.section13_main_title_ar,
        section13_main_description: req.body.section13_main_description,
        section13_main_description_ar: req.body.section13_main_description_ar,
        section13_left_image: section13_left_image,
        section13_right_description: req.body.section13_right_description,
        section13_right_description_ar: req.body.section13_right_description_ar,
        section14_title: req.body.section14_title,
        section14_title_ar: req.body.section14_title_ar,
        section14_description: req.body.section14_description,
        section14_description_ar: req.body.section14_description_ar,
        section14_image: section14_image,
      };

      const researchAndDevelopment = await ResearchAndDevelopment.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: "Research And Development Update Successfully .",
        data: data,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Research And Development is Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateResearch;
