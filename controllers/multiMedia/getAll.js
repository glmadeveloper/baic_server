import MultiMedia from "../../models/multiMedia.js";
import Model from "../../models/model.js";
const getAllMultiMedia = async (req, res) => {
  try {
    const multiMedia = await MultiMedia.findAll({
      include: [
        {
          model: Model,
        },
      ],
    });

    if (multiMedia) {
      return res.json({
        status: true,
        message: "Multi Media List Successfully Located.",
        data: multiMedia,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Multi Media is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllMultiMedia;
