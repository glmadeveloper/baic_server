import ConceptCar from "../../models/conceptCar.js";
const createConceptCar = async (req, res) => {
  try {
    console.log("IMAGE", req.files);
    console.log("BODY", req.body);
    let bannerImage = req.files[0].filename ? req.files[0].filename : "";
    let section_1_image = req.files[1].filename ? req.files[1].filename : "";
    let section_2_image = req.files[2].filename ? req.files[2].filename : "";
    let section_3_image = req.files[3].filename ? req.files[3].filename : "";
    let section_4_image1 = req.files[4].filename ? req.files[4].filename : "";
    let section_4_image2 = req.files[5].filename ? req.files[5].filename : "";
    let section_4_image3 = req.files[6].filename ? req.files[6].filename : "";
    let section_5_image = req.files[7].filename ? req.files[7].filename : "";
    let section_6_image = req.files[8].filename ? req.files[8].filename : "";
    let section_7_image = req.files[9].filename ? req.files[9].filename : "";
    let section_8_image = req.files[10].filename ? req.files[10].filename : "";
    let section_9_image = req.files[11].filename ? req.files[11].filename : "";
    let section_10_image1 = req.files[12].filename
      ? req.files[12].filename
      : "";
    let section_10_image2 = req.files[13].filename
      ? req.files[13].filename
      : "";
    let section_10_image3 = req.files[14].filename
      ? req.files[14].filename
      : "";
    let section_10_image4 = req.files[15].filename
      ? req.files[15].filename
      : "";
    //   console.log("IMAGE", req.files);

    const data = {
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
    const conceptCar = await ConceptCar.create(data);

    if (conceptCar) {
      return res.json({
        status: true,
        message: "Concept Car Created Successfully.",
        data: conceptCar,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Concept Car is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createConceptCar;
