import BaicInX from "../../models/baicInX.js";

const createBaicInX = async (req, res) => {
  try {
    console.log("IMAGE", req.files);
    console.log("BODY", req.body);
    let bannerImage = req.files[0].filename ? req.files[0].filename : "";
    let image1 = req.files[1].filename ? req.files[1].filename : "";
    let image2 = req.files[2].filename ? req.files[2].filename : "";
    let image3 = req.files[3].filename ? req.files[3].filename : "";
    let image4 = req.files[4].filename ? req.files[4].filename : "";
    let image5 = req.files[5].filename ? req.files[5].filename : "";
    let image6 = req.files[6].filename ? req.files[6].filename : "";
    let image7 = req.files[7].filename ? req.files[7].filename : "";
    let image8 = req.files[8].filename ? req.files[8].filename : "";
    let image9 = req.files[9].filename ? req.files[9].filename : "";

    //   console.log("IMAGE", req.files);

    const data = {
      bannerImage: bannerImage,
      bannerTitle: req.body.bannerTitle,
      bannerTitle_ar: req.body.bannerTitle_ar,
      image1: image1,
      image1Title: req.body.image1Title,
      image1Title_ar: req.body.image1Title_ar,
      image2: image2,
      image2Title: req.body.image2Title,
      image2Title_ar: req.body.image2Title_ar,
      image3: image3,
      image3Title: req.body.image3Title,
      image3Title_ar: req.body.image3Title_ar,
      image4: image4,
      image4Title: req.body.image4Title,
      image4Title_ar: req.body.image4Title_ar,
      image5: image5,
      image5Title: req.body.image5Title,
      image5Title_ar: req.body.image5Title_ar,
      image6: image6,
      image6Title: req.body.image6Title,
      image6Title_ar: req.body.image6Title_ar,
      image7: image7,
      image7Title: req.body.image7Title,
      image7Title_ar: req.body.image7Title_ar,
      image8: image8,
      image8Title: req.body.image8Title,
      image8Title_ar: req.body.image8Title_ar,
      image9: image9,
      image9Title: req.body.image9Title,
      image9Title_ar: req.body.image9Title_ar,
    };
    const baicInX = await BaicInX.create(data);

    if (baicInX) {
      return res.json({
        status: true,
        message: "Baic In X Created Successfully.",
        data: baicInX,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Baic In X is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createBaicInX;
