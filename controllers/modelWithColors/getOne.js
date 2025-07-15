import ModelWithColors from "../../models/modelWithColors.js";
import Model from "../../models/model.js";
const getOneModelWithColors = async (req, res) => {
  try {
    let id = req.params.id;

    const model = await ModelWithColors.findOne({
      where: { id: id },
      include: [
        {
          model: Model,
        },
      ],
    });
    if (model) {
      return res.json({
        status: true,
        message: "Model With Colors got Successfully.",
        data: model,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Model With Colors Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default getOneModelWithColors;