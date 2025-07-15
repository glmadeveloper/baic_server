import ModelWithColors from "../../models/modelWithColors.js";
import Model from "../../models/model.js";
const getAllModelWithColors = async (req, res) => {
    try {
      const model = await ModelWithColors.findAll({
        include: [
          {
            model: Model,
          },
        ],
      });
  
      if (model) {
        return res.json({
          status: true,
          message: "Model With Colors List Successfully Located.",
          data: model,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Model With Colors is Not listed",
          code: 404,
        });
      }
    } catch (error) {
      return res.json({ status: false, message: error.message, code: 500 });
    }
  };
  
  export default getAllModelWithColors;
  