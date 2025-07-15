import ModelCategory from "../../models/modelCategory.js";
const getAllModelCategory = async (req, res) => {
  try {
    const modelCategory = await ModelCategory.findAll();

    if (modelCategory) {
      return res.json({
        status: true,
        message: "Model Category List Successfully Located.",
        data: modelCategory,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Model Category is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllModelCategory;
