import FeatureService from "../../models/featureService.js";

const deleteFeatureService = async (req, res) => {
  try {
    const id = req.params.id;

    const feature = await FeatureService.findOne({
      where: {
        id: id,
      },
    });
    if (feature) {
      const featureDelete = await FeatureService.destroy({
        where: { id: req.params.id },
      });

      if (featureDelete) {
        return res.json({
          status: true,
          message: "Feature Service Deleted Successfully.",
          data: featureDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Feature Service is Not Deleted",
          code: 404,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "Data Not Found ",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default deleteFeatureService;
