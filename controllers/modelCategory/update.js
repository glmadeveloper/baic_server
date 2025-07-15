import ModelCategory from "../../models/modelCategory.js";
import _ from "lodash";

const updateModelCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const test = await ModelCategory.findOne({
      where: {
        id: id,
      },
    });

    if (test) {
      const data = {
        name: req.body.name,
        name_ar: req.body.name_ar,
      };

      const modelCategory = await ModelCategory.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: "Model Category Update Successfully .",
        data: data,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Model Category is  Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateModelCategory;
