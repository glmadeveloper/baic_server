import Model from '../../models/model.js';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique filenames

// Get the equivalent of __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const updateModel = async (req, res) => {
  try {
    // console.log('BODY', req.body);
    // console.log('FILES', req.files);

    // Check if the model exists by ID
    const existingModel = await Model.findOne({ where: { id: req.body.id } });
    if (!existingModel) {
      return res.status(404).json({
        status: false,
        message: 'Error: Model not found.',
        code: 404,
      });
    }

    // Initialize arrays to store updated sections
    let normalSections = existingModel.normalSections || [];
    let advancedSections = existingModel.advancedSections || [];

    // Ensure the directory exists for saving images
    const uploadDir = path.join(__dirname, '../../public/uploads');
    await mkdirp(uploadDir); // Create the directory if it doesn't exist

    // Initialize variables for image paths
    let image1Path = existingModel.image1;
    let image2Path = existingModel.image2;

    // Process files (image1, image2)
    req.files.forEach((file) => {
      const fieldname = file.fieldname;

      // Update image1 if provided
      if (fieldname === 'image1') {
        image1Path = file.filename;
      }

      // Update image2 if provided
      if (fieldname === 'image2') {
        image2Path = file.filename;
      }
    });

    // Validate if image1 and image2 are uploaded, if required
    if (!image1Path || !image2Path) {
      return res.status(400).json({
        status: false,
        message: 'Error: Both image1 and image2 are required.',
        code: 400,
      });
    }

    // Handle normal sections if designType is 'normal'
    if (
      existingModel.designType === 'normal' &&
      req.body.normalSections &&
      Array.isArray(req.body.normalSections)
    ) {
      normalSections = req.body.normalSections.map((section, index) => {
        if (
          section.title_en != '' ||
          section.title_ar != '' ||
          section.description_en != '' ||
          section.description_ar != '' ||
          section.image_en != '' ||
          section.image_ar != ''
        ) {
          let normalSectionObj = {
            title_en: section.title_en || '',
            title_ar: section.title_ar || '',
            description_en: section.description_en || '',
            description_ar: section.description_ar || '',
            image_en: section.image_en || '',
            image_ar: section.image_ar || '',
          };

          // Handle image uploads for normal sections
          if (req.files) {
            const image_en_file = req.files.find(
              (file) => file.fieldname === `normalSections[${index}][image_en]`,
            );
            const image_ar_file = req.files.find(
              (file) => file.fieldname === `normalSections[${index}][image_ar]`,
            );

            // Save images to the directory and store the full path in the database
            if (image_en_file) {
              normalSectionObj.image_en = image_en_file.filename;
            }

            if (image_ar_file) {
              normalSectionObj.image_ar = image_ar_file.filename;
            }
          }

          return normalSectionObj;
        }
      });

      // Ensure at least one valid normal section exists with images
      const validNormalSection = normalSections.some(
        (section) => section.image_en && section.image_ar,
      );
      if (!validNormalSection) {
        return res.status(400).json({
          status: false,
          message: 'Error: At least one normal section must have valid images.',
          code: 400,
        });
      }
    }

    // Handle advanced sections if designType is 'advanced'
    if (existingModel.designType === 'advanced' && req.body.advancedSections) {
      const requiredSections = ['section1', 'section2', 'section3', 'section4'];

      advancedSections = [];
      requiredSections.forEach((section) => {
        console.log('_________1___________');
        console.log(section);
        // console.log(req.body.advancedSections);
        console.log(req.body.advancedSections[section]);
        console.log('_________2___________');
        if (Array.isArray(req.body.advancedSections[section])) {
          const advancedSectionObjs = req.body.advancedSections[section].map(
            (advancedSection, i) => {
              const advancedSectionObj = {
                title_en: advancedSection.title_en || '',
                title_ar: advancedSection.title_ar || '',
                description_en: advancedSection.description_en || '',
                description_ar: advancedSection.description_ar || '',
                image_en: advancedSection.image_en || '',
                image_ar: advancedSection.image_ar || '',
              };

              // Handle image uploads for advanced sections
              if (req.files) {
                const image_en_file = req.files.find(
                  (file) => file.fieldname === `advancedSections[${section}][${i}][image_en]`,
                );
                const image_ar_file = req.files.find(
                  (file) => file.fieldname === `advancedSections[${section}][${i}][image_ar]`,
                );

                if (image_en_file) {
                  advancedSectionObj.image_en = image_en_file.filename;
                }

                if (image_ar_file) {
                  advancedSectionObj.image_ar = image_ar_file.filename;
                }
              }

              return advancedSectionObj;
            },
          );
          advancedSections.push({ [section]: advancedSectionObjs });
        }
      });
    }

    // console.log(advancedSections);
    // Prepare data to be updated in the database
    const updatedData = {
      image1: image1Path,
      image1_title: req.body.image1_title || existingModel.image1_title,
      image1_title_ar: req.body.image1_title_ar || existingModel.image1_title_ar,
      image1_description_ar: req.body.image1_description_ar || existingModel.image1_description_ar,
      image1_description: req.body.image1_description || existingModel.image1_description,

      image2: image2Path,
      image2_title: req.body.image2_title || existingModel.image2_title,
      image2_title_ar: req.body.image2_title_ar || existingModel.image2_title_ar,
      image2_description: req.body.image2_description || existingModel.image2_description,
      image2_description_ar: req.body.image2_description_ar || existingModel.image2_description_ar,

      name: req.body.name || existingModel.name,
      name_ar: req.body.name_ar || existingModel.name_ar,
      description: req.body.description || existingModel.description,
      description_ar: req.body.description_ar || existingModel.description_ar,
      modelAndConfiguration: req.body.modelAndConfiguration || existingModel.modelAndConfiguration,
      vr_link: req.body.vr_link || existingModel.vr_link,
      power: req.body.power || existingModel.power,
      torque: req.body.torque || existingModel.torque,
      wheelbase: req.body.wheelbase || existingModel.wheelbase,
      designType: existingModel.designType,
      normalSections: normalSections.length ? normalSections : existingModel.normalSections,
      advancedSections: advancedSections.length ? advancedSections : existingModel.advancedSections,
      categoryId: req.body.categoryId || existingModel.categoryId,
    };

    // Update the model in the database
    const updatedModel = await existingModel.update(updatedData);

    return res.json({
      status: true,
      message: 'Model Updated Successfully.',
      data: updatedModel,
      code: 200,
    });
  } catch (error) {
    console.error(error);
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateModel;

// import Model from "../../models/model.js";
// import path from "path";
// import fs from "fs";
// import mkdirp from "mkdirp";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import { v4 as uuidv4 } from "uuid"; // Import uuid to generate unique filenames

// // Get the equivalent of __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const updateModel = async (req, res) => {
//   try {
//     console.log("BODY", req.body);
//     console.log("FILES", req.files);
//     console.log(req.body,'kjkjkjkjkjkjk')

//     // Check if the model exists by name
//     const existingModel = await Model.findOne({ where: { id: req.body.id} });
//     if (!existingModel) {
//       return res.status(404).json({
//         status: false,
//         message: "Error: Model not found.",
//         code: 404,
//       });
//     }

//     const updatedData = {
//       image1:  existingModel.image1,
//       image1_title: existingModel.image1_title ,
//       image1_title_ar: existingModel.image1_title_ar ,
//       image1_description_ar: existingModel.image1_description_ar ,
//       image1_description: existingModel.image1_description ,

//       image2: existingModel.image2,
//       image2_title: existingModel.image2_title ,
//       image2_title_ar: existingModel.image2_title_ar ,
//       image2_description: existingModel.image2_description ,
//       image2_description_ar: existingModel.image2_description_ar ,

//       name: req.body.name || existingModel.name,
//       name_ar: req.body.name_ar || existingModel.name_ar,
//       description: req.body.description || existingModel.description,
//       description_ar: req.body.description_ar || existingModel.description_ar,
//       modelAndConfiguration: req.body.modelAndConfiguration || existingModel.modelAndConfiguration,
//       vr_link: req.body.vr_link || existingModel.vr_link,
//       power: req.body.power || existingModel.power,
//       torque: req.body.torque || existingModel.torque,
//       wheelbase: req.body.wheelbase || existingModel.wheelbase,
//       designType:  existingModel.designType,
//       normalSections:  existingModel.normalSections,
//       advancedSections:  existingModel.advancedSections,
//       categoryId: req.body.categoryId || existingModel.categoryId,
//     };

//     // Update the model in the database
//     console.log(req.body,'kjkjkjkjkjkjk')
//     const updatedModel = await existingModel.update(updatedData);

//     return res.json({
//       status: true,
//       message: "Model Updated Successfully.",
//       data: updatedModel,
//       code: 200,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.json({ status: false, message: error.message, code: 500 });
//   }
// };

// export default updateModel;

// import Model from "../../models/model.js";
// import _ from "lodash";
// import fs from "fs";

// const __dirname = process.env.ROOTPATH;
// const imagePath1 = __dirname + "/uploads/.tmp/";
// const updateModel = async (req, res) => {
// //   console.log("IMAGE PATH", imagePath1);
//   try {
//     const id = req.params.id;
//     let image1;
//     let image2;
//     let image3;
//     let image4;
//     let image5;
//     // let sectionImages = [];
//     let moreSections = [];
//     // let video;
//     const files = req.files;
//     const test = await Model.findOne({
//       where: {
//         id: id,
//       },
//     });
// //  console.log("KEYS OF BODY",Object.keys(req.body))
// //  let newAr = []
// //  let stringArray = Object.keys(req.body)
// //  for (var j=0; j<stringArray.length; j++) {
// //         if (stringArray[j].match("moreSections")){
// //         newAr.push(stringArray[j])
// //         }
// //     }
// //     let lastString = newAr[newAr.length - 1]
// //     let lastStringNumber =  parseInt(lastString.slice(13, 14))
//     console.log("NEW ARRAY OF SECTION IMAGES",  req.body)
//       console.log("NEW ARRAY OF SECTION Files",  req.files)
//     if (test) {
//       if (!_.isEmpty(files)) {
//         for (let i = 0; i < files.length; i++) {
//           if (files[i].fieldname === "image1") {
//             image1 = files[i].filename;
//             if (
//               req.body.image1 &&
//               req.body.image1 !== null &&
//               req.body.image1 &&
//               req.body.image1 !== "null" &&
//               req.body.image1 &&
//               req.body.image1 !== undefined &&
//               req.body.image1 &&
//               req.body.image1 !== "undefined" &&
//               find.dataValues.image1 !== null &&
//               find.dataValues.image1 !== "null" &&
//               find.dataValues.image1 !== undefined &&
//               find.dataValues.image1 !== "undefined"
//             ) {
//               fs.unlinkSync(imagePath1 + test.dataValues.image1);
//             }
//           }
//         }
//         for (let i = 0; i < files.length; i++) {
//           if (files[i].fieldname === "image2") {
//             image2 = files[i].filename;
//             if (
//               req.body.image2 &&
//               req.body.image2 !== null &&
//               req.body.image2 &&
//               req.body.image2 !== "null" &&
//               req.body.image2 &&
//               req.body.image2 !== undefined &&
//               req.body.image2 &&
//               req.body.image2 !== "undefined" &&
//               find.dataValues.image2 !== null &&
//               find.dataValues.image2 !== "null" &&
//               find.dataValues.image2 !== undefined &&
//               find.dataValues.image2 !== "undefined"
//             ) {
//               fs.unlinkSync(imagePath1 + test.dataValues.image2);
//             }
//           }
//         }
//         for (let i = 0; i < files.length; i++) {
//           if (files[i].fieldname === "image3") {
//             image3 = files[i].filename;
//             if (
//               req.body.image3 &&
//               req.body.image3 !== null &&
//               req.body.image3 &&
//               req.body.image3 !== "null" &&
//               req.body.image3 &&
//               req.body.image3 !== undefined &&
//               req.body.image3 &&
//               req.body.image3 !== "undefined" &&
//               find.dataValues.image3 !== null &&
//               find.dataValues.image3 !== "null" &&
//               find.dataValues.image3 !== undefined &&
//               find.dataValues.image3 !== "undefined"
//             ) {
//               fs.unlinkSync(imagePath1 + test.dataValues.image3);
//             }
//           }
//         }
//         for (let i = 0; i < files.length; i++) {
//           if (files[i].fieldname === "image4") {
//             image4 = files[i].filename;
//             if (
//               req.body.image4 &&
//               req.body.image4 !== null &&
//               req.body.image4 &&
//               req.body.image4 !== "null" &&
//               req.body.image4 &&
//               req.body.image4 !== undefined &&
//               req.body.image4 &&
//               req.body.image4 !== "undefined" &&
//               find.dataValues.image4 !== null &&
//               find.dataValues.image4 !== "null" &&
//               find.dataValues.image4 !== undefined &&
//               find.dataValues.image4 !== "undefined"
//             ) {
//               fs.unlinkSync(imagePath1 + test.dataValues.image4);
//             }
//           }
//         }
//         for (let i = 0; i < files.length; i++) {
//           if (files[i].fieldname === "image5") {
//             image5 = files[i].filename;
//             if (
//               req.body.image5 &&
//               req.body.image5 !== null &&
//               req.body.image5 &&
//               req.body.image5 !== "null" &&
//               req.body.image5 &&
//               req.body.image5 !== undefined &&
//               req.body.image5 &&
//               req.body.image5 !== "undefined" &&
//               find.dataValues.image5 !== null &&
//               find.dataValues.image5 !== "null" &&
//               find.dataValues.image5 !== undefined &&
//               find.dataValues.image5 !== "undefined"
//             ) {
//               fs.unlinkSync(imagePath1 + test.dataValues.image5);
//             }
//           }
//         }
//         // for (let i = 0; i < files.length; i++) {
//         //   if (files[i].fieldname === "image6") {
//         //     image6 = files[i].filename;
//         //     if (
//         //       req.body.image6 &&
//         //       req.body.image6 !== null &&
//         //       req.body.image6 &&
//         //       req.body.image6 !== "null" &&
//         //       req.body.image6 &&
//         //       req.body.image6 !== undefined &&
//         //       req.body.image6 &&
//         //       req.body.image6 !== "undefined" &&
//         //       find.dataValues.image6 !== null &&
//         //       find.dataValues.image6 !== "null" &&
//         //       find.dataValues.image6 !== undefined &&
//         //       find.dataValues.image6 !== "undefined"
//         //     ) {
//         //       fs.unlinkSync(imagePath1 + test.dataValues.image6);
//         //     }
//         //   }
//         // }
//         // for (let i = 0; i < files.length; i++) {
//         //   if (files[i].fieldname === "video") {
//         //     video = files[i].filename;
//         //     if (
//         //       req.body.video &&
//         //       req.body.video !== null &&
//         //       req.body.video &&
//         //       req.body.video !== "null" &&
//         //       req.body.video &&
//         //       req.body.video !== undefined &&
//         //       req.body.video &&
//         //       req.body.video !== "undefined" &&
//         //       find.dataValues.video !== null &&
//         //       find.dataValues.video !== "null" &&
//         //       find.dataValues.video !== undefined &&
//         //       find.dataValues.video !== "undefined"
//         //     ) {
//         //       fs.unlinkSync(imagePath1 + test.dataValues.video);
//         //     }
//         //   }
//         // }
//         // for (let i = 0; i <= files.length; i++) {
//         //   if (
//         //     files[i].fieldname != "image1" &&
//         //     files[i].fieldname != "image2" &&
//         //     files[i].fieldname != "image3" &&
//         //     files[i].fieldname != "image4" &&
//         //     files[i].fieldname != "image5"
//         //   ) {
//         //     sectionImages.push(files[i].filename);
//         //   }
//         // }

//       } else {
//         image1 = test.dataValues.image1;
//         image2 = test.dataValues.image2;
//         image3 = test.dataValues.image3;
//         image4 = test.dataValues.image4;
//         image5 = test.dataValues.image5;
//         // image6 = test.dataValues.image6;
//         // video = test.dataValues.video;
//       }
//       if (req.body.image1 && req.body.image1 === "null") {
//         image1 = test.dataValues.image1;
//       }
//       if (req.body.image2 && req.body.image2 === "null") {
//         image2 = test.dataValues.image2;
//       }
//       if (req.body.image3 && req.body.image3 === "null") {
//         image3 = test.dataValues.image3;
//       }
//       if (req.body.image4 && req.body.image4 === "null") {
//         image4 = test.dataValues.image4;
//       }
//       if (req.body.image5 && req.body.image5 === "null") {
//         image5 = test.dataValues.image5;
//       }
//     //   if (_.isEmpty(image6)) {
//     //     image6 = test.dataValues.image6;
//     // //   }
//     //   if (req.body.video && req.body.video === "null") {
//     //     video = test.dataValues.video;
//     //   }

// for (let i = 0;  req.body[`moreSections[${i}].title`]; i++) {
//      let obj
//      let image
//       console.log("FILES LENGTH", typeof image)
//      let imageAr

//       for(let k = 0; k < files.length; k++){
//            console.log("K", k)
//       if(files[k].fieldname === `moreSections[${i}].image`){

//            console.log("111",  files[k].filename)
//              image = files[k].filename
//          }
//          console.log("111",  image)
//       }
//      for(let j = 0; j <files.length; j++){

//          if(files[j].fieldname === `moreSections[${i}].image_ar`){
//              imageAr = files[j].filename
//          }

//      }
//      console.log("imageimage", image)
//      console.log("imageArimageArimageAr", imageAr)
//      if(req.body[`moreSections[${i}].image`] !== "undefined" && req.body[`moreSections[${i}].image_ar`] !=="undefined" ){
//            obj = {

//                title: req.body[`moreSections[${i}].title`],
//             description: req.body[`moreSections[${i}].description`],
//             title_ar: req.body[`moreSections[${i}].title_ar`],
//             description_ar: req.body[`moreSections[${i}].description_ar`],
//             image:    image !== undefined ? image :
//             (typeof req.body[`moreSections[${i}].image`]=== "object" ?req.body[`moreSections[${i}].image`][0] : req.body[`moreSections[${i}].image`]) ,
//             image_ar:imageAr !== undefined ? imageAr :
//                    typeof req.body[`moreSections[${i}].image_ar`] === "object" ? req.body[`moreSections[${i}].image_ar`][0] : req.body[`moreSections[${i}].image_ar`],
//           };
//      }
//           console.log("OBJJJJJJJJJ", obj);
//           moreSections.push(obj);
//         }
//       const data = {
//         id: id,
//         name: req.body.name === "undefined" ? '' : req.body.name,
//         name_ar: req.body.name_ar === "undefined" ? '' : req.body.name_ar,
//         description: req.body.description === "undefined" ? '' : req.body.description,
//         description_ar: req.body.description_ar === "undefined" ? '' : req.body.description_ar,
//         image1: image1,
//         image1_title: req.body.image1_title === "undefined" ? '' : req.body.image1_title,
//         image1_title_ar: req.body.image1_title_ar === "undefined" ? '' : req.body.image1_title_ar,
//         image1_description: req.body.image1_description === "undefined" ? '' : req.body.image1_description,
//         image1_description_ar: req.body.image1_description_ar === "undefined" ? '' : req.body.image1_description_ar,
//         image2: image2,
//         image2_title: req.body.image2_title === "undefined" ? '' : req.body.image2_title,
//         image2_title_ar: req.body.image2_title_ar === "undefined" ? '' : req.body.image2_title_ar,
//         image2_description: req.body.image2_description === "undefined" ? '' : req.body.image2_description,
//         image2_description_ar: req.body.image2_description_ar === "undefined" ? '' : req.body.image2_description_ar,
//         image3: image3,
//         image3_title: req.body.image3_title === "undefined" ? '' : req.body.image3_title,
//         image3_title_ar: req.body.image3_title_ar === "undefined" ? '' : req.body.image3_title_ar,
//         image3_description: req.body.image3_description === "undefined" ? '' : req.body.image3_description,
//         image3_description_ar: req.body.image3_description_ar === "undefined" ? '' : req.body.image3_description_ar,
//         image4: image4,
//         image4_title: req.body.image4_title === "undefined" ? '' : req.body.image4_title,
//         image4_title_ar: req.body.image4_title_ar === "undefined" ? '' : req.body.image4_title_ar,
//         image4_description: req.body.image4_description === "undefined" ? '' : req.body.image4_description,
//         image4_description_ar: req.body.image4_description_ar === "undefined" ? '' : req.body.image4_description_ar,
//         image5: image5,
//         image5_title: req.body.image5_title === "undefined" ? '' : req.body.image5_title,
//         image5_title_ar: req.body.image5_title_ar === "undefined" ? '' : req.body.image5_title_ar,
//         image5_description: req.body.image5_description === "undefined" ? '' : req.body.image5_description,
//         image5_description_ar: req.body.image5_description_ar === "undefined" ? '' : req.body.image5_description_ar,
//         moreSections: moreSections,
//         // drop_zone_images: drop_zone_images,
//         // image6_title: req.body.image6_title,
//         // image6_title_ar: req.body.image6_title_ar,
//         // image6_description: req.body.image6_description,
//         // image6_description_ar: req.body.image6_description_ar,
//         // video: video,
//         video_title: req.body.video_title === "undefined" ? '' : req.body.video_title,
//         video_title_ar: req.body.video_title_ar === "undefined" ? '' : req.body.video_title_ar,
//         modelAndConfiguration: req.body.modelAndConfiguration,
//         vr_link: req.body.vr_link === "undefined" ? '' : req.body.vr_link,
//         power: req.body.power === "undefined" ? '' : req.body.power,
//         torque: req.body.torque === "undefined" ? '' : req.body.torque,
//         wheelbase: req.body.wheelbase === "undefined" ? '' : req.body.wheelbase,
//         categoryId: req.body.categoryId,
//       };

//       const model = await Model.update(data, { where: { id: id } });
//       return res.json({
//         status: true,
//         message: "Model Update Successfully .",
//         data: model,
//         code: 200,
//       });
//     } else {
//       return res.json({
//         status: false,
//         message: "Model  is  Not Update",
//         code: 404,
//       });
//     }
//   } catch (error) {
//     return res.json({ status: false, message: error.message, code: 500 });
//   }
// };

// export default updateModel;
