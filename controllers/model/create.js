







import Model from "../../models/model.js";
import path from "path"; // For handling file paths
import fs from "fs"; // For file operations
import mkdirp from "mkdirp"; // For creating directories if they don't exist
import { fileURLToPath } from "url";
import { dirname } from "path";
import { v4 as uuidv4 } from "uuid"; // Import uuid to generate unique filenames

// Get the equivalent of __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const createModel = async (req, res) => {
  try {
    console.log("BODY", req.body);
    console.log("FILES", req.files);

    const existingModel = await Model.findOne({ where: { name: req.body.name } });
    // console.log(existingModel)
    if (existingModel) {
      return res.status(400).json({
        status: false,
        message: "Error: A model with this name already exists.",
        code: 400,
      });
    }


    // Initialize arrays to store files and section data
    let normalSections = [];
    let advancedSections = [];

    // Ensure the directory exists for saving images
    const uploadDir = path.join(__dirname, "../../public/uploads");
    console.log('Resolved path:', uploadDir);  // Check if the path is correct
    console.log('sdsdsdsds');
    await mkdirp(uploadDir); // Create the directory if it doesn't exist
    console.log('sdsdsdsds2222');

    

    let image1Path = "";


    // Process `image2` field
    let image2Path = "";
    req.files.forEach(file => {
      const fieldname = file.fieldname;

      // Process `image1` field
      if (fieldname === 'image1') {
        image1Path = file.filename;
      }

      // Process `image2` field
      if (fieldname === 'image2') {
        image2Path = file.filename;
      }
    })

    // Validate if image1 and image2 are uploaded
    if (!image1Path) {
      return res.status(400).json({
        status: false,
        message: "Error: Image 1 is required.",
        code: 400,
      });
    }

    if (!image2Path) {
      return res.status(400).json({
        status: false,
        message: "Error: Image 2 is required.",
        code: 400,
      });
    }
    // Handle normal sections if designType is 'normal'
    if (req.body.designType === "normal" && req.body.normalSections && Array.isArray(req.body.normalSections)) {
      req.body.normalSections.forEach((section, index) => {
        let normalSectionObj = {
          title_en: section.title_en || '',
          title_ar: section.title_ar || '',
          description_en: section.description_en || '',
          description_ar: section.description_ar || '',
          image_en: "",
          image_ar: "",
        };

        // Handle image uploads for normal sections
        if (req.files) {
          const image_en_file = req.files.find(file => file.fieldname === `normalSections[${index}][image_en]`);
          const image_ar_file = req.files.find(file => file.fieldname === `normalSections[${index}][image_ar]`);

          // Save images to the directory and store the full path in the database
         // Save images to the directory and store the full path in the database
        
         if (image_en_file) {
          normalSectionObj.image_en = image_en_file.filename;
        }

        if (image_ar_file) {
          normalSectionObj.image_ar = image_ar_file.filename;
        }

        }

        normalSections.push(normalSectionObj);
      });

      const validNormalSection = normalSections.some(section => section.image_en && section.image_ar);
      if (!validNormalSection) {
        return res.status(400).json({
          status: false,
          message: "Error: At least one normal section must have valid images.",
          code: 400,
        });
      }
    }


    if (req.body.designType === "advanced" && req.body.advancedSections) {
      console.log(req.body)
      const requiredSections = ['section1', 'section2', 'section3','section4'];

      requiredSections.forEach((section) => {
        if (Array.isArray(req.body.advancedSections[section])) {
          const advancedSectionObjs = req.body.advancedSections[section].map((advancedSection, i) => {
            const advancedSectionObj = {
              title_en: advancedSection.title_en || '',
              title_ar: advancedSection.title_ar || '',
              description_en: advancedSection.description_en || '',
              description_ar: advancedSection.description_ar || '',
              image_en: "",
              image_ar: "",
            };

            // Image handling
            if (req.files) {
              const image_en_file = req.files.find(file => file.fieldname === `advancedSections[${section}][${i}][image_en]`);
              const image_ar_file = req.files.find(file => file.fieldname === `advancedSections[${section}][${i}][image_ar]`);
              console.log(image_en_file,'en')
              console.log(image_ar_file,'ar')

              if (image_en_file) {
                advancedSectionObj.image_en = image_en_file.filename;
              }

              if (image_ar_file) {
                advancedSectionObj.image_ar = image_ar_file.filename;
              }

            }

            return advancedSectionObj;
          });

          advancedSections.push({ [section]: advancedSectionObjs });
        }
      });

      // Check for section 1: At least 4 items with valid images
      // const validSection1 = req.body.advancedSections.section1.filter((section) => {
      //   return section.image_en && section.image_ar;
      // }).length >= 4;

      // if (!validSection1) {
      //   return res.status(400).json({
      //     status: false,
      //     message: "Error: Section 1 must have at least 4 items with valid images.",
      //     code: 400,
      //   });
      // }

      // // Check for section 2: At least 2 items with valid images
      // const validSection2 = req.body.advancedSections.section2.filter((section) => {
      //   return section.image_en && section.image_ar;
      // }).length >= 2;

      // if (!validSection2) {
      //   return res.status(400).json({
      //     status: false,
      //     message: "Error: Section 2 must have at least 2 items with valid images.",
      //     code: 400,
      //   });
      // }

      // // Check for section 3: At least 3 items with valid images
      // const validSection3 = req.body.advancedSections.section3.filter((section) => {
      //   return section.image_en && section.image_ar;
      // }).length >= 3;

      // if (!validSection3) {
      //   return res.status(400).json({
      //     status: false,
      //     message: "Error: Section 3 must have at least 3 items with valid images.",
      //     code: 400,
      //   });
      // }

      // // Check for section 4: At least 2 items with valid images
      // const validSection4 = req.body.advancedSections.section4.filter((section) => {
      //   return section.image_en && section.image_ar;
      // }).length >= 2;

      // if (!validSection4) {
      //   return res.status(400).json({
      //     status: false,
      //     message: "Error: Section 4 must have at least 2 items with valid images.",
      //     code: 400,
      //   });
      // }
    }


    // Prepare data to be inserted into the database
    const data = {
      image1: image1Path,
      image1_title: req.body.image1_title || '',
      image1_title_ar: req.body.image1_title_ar || '',
      image1_description_ar: req.body.image1_description_ar || '',
      image1_description: req.body.image1_description || '',

      image2: image2Path,
      image2_title: req.body.image2_title || '',
      image2_title_ar: req.body.image2_title_ar || '',
      image2_description: req.body.image2_description || '',
      image2_description_ar: req.body.image2_description_ar || '',

      name: req.body.name || '',
      name_ar: req.body.name_ar || '',
      description: req.body.description || '',
      description_ar: req.body.description_ar || '',
      modelAndConfiguration: req.body.modelAndConfiguration || '',
      vr_link: req.body.vr_link || '',
      power: req.body.power || '',
      torque: req.body.torque || '',
      wheelbase: req.body.wheelbase || '',
      designType: req.body.designType,
      normalSections: normalSections.length ? normalSections : null,
      advancedSections: advancedSections.length ? advancedSections : null,
      categoryId: req.body.categoryId || null,
    };

    const model = await Model.create(data);

    if (model) {
      console.log(model,'created')
      return res.json({
        status: true,
        message: "Model Created Successfully.",
        data: model,
        code: 200,
      });
    } else {
      console.log(model,'failed')
      return res.json({
        status: false,
        message: "Model is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    console.log(error)
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createModel;

















