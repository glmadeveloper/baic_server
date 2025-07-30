import ResearchAndDevelopment from "../../models/researchAndDevelopment.js";

const createResearch = async (req, res) => {
  try {
    console.log("IMAGE", req.files);
    console.log("BODY", req.body);
    let banner_image = req.files[0].filename ? req.files[0].filename : "";
    let section2_image = req.files[1].filename ? req.files[1].filename : "";
    let section3_image = req.files[2].filename ? req.files[2].filename : "";
    let section4_right_image = req.files[3].filename
      ? req.files[3].filename
      : "";
    let section4_left_image = req.files[4].filename
      ? req.files[4].filename
      : "";
    let section5_image = req.files[5].filename ? req.files[5].filename : "";
    let section7_image = req.files[6].filename ? req.files[6].filename : "";
    let section8_right_image = req.files[7].filename
      ? req.files[7].filename
      : "";
    let section8_left_image = req.files[8].filename
      ? req.files[8].filename
      : "";
    let section8_left_image1 = req.files[9].filename
      ? req.files[9].filename
      : "";
    let section9_image = req.files[10].filename ? req.files[10].filename : "";
    let section10_image = req.files[11].filename ? req.files[11].filename : "";
    let section11_image = req.files[12].filename ? req.files[12].filename : "";
    let section12_image = req.files[13].filename ? req.files[13].filename : "";
    let section13_left_image = req.files[14].filename
      ? req.files[14].filename
      : "";
    let section14_image = req.files[15].filename ? req.files[15].filename : "";
    //   console.log("IMAGE", req.files);

    const data = {
      banner_image: banner_image,
      banner_title: req.body.banner_title,
      banner_title_ar: req.body.banner_title_ar,
      section1_title: req.body.section1_title,
      section1_title_ar: req.body.section1_title_ar,
      section1_short_description_1: req.body.section1_short_description_1,
      section1_short_description_1_ar: req.body.section1_short_description_1_ar,
      section1_short_description_2: req.body.section1_short_description_2,
      section1_short_description_2_ar: req.body.section1_short_description_2_ar,
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
      meta_description: req.body.meta_description,
      meta_title: req.body.meta_title,
      meta_keywords: req.body.meta_keywords,
    };
    const researchAndDevelopment = await ResearchAndDevelopment.create(data);

    if (researchAndDevelopment) {
      return res.json({
        status: true,
        message: "Research And Development Created Successfully.",
        data: researchAndDevelopment,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Research And Development is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createResearch;
