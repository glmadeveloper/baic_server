import ModelWithColors from "../../models/modelWithColors.js";

const createModelWithColors = async (req, res) => {
  try {
    let image = req.files.image[0].filename;
    console.log("IMAGE", image);

    const data = {
      color: req.body.color,
      color_ar: req.body.color_ar,

      modelId: req.body.modelId,
      image: image,
    };
    const model = await ModelWithColors.create(data);

    if (model) {
      return res.json({
        status: true,
        message: "Model With Colors Created Successfully!",
        data: model,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Model is Not Created!!!",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default createModelWithColors;
