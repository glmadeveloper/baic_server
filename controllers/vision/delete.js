import Vision from "../../models/vision.js";

const deleteVision = async (req, res) => {
    try {
        const id = req.params.id;
    
        const vision = await Vision.findOne({
          where: {
            id: id,
          },
        });
        if (vision) {
          const visionDelete = await Vision.destroy({
            where: { id: req.params.id },
          });
    
          if (visionDelete) {
            return res.json({
              status: true,
              message: "Vision Deleted Successfully.",
              data: visionDelete,
              code: 200,
            });
          } else {
            return res.json({
              status: false,
              message: "Vision  is  Not Deleted",
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
}

export default deleteVision;