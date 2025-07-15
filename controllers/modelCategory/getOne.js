import ModelCategory from "../../models/modelCategory.js";

const getOneModelCategory = async (req, res) => {
  try {
    let id = req.params.id;

    const modelCategory = await ModelCategory.findOne({ where: { id: id } });
    if (modelCategory) {
      return res.json({
        status: true,
        message: "Model Category got Successfully.",
        data: modelCategory,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Model Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default getOneModelCategory;
