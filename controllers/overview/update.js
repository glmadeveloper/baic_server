import OverView from "../../models/overView.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";

// const updateOverview = async (req, res) => {
//   try {
//       let files = req.files;
//     const id = req.params.id;
//     let banner_image;
//     let section1_image;
//     let section2_image;
//     let section3_image;
//     const test = await OverView.findOne({
//       where: {
//         id: id,
//       },
//     });

//     if (test) {
//       if (!_.isEmpty(files)) {
//         for (let i = 0; i < files.length; i++) {
//           if (files[i].fieldname === "banner_image") {
//             banner_image = files[i].filename;
//             if (
//               req.body.banner_image &&
//               req.body.banner_image !== null &&
//               req.body.banner_image &&
//               req.body.banner_image !== "null" &&
//               req.body.banner_image &&
//               req.body.banner_image !== undefined &&
//               req.body.banner_image &&
//               req.body.banner_image !== "undefined" &&
//               test.dataValues.banner_image !== null &&
//               test.dataValues.banner_image !== "null" &&
//               test.dataValues.banner_image !== undefined &&
//               test.dataValues.banner_image !== "undefined"
//             ) {
//               fs.unlinkSync(imagePath1 + test.dataValues.banner_image);
//             }
//           }
//         }
//         for (let i = 0; i < files.length; i++) {
//           if (files[i].fieldname === "section1_image") {
//             section1_image = files[i].filename;
//             if (
//               req.body.section1_image &&
//               req.body.section1_image !== null &&
//               req.body.section1_image &&
//               req.body.section1_image !== "null" &&
//               req.body.section1_image &&
//               req.body.section1_image !== undefined &&
//               req.body.section1_image &&
//               req.body.section1_image !== "undefined" &&
//               test.dataValues.section1_image !== null &&
//               test.dataValues.section1_image !== "null" &&
//               test.dataValues.section1_image !== undefined &&
//               test.dataValues.section1_image !== "undefined"
//             ) {
//               fs.unlinkSync(imagePath1 + test.dataValues.section1_image);
//             }
//           }
//         }
//         for (let i = 0; i < files.length; i++) {
//           if (files[i].fieldname === "section2_image") {
//             section2_image = files[i].filename;
//             if (
//               req.body.section2_image &&
//               req.body.section2_image !== null &&
//               req.body.section2_image &&
//               req.body.section2_image !== "null" &&
//               req.body.section2_image &&
//               req.body.section2_image !== undefined &&
//               req.body.section2_image &&
//               req.body.section2_image !== "undefined" &&
//               test.dataValues.section2_image !== null &&
//               test.dataValues.section2_image !== "null" &&
//               test.dataValues.section2_image !== undefined &&
//               test.dataValues.section2_image !== "undefined"
//             ) {
//               fs.unlinkSync(imagePath1 + test.dataValues.section2_image);
//             }
//           }
//         }
//         for (let i = 0; i < files.length; i++) {
//           if (files[i].fieldname === "section3_image") {
//             section3_image = files[i].filename;
//             if (
//               req.body.section3_image &&
//               req.body.section3_image !== null &&
//               req.body.section3_image &&
//               req.body.section3_image !== "null" &&
//               req.body.section3_image &&
//               req.body.section3_image !== undefined &&
//               req.body.section3_image &&
//               req.body.section3_image !== "undefined" &&
//               test.dataValues.section3_image !== null &&
//               test.dataValues.section3_image !== "null" &&
//               test.dataValues.section3_image !== undefined &&
//               test.dataValues.section3_image !== "undefined"
//             ) {
//               fs.unlinkSync(imagePath1 + test.dataValues.section3_image);
//             }
//           }
//         }
//       } else {
//         banner_image = test.dataValues.banner_image;
//         section1_image = test.dataValues.section1_image;
//         section2_image = test.dataValues.section2_image;
//         section3_image = test.dataValues.section3_image;
//       }

//       if (req.body.banner_image && req.body.banner_image === "null") {
//         banner_image = test.dataValues.banner_image;
//       }
//       if (req.body.section1_image && req.body.section1_image === "null") {
//         section1_image = test.dataValues.section1_image;
//       }
//       if (req.body.section2_image && req.body.section2_image === "null") {
//         section2_image = test.dataValues.section2_image;
//       }
//       if (req.body.section3_image && req.body.section3_image === "null") {
//         section3_image = test.dataValues.section3_image;
//       }

