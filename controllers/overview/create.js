import OverView from "../../models/overView.js";

const createOverview = async (req, res) => {
  try {
    let banner_image = req.files[0].filename ? req.files[0].filename : "";
    let section1_image = req.files[1].filename ? req.files[1].filename : "";
    let section2_image = req.files[2].filename ? req.files[2].filename : "";
    let section3_image = req.files[2].filename ? req.files[2].filename : "";
    const data = {
      banner_description: req.body.banner_description,
      banner_description_ar: req.body.banner_description_ar,
      banner_image: banner_image,
      banner_title: req.body.banner_title,
      banner_title_ar: req.body.banner_title_ar,
      section1_image: section1_image,
      section1_title: req.body.section1_title,
      section1_title_ar: req.body.section1_title_ar,
      section1_description: req.body.section1_description,
      section1_description_ar: req.body.section1_description_ar,
      section2_image: section2_image,
      section2_image_title1: req.body.section2_image_title1,
      section2_image_title1_ar: req.body.section2_image_title1_ar,
      section2_image_title2: req.body.section2_image_title2,
      section2_image_title2_ar: req.body.section2_image_title2_ar,
      section2_title: req.body.section2_title,
      section2_title_ar: req.body.section2_title_ar,
      section2_description: req.body.section2_description,
      section2_description_ar: req.body.section2_description_ar,
      section3_image: section3_image,
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
      meta_description: req.body.meta_description,
      meta_title: req.body.meta_title,
      meta_keywords: req.body.meta_keywords,
    };
    const overView = await OverView.create(data);

    if (overView) {
      return res.json({
        status: true,
        message: "Overview Created Successfully.",
        data: overView,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Overview is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createOverview;
