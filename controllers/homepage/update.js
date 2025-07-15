import Homepage from "../../models/homePage.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";
const updateHomepage = async (req, res) => {
  try {
    const id = req.params.id;
    const files = req.files;
    const body = req.body;
    let banner_image1;
    let banner_image2;
    let banner_image3;
    let logo;

    const find = await Homepage.findOne({
      where: {
        id: id,
      },
    });
    if (find) {
      if (!_.isEmpty(files)) {
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "banner_image1") {
            banner_image1 = files[i].filename;
            if (
              req.body.banner_image1 &&
              req.body.banner_image1 !== null &&
              req.body.banner_image1 &&
              req.body.banner_image1 !== "null" &&
              req.body.banner_image1 &&
              req.body.banner_image1 !== undefined &&
              req.body.banner_image1 &&
              req.body.banner_image1 !== "undefined" &&
              find.dataValues.banner_image1 !== null &&
              find.dataValues.banner_image1 !== "null" &&
              find.dataValues.banner_image1 !== undefined &&
              find.dataValues.banner_image1 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.banner_image1);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "banner_image2") {
            banner_image2 = files[i].filename;
            if (
              req.body.banner_image2 &&
              req.body.banner_image2 !== null &&
              req.body.banner_image2 &&
              req.body.banner_image2 !== "null" &&
              req.body.banner_image2 &&
              req.body.banner_image2 !== undefined &&
              req.body.banner_image2 &&
              req.body.banner_image2 !== "undefined" &&
              find.dataValues.banner_image2 !== null &&
              find.dataValues.banner_image2 !== "null" &&
              find.dataValues.banner_image2 !== undefined &&
              find.dataValues.banner_image2 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.banner_image2);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "banner_image3") {
            banner_image3 = files[i].filename;
            if (
              req.body.banner_image3 &&
              req.body.banner_image3 !== null &&
              req.body.banner_image3 &&
              req.body.banner_image3 !== "null" &&
              req.body.banner_image3 &&
              req.body.banner_image3 !== undefined &&
              req.body.banner_image3 &&
              req.body.banner_image3 !== "undefined" &&
              find.dataValues.banner_image3 !== null &&
              find.dataValues.banner_image3 !== "null" &&
              find.dataValues.banner_image3 !== undefined &&
              find.dataValues.banner_image3 !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.banner_image3);
            }
          }
        }
        for (let i = 0; i < files.length; i++) {
          if (files[i].fieldname === "logo") {
            logo = files[i].filename;
            if (
              req.body.logo &&
              req.body.logo !== null &&
              req.body.logo &&
              req.body.logo !== "null" &&
              req.body.logo &&
              req.body.logo !== undefined &&
              req.body.logo &&
              req.body.logo !== "undefined" &&
              find.dataValues.logo !== null &&
              find.dataValues.logo !== "null" &&
              find.dataValues.logo !== undefined &&
              find.dataValues.logo !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.logo);
            }
          }
        }
      } else {
        banner_image1 = find.dataValues.banner_image1;
        banner_image2 = find.dataValues.banner_image2;
        banner_image3 = find.dataValues.banner_image3;
        logo = find.dataValues.logo;
      }
      if (req.body.banner_image1 && req.body.banner_image1 === "null") {
        banner_image1 = find.dataValues.banner_image1;
      }
      if (req.body.banner_image2 && req.body.banner_image2 === "null") {
        banner_image2 = find.dataValues.banner_image2;
      }
      if (req.body.banner_image3 && req.body.banner_image3 === "null") {
        banner_image3 = find.dataValues.banner_image3;
      }
      if (req.body.logo && req.body.logo === "null") {
        logo = find.dataValues.logo;
      }

      const data = {
        id: id,
        banner_image1: banner_image1,
        banner_image1_title: req.body.banner_image1_title,
        banner_image1_title_ar: req.body.banner_image1_title_ar,
        banner_image1_description: req.body.banner_image1_description,
        banner_image1_description_ar: req.body.banner_image1_description_ar,
        banner_image1_button1: req.body.banner_image1_button1,
        banner_image1_button1_url: req.body.banner_image1_button1_url,
        banner_image1_button2: req.body.banner_image1_button2,
        banner_image1_button2_url: req.body.banner_image1_button2_url,
        banner_image2: banner_image2,
        banner_image2_title: req.body.banner_image2_title,
        banner_image2_title_ar: req.body.banner_image2_title_ar,
        banner_image2_description: req.body.banner_image2_description,
        banner_image2_description_ar: req.body.banner_image2_description_ar,
        banner_image2_button1: req.body.banner_image2_button1,
        banner_image2_button1_url: req.body.banner_image2_button1_url,
        banner_image2_button2: req.body.banner_image2_button2,
        banner_image2_button2_url: req.body.banner_image2_button2_url,
        banner_image3: banner_image3,
        banner_image3_title: req.body.banner_image3_title,
        banner_image3_title_ar: req.body.banner_image3_title_ar,
        banner_image3_description: req.body.banner_image3_description,
        banner_image3_description_ar: req.body.banner_image3_description_ar,
        banner_image3_button1: req.body.banner_image3_button1,
        banner_image3_button1_url: req.body.banner_image3_button1_url,
        banner_image3_button2: req.body.banner_image3_button2,
        banner_image3_button2_url: req.body.banner_image3_button2_url,
        instagram_link: req.body.instagram_link,
        facebook_link: req.body.facebook_link,
        linkedin_link: req.body.linkedin_link,
        logo: logo,
      };

      const baicInX = await Homepage.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: "Homepage Update Successfully .",
        data: data,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Homepage is Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateHomepage;
