import MultiMedia from "../../models/multiMedia.js";
import Model from "../../models/model.js";
const getOneMultiMedia = async (req, res) => {
  try {
    let id = req.params.id;

    const multiMedia = await MultiMedia.findOne({
      where: { id: id },
      include: [
        {
          model: Model,
        },
      ],
    });
    if (multiMedia) {
      return res.json({
        status: true,
        message: "Multi Media got Successfully.",
        data: multiMedia,
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

export default getOneMultiMedia;
