import Model from "../../models/model.js";
import ModelCategory from "../../models/modelCategory.js";

// const getOneModel = async (req, res) => {
//   // try {
//   let id = req.params.id;
//   console.log(id, 'Fetching model with id');

//   const model = await Model.findOne({
//     where: { name: id },
//     include: [
//       {
//         model: ModelCategory,
//       },
//     ],
//   });

//   if (!model) {
//     return res.json({
//       status: false,
//       message: "Model Not Found",
//       code: 404,
//     });
//   }

//   let obj = {
//     ...model.dataValues,
//   };

//   // Handle image paths for normal sections
//   if (model.dataValues.designType === "normal" && model.dataValues.normalSections) {
//     if (typeof model.dataValues.normalSections === "string") {
//       model.dataValues.normalSections = JSON.parse(model.dataValues.normalSections); // Convert JSON string to an array
//     }
//     model.dataValues.normalSections.forEach((section) => {
//       console.log(section)
//       if (section.image_en) {
//         section.image_en = `${section.image_en}`;
//       }
//       if (section.image_ar) {
//         section.image_ar = `${section.image_ar}`;
//       }
//     });
//   }

//   // Handle image paths for advanced sections
//   if (model.dataValues.designType === "advanced" && model.dataValues.advancedSections) {
//     if (typeof model.dataValues.advancedSections === "string") {
//       model.dataValues.advancedSections = JSON.parse(model.dataValues.advancedSections); // Convert JSON string to an array
//     }
//     model.dataValues.advancedSections.forEach((section) => {
//       if (section.image_en) {
//         section.image_en = `${section.image_en}`;
//       }
//       if (section.image_ar) {
//         section.image_ar = `${section.image_ar}`;
//       }
//     });
//   }

//   // Check if `moreSections` exists and is a valid JSON string
//   if (model.dataValues.moreSections) {
//     try {
//       obj.moreSections = JSON.parse(model.dataValues.moreSections);
//       console.log('Model One Get - moreSections:', obj.moreSections);
//     } catch (err) {
//       // Handle the case where `moreSections` is not valid JSON
//       console.error('Error parsing moreSections:', err);
//       obj.moreSections = []; // Default to empty array or handle as needed
//     }
//   } else {
//     obj.moreSections = []; // Handle case where moreSections is missing or null
//   }

//   console.log(obj, 'object')
//   return res.json({
//     status: true,
//     message: "Model got Successfully.",
//     data: obj,
//     code: 200,
//   });

//   // } catch (error) {
//   //   console.error('Error fetching model:', error);
//   //   return res.json({ status: false, message: error.message, code: 500 });
//   // }
// };

// export default getOneModel;


const getOneModel = async (req, res) => {
  let id = req.params.id;
  console.log(id, 'Fetching model with id');

  const model = await Model.findOne({
    where: { name: id },
    include: [
      {
        model: ModelCategory,
      },
    ],
  });

  if (!model) {
    return res.json({
      status: false,
      message: "Model Not Found",
      code: 404,
    });
  }

  let obj = {
    ...model.dataValues,
  };

  // **Parse `normalSections` to ensure it's an array**
  if (model.dataValues.designType === "normal" && model.dataValues.normalSections) {
    if (typeof model.dataValues.normalSections === "string") {
      try {
        obj.normalSections = JSON.parse(model.dataValues.normalSections); // Convert JSON string to an array
      } catch (error) {
        console.error("Error parsing normalSections:", error);
        obj.normalSections = []; // Default to empty array if parsing fails
      }
    } else {
      obj.normalSections = model.dataValues.normalSections; // Already an object, keep as is
    }

    // Ensure normalSections is an array before modifying it
    if (Array.isArray(obj.normalSections)) {
      obj.normalSections.forEach((section) => {
        if (section.image_en) {
          section.image_en = `${section.image_en}`;
        }
        if (section.image_ar) {
          section.image_ar = `${section.image_ar}`;
        }
      });
    } else {
      console.error("Error: normalSections is not an array.");
      obj.normalSections = [];
    }
  }

  // **Parse `advancedSections` if it exists**
  if (model.dataValues.designType === "advanced" && model.dataValues.advancedSections) {
    if (typeof model.dataValues.advancedSections === "string") {
      try {
        obj.advancedSections = JSON.parse(model.dataValues.advancedSections);
      } catch (error) {
        console.error("Error parsing advancedSections:", error);
        obj.advancedSections = [];
      }
    } else {
      obj.advancedSections = model.dataValues.advancedSections;
    }

    if (Array.isArray(obj.advancedSections)) {
      obj.advancedSections.forEach((section) => {
        if (section.image_en) {
          section.image_en = `${section.image_en}`;
        }
        if (section.image_ar) {
          section.image_ar = `${section.image_ar}`;
        }
      });
    } else {
      console.error("Error: advancedSections is not an array.");
      obj.advancedSections = [];
    }
  }

  // **Parse `moreSections` if it exists**
  if (model.dataValues.moreSections) {
    try {
      obj.moreSections = JSON.parse(model.dataValues.moreSections);
      console.log('Model One Get - moreSections:', obj.moreSections);
    } catch (err) {
      console.error('Error parsing moreSections:', err);
      obj.moreSections = [];
    }
  } else {
    obj.moreSections = [];
  }

  console.log(obj, 'object');
  return res.json({
    status: true,
    message: "Model got Successfully.",
    data: obj,
    code: 200,
  });
};

export default getOneModel;