//       const data = {
//         id: id,
//         banner_description: req.body.banner_description,
//         banner_description_ar: req.body.banner_description_ar,
//         banner_image: banner_image,
//         banner_title: req.body.banner_title,
//         banner_title_ar: req.body.banner_title_ar,
//         section1_image: section1_image,
//         section1_title: req.body.section1_title,
//         section1_title_ar: req.body.section1_title_ar,
//         section1_description: req.body.section1_description,
//         section1_description_ar: req.body.section1_description_ar,
//         section2_image: section2_image,
//         section3_image: section3_image,
//         section2_image_title1: req.body.section2_image_title1,
//         section2_image_title1_ar: req.body.section2_image_title1_ar,
//         section2_image_title2: req.body.section2_image_title2,
//         section2_image_title2_ar: req.body.section2_image_title2_ar,
//         section2_title: req.body.section2_title,
//         section2_title_ar: req.body.section2_title_ar,
//         section2_description: req.body.section2_description,
//         section2_description_ar: req.body.section2_description_ar,
//         section3_title1: req.body.section3_title1,
//         section3_title1_ar: req.body.section3_title1_ar,
//         section3_description1: req.body.section3_description1,
//         section3_description1_ar: req.body.section3_description1_ar,
//         section3_title2: req.body.section3_title2,
//         section3_title2_ar: req.body.section3_title2_ar,
//         section3_description2: req.body.section3_description2,
//         section3_description2_ar: req.body.section3_description2_ar,
//         section3_description3: req.body.section3_description3,
//         section3_description3_ar: req.body.section3_description3_ar,
//       };

//       const overView = await OverView.update(data, { where: { id: id } });
//       return res.json({
//         status: true,
//         message: "overview Update Successfully .",
//         data: data,
//         code: 200,
//       });
//     } else {
//       return res.json({
//         status: false,
//         message: "overview is Not Update",
//         code: 404,
//       });
//     }
//   } catch (error) {
//     return res.json({ status: false, message: error.message, code: 500 });
//   }
// };

const updateOverview = async (req, res) => {
  try {
    const { id } = req.params;
    const files = req.files || [];
    const test = await OverView.findOne({ where: { id } });

    if (!test) {
      return res.status(404).json({
        status: false,
        message: "Overview not found",
        code: 404,
      });
    }

    const imageFields = ["banner_image", "section1_image", "section2_image", "section3_image"];
    let updatedImages = {};

    // Process uploaded files and delete old images if necessary
    files.forEach((file) => {
      const fieldName = file.fieldname;
      if (imageFields.includes(fieldName)) {
        updatedImages[fieldName] = file.filename;

        const oldImage = test.dataValues[fieldName];
        if (oldImage && oldImage !== "null" && oldImage !== "undefined") {
          fs.unlinkSync(path.join(imagePath1, oldImage));
        }
      }
    });

    // Preserve existing images if not updated
    imageFields.forEach((field) => {
      if (!updatedImages[field] || req.body[field] === "null") {
        updatedImages[field] = test.dataValues[field];
      }
    });

    // Construct update data object
    const data = {
      id,
      ...updatedImages,
      banner_description: req.body.banner_description,
      banner_description_ar: req.body.banner_description_ar,
      banner_title: req.body.banner_title,
      banner_title_ar: req.body.banner_title_ar,
      section1_title: req.body.section1_title,
      section1_title_ar: req.body.section1_title_ar,
      section1_description: req.body.section1_description,
      section1_description_ar: req.body.section1_description_ar,
      section2_image_title1: req.body.section2_image_title1,
      section2_image_title1_ar: req.body.section2_image_title1_ar,
      section2_image_title2: req.body.section2_image_title2,
      section2_image_title2_ar: req.body.section2_image_title2_ar,
      section2_title: req.body.section2_title,
      section2_title_ar: req.body.section2_title_ar,
      section2_description: req.body.section2_description,
      section2_description_ar: req.body.section2_description_ar,
      section3_title1: req.body.section3_title1,
      section3_title1_ar: req.body.section3_title1_ar,
      section3_description1: req.body.section3_description1,
      section3_description1_ar: req.body.section3_description1_ar,
      section3_title2: req.body.section3_title2,
      section3_title2_ar: req.body.section3_title2_ar,
      section3_description2: req.body.section3_description2,
      section3_description2_ar: req.body.section3_description2_ar,
      section3_description3: req.body.section3_description3,
      section3_description3_ar: req.body.section3_description3_ar,
    };

    await OverView.update(data, { where: { id } });

    return res.json({
      status: true,
      message: "Overview updated successfully.",
      data,
      code: 200,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message, code: 500 });
  }
};

export default updateOverview;
