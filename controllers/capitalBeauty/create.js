import CapitalBeauty from "../../models/capitalBeauty.js";

const createCapitalBeauty = async (req, res) => {
  try {
    console.log("IMAGE", req.files);
    console.log("BODY", req.body);
    let bannerImage = req.files[0].filename ? req.files[0].filename : "";
    let image1 = req.files[1].filename ? req.files[1].filename : "";
    let gdImage1 = req.files[2].filename ? req.files[2].filename : "";
    let gdImage2 = req.files[3].filename ? req.files[3].filename : "";
    let gdImage3 = req.files[4].filename ? req.files[4].filename : "";
    let gdImage4 = req.files[5].filename ? req.files[5].filename : "";
    let gdImage5 = req.files[6].filename ? req.files[6].filename : "";
    let image2 = req.files[7].filename ? req.files[7].filename : "";
    let image3 = req.files[8].filename ? req.files[8].filename : "";
    let image4 = req.files[9].filename ? req.files[9].filename : "";

    //   console.log("IMAGE", req.files);

    const data = {
      bannerImage: bannerImage,
      bannerTitle: req.body.bannerTitle,
      bannerTitle_ar: req.body.bannerTitle_ar,
      bannerSubTitle: req.body.bannerSubTitle,
      bannerSubTitle_ar: req.body.bannerSubTitle_ar,
      image1: image1,
      image1Description: req.body.image1Description,
      image1Description_ar: req.body.image1Description_ar,
      gdImage1: gdImage1,
      gdImage2: gdImage2,
      gdImage3: gdImage3,
      gdImage4: gdImage4,
      gdImage5: gdImage5,
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
      image4: image4,
      meta_description: req.body.meta_description,
      meta_title: req.body.meta_title,
      meta_keywords: req.body.meta_keywords,
    };
    const capitalBeauty = await CapitalBeauty.create(data);

    if (capitalBeauty) {
      return res.json({
        status: true,
        message: "Capital Beauty Created Successfully.",
        data: capitalBeauty,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Capital Beauty is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createCapitalBeauty;
