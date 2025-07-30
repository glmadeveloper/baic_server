import Homepage from "../../models/homePage.js";
// import HomepageBanner from "../../models/homePagebaner.js";
import _ from "lodash";
import fs from "fs";
// import db from "../../config/database.js";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";

// const updateHomepage = async (req, res) => {
//   const transaction = await db.transaction();
//   try {
//     const { id } = req.params;
//     const files = req.files;
//     const body = req.body;

//     // 1. Update Homepage
//     const homepageData = {
//       instagram_link: body.instagram_link,
//       facebook_link: body.facebook_link,
//       linkedin_link: body.linkedin_link,
//     };

//     // Handle logo upload
//     const logoFile = files.find(f => f.fieldname === 'logo');
//     if (logoFile) {
//       // Delete old logo if exists
//       const existingHomepage = await Homepage.findByPk(id);
//       if (existingHomepage?.logo) {
//         if (fs.existsSync(imagePath1 + existingHomepage.logo)) {
//           fs.unlinkSync(imagePath1 + existingHomepage.logo);
//         }
//       }
//       homepageData.logo = logoFile.filename;
//     }

//     await Homepage.update(homepageData, {
//       where: { id },
//       transaction
//     });

//     // 2. Process Banners
//     // const banners = JSON.parse(body.banners || '[]');
//     const banners = [];

//     for (let i = 0; i < body.banners.length; i++) {
//       banners.push({
//         id: body.banners[i] ? body.banners[i].id : body.banners[i].id || null,
//         title_en: body.banners[i].title_en || null,
//         title_ar: body.banners[i].title_ar || null,
//         description_en: body.banners[i].description_en || null,
//         description_ar: body.banners[i].description_ar || null,
//         button1: body.banners[i].button1 || null,
//         button1_url: body.banners[i].button1_url || null,
//         button2: body.banners[i].button2 || null,
//         button2_url: body.banners[i].button2_url || null,
//         homepageId: id,
//       });
//     }

//     const bannerFiles = files.filter(f => f.fieldname.startsWith('banners['));

//     // Create files map: { index: file }
//     const filesMap = {};
//     bannerFiles.forEach(file => {
//       const matches = file.fieldname.match(/banners\[(\d+)\]\[image\]/);
//       if (matches) filesMap[matches[1]] = file;
//     });

//     // Update/Create Banners
//     const existingBanners = await HomepageBanner.findAll({
//       where: { homepageId: id },
//       transaction
//     });

//     const updatedBannerIds = [];

//     for (const [index, bannerData] of banners.entries()) {
//       const bannerPayload = {
//         title_en: bannerData.title_en,
//         title_ar: bannerData.title_ar,
//         description_en: bannerData.description_en,
//         description_ar: bannerData.description_ar,
//         button1: bannerData.button1,
//         button1_url: bannerData.button1_url,
//         button2: bannerData.button2,
//         button2_url: bannerData.button2_url,
//         homepageId: id,
//       };

//       // Handle image upload
//       const file = filesMap[index];
//       if (file) {
//         // Delete old image if exists
//         if (bannerData.id) {
//           const existingBanner = existingBanners.find(b => b.id === bannerData.id);
//           if (existingBanner?.image) {
//             if (fs.existsSync(imagePath1 + existingBanner.image)) {
//               fs.unlinkSync(imagePath1 + existingBanner.image);
//             }
//           }

//         }
//         bannerPayload.image = file.filename;
//       }

//       if (bannerData.id) {
//         // Update existing banner
//         await HomepageBanner.update(bannerPayload, {
//           where: { id: bannerData.id },
//           transaction
//         });
//         updatedBannerIds.push(bannerData.id);
//       } else {
//         // Create new banner
//         const newBanner = await HomepageBanner.create(bannerPayload, { transaction });
//         updatedBannerIds.push(newBanner.id);
//       }
//     }

//     const updatedBannerIdsNum = updatedBannerIds.map(id => Number(id));

//     const bannersToDelete = existingBanners
//       .filter(b => !updatedBannerIdsNum.includes(b.id)) // Ensure type matches
//       .map(b => b.id);

//     console.log("Existing Banners:", existingBanners.map(b => b.id));
//     console.log("Updated Banners:", updatedBannerIds);
//     console.log("Banners to Delete:", bannersToDelete);

//     if (bannersToDelete.length > 0) {
//       // Delete associated images
//       const deletedBanners = await HomepageBanner.findAll({
//         where: { id: bannersToDelete },
//         transaction
//       });

//       deletedBanners.forEach(banner => {
//         if (banner.image) {
//           if (fs.existsSync(imagePath1 + banner.image)) {
//             fs.unlinkSync(imagePath1 + banner.image);
//           }
//         }
//       });

//       await HomepageBanner.destroy({
//         where: { id: bannersToDelete },
//         transaction
//       });
//     }

//     await transaction.commit();

//     // Fetch updated data
//     const updatedHomepage = await Homepage.findByPk(id, {
//       include: [{ model: HomepageBanner, as: 'banners' }],
//     });

//     return res.json({
//       status: true,
//       message: "Homepage updated successfully",
//       data: updatedHomepage,
//       code: 200
//     });

//   } catch (error) {
//     await transaction.rollback();
//     return res.json({
//       status: false,
//       message: error.message,
//       code: 500
//     });
//   }
// };

