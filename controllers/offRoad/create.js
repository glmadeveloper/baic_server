import OffRoad from "../../models/offRoad.js";

const createOffRoad = async (req, res) => {
  try {
    console.log("IMAGE", req.files);
    console.log("BODY", req.body);
    let bannerImage = req.files[0].filename ? req.files[0].filename : "";
    let image1 = req.files[1].filename ? req.files[1].filename : "";
    let image2 = req.files[2].filename ? req.files[2].filename : "";
    let image3 = req.files[3].filename ? req.files[3].filename : "";
    //   console.log("IMAGE", req.files);

    const data = {
      bannerImage: bannerImage,
      bannerTitle: req.body.bannerTitle,
      bannerTitle_ar: req.body.bannerTitle_ar,
      bannerDescription: req.body.bannerDescription,
      bannerDescription_ar: req.body.bannerDescription_ar,
      image1: image1,
      image1Title: req.body.image1Title,
      image1Title_ar: req.body.image1Title_ar,
      image1Description: req.body.image1Description,
      image1Description_ar: req.body.image1Description_ar,
      image1MainDescription: req.body.image1MainDescription,
      image1MainDescription_ar: req.body.image1MainDescription_ar,
      image2: image2,
      image2Title: req.body.image2Title,
      image2Title_ar: req.body.image2Title_ar,
      image2Description: req.body.image2Description,
      image2Description_ar: req.body.image2Description_ar,
      image3: image3,
      image3Title: req.body.image3Title,
      image3Title_ar: req.body.image3Title_ar,
      image3Description: req.body.image3Description,
      image3Description_ar: req.body.image3Description_ar,
      meta_description: req.body.meta_description,
      meta_title: req.body.meta_title,
      meta_keywords: req.body.meta_keywords,
    };
    const offRoad = await OffRoad.create(data);

    if (offRoad) {
      return res.json({
        status: true,
        message: "Off Road Created Successfully.",
        data: offRoad,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Off Road is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createOffRoad;
