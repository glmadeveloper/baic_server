import FeatureService from "../../models/featureService.js";

const getAllFeatureService = async (req, res) => {
  try {
    const feature = await FeatureService.findAll();

    if (feature) {
      return res.json({
        status: true,
        message: "Feature List Successfully Located.",
        data: feature,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Feature is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllFeatureService;
