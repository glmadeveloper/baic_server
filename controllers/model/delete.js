import Model from "../../models/model.js";

const deleteModel = async (req, res) => {
  try {
    const id = req.params.id;

    const model = await Model.findOne({
      where: {
        id: id,
      },
    });
    if (model) {
      const modelDelete = await Model.destroy({
        where: { id: req.params.id },
      });

      if (modelDelete) {
        return res.json({
          status: true,
          message: "Model Deleted Successfully.",
          data: modelDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Model  is  Not Deleted",
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

export default deleteModel;
