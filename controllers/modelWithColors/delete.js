import ModelWithColors from "../../models/modelWithColors.js";

const deleteModelWithColors = async (req, res) => {
    try {
      const id = req.params.id;
  
      const model = await ModelWithColors.findOne({
        where: {
          id: id,
        },
      });
      if (model) {
        const modelDelete = await ModelWithColors.destroy({
          where: { id: req.params.id },
        });
  
        if (modelDelete) {
          return res.json({
            status: true,
            message: "Model With Colors Deleted Successfully.",
            data: modelDelete,
            code: 200,
          });
        } else {
          return res.json({
            status: false,
            message: "Model With Colors is Not Deleted",
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
  
  export default deleteModelWithColors;