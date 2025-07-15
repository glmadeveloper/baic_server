import FeatureService from "../../models/featureService.js";

const createFeatureService = async (req, res) => {
  try {
    let image = req.files.image[0].filename;
    console.log("IMAGE", image);

    const data = {
      title: req.body.title,
      title_ar: req.body.title_ar,

      image: image,
    };
    const feature = await FeatureService.create(data);

    if (feature) {
      return res.json({
        status: true,
        message: "Feature Service Created Successfully.",
        data: feature,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Feature Service is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createFeatureService;