const updateHomepage = async (req, res) => {
  try {
    const id = req.params.id;
    const files = req.files;
    const body = req.body;
    let banner_image1;
    let banner_image2;
    let banner_image3;
    let banner_image1_mobile;
    let banner_image2_mobile;
    let banner_image3_mobile;
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
          if (files[i].fieldname === "banner_image1_mobile") {
            banner_image1_mobile = files[i].filename;
            if (
              req.body.banner_image1_mobile &&
              req.body.banner_image1_mobile !== null &&
              req.body.banner_image1_mobile &&
              req.body.banner_image1_mobile !== "null" &&
              req.body.banner_image1_mobile &&
              req.body.banner_image1_mobile !== undefined &&
              req.body.banner_image1_mobile &&
              req.body.banner_image1_mobile !== "undefined" &&
              find.dataValues.banner_image1_mobile !== null &&
              find.dataValues.banner_image1_mobile !== "null" &&
              find.dataValues.banner_image1_mobile !== undefined &&
              find.dataValues.banner_image1_mobile !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.banner_image1_mobile);
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
          if (files[i].fieldname === "banner_image2_mobile") {
            banner_image2_mobile = files[i].filename;
            if (
              req.body.banner_image2_mobile &&
              req.body.banner_image2_mobile !== null &&
              req.body.banner_image2_mobile &&
              req.body.banner_image2_mobile !== "null" &&
              req.body.banner_image2_mobile &&
              req.body.banner_image2_mobile !== undefined &&
              req.body.banner_image2_mobile &&
              req.body.banner_image2_mobile !== "undefined" &&
              find.dataValues.banner_image2_mobile !== null &&
              find.dataValues.banner_image2_mobile !== "null" &&
              find.dataValues.banner_image2_mobile !== undefined &&
              find.dataValues.banner_image2_mobile !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.banner_image2_mobile);
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
          if (files[i].fieldname === "banner_image3_mobile") {
            banner_image3_mobile = files[i].filename;
            if (
              req.body.banner_image3_mobile &&
              req.body.banner_image3_mobile !== null &&
              req.body.banner_image3_mobile &&
              req.body.banner_image3_mobile !== "null" &&
              req.body.banner_image3_mobile &&
              req.body.banner_image3_mobile !== undefined &&
              req.body.banner_image3_mobile &&
              req.body.banner_image3_mobile !== "undefined" &&
              find.dataValues.banner_image3_mobile !== null &&
              find.dataValues.banner_image3_mobile !== "null" &&
              find.dataValues.banner_image3_mobile !== undefined &&
              find.dataValues.banner_image3_mobile !== "undefined"
            ) {
              fs.unlinkSync(imagePath1 + find.dataValues.banner_image3_mobile);
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
        banner_image1_mobile = find.dataValues.banner_image1_mobile;
        banner_image2_mobile = find.dataValues.banner_image2_mobile;
        banner_image3_mobile = find.dataValues.banner_image3_mobile;
        logo = find.dataValues.logo;
      }
      if (req.body.banner_image1 && req.body.banner_image1 === "null") {
        banner_image1 = find.dataValues.banner_image1;
      }
      if (req.body.banner_image1_mobile && req.body.banner_image1_mobile === "null") {
        banner_image1_mobile = find.dataValues.banner_image1_mobile;
      }
      if (req.body.banner_image2 && req.body.banner_image2 === "null") {
        banner_image2 = find.dataValues.banner_image2;
      }
      if (req.body.banner_image2_mobile && req.body.banner_image2_mobile === "null") {
        banner_image2_mobile = find.dataValues.banner_image2_mobile;
      }
      if (req.body.banner_image3 && req.body.banner_image3 === "null") {
        banner_image3 = find.dataValues.banner_image3;
      }
      if (req.body.banner_image3_mobile && req.body.banner_image3_mobile === "null") {
        banner_image3_mobile = find.dataValues.banner_image3_mobile;
      }
      if (req.body.logo && req.body.logo === "null") {
        logo = find.dataValues.logo;
      }

      const data = {
        id: id,
        banner_image1: banner_image1,
        banner_image1_mobile: banner_image1_mobile,
        banner_image1_title: req.body.banner_image1_title,
        banner_image1_title_ar: req.body.banner_image1_title_ar,
        banner_image1_description: req.body.banner_image1_description,
        banner_image1_description_ar: req.body.banner_image1_description_ar,
        banner_image1_button1: req.body.banner_image1_button1,
        banner_image1_button1_url: req.body.banner_image1_button1_url,
        banner_image1_button2: req.body.banner_image1_button2,
        banner_image1_button2_url: req.body.banner_image1_button2_url,
        banner_image2: banner_image2,
        banner_image2_mobile: banner_image2_mobile,
        banner_image2_title: req.body.banner_image2_title,
        banner_image2_title_ar: req.body.banner_image2_title_ar,
        banner_image2_description: req.body.banner_image2_description,
        banner_image2_description_ar: req.body.banner_image2_description_ar,
        banner_image2_button1: req.body.banner_image2_button1,
        banner_image2_button1_url: req.body.banner_image2_button1_url,
        banner_image2_button2: req.body.banner_image2_button2,
        banner_image2_button2_url: req.body.banner_image2_button2_url,
        banner_image3: banner_image3,
        banner_image3_mobile: banner_image3_mobile,
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
        meta_keywords: req.body.meta_keywords,
        meta_description: req.body.meta_description,
        meta_title: req.body.meta_title,
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
