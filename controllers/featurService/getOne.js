import FeatureService from "../../models/featureService.js";

const getOneFeatureService = async (req, res) => {
  try {
    let id = req.params.id;

    const feature = await FeatureService.findOne({ where: { id: id } });
    if (feature) {
      return res.json({
        status: true,
        message: "Feature got Successfully.",
        data: feature,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Feature Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneFeatureService;
