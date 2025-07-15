import ModelCategory from "../../models/modelCategory.js";

const deleteModelCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const modelCategory = await ModelCategory.findOne({
      where: {
        id: id,
      },
    });
    if (modelCategory) {
      const modelCategoryDelete = await ModelCategory.destroy({
        where: { id: req.params.id },
      });

      if (modelCategoryDelete) {
        return res.json({
          status: true,
          message: "Model Category Deleted Successfully.",
          data: modelCategoryDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Model Category is Not Deleted",
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

export default deleteModelCategory;
