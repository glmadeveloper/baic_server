import Vision from "../../models/vision.js";

const getOneVision = async (req, res) => {
    try {
      let id = req.params.id;
  
      const vision = await Vision.findOne({ where: { id: id } });
      if (vision) {
        return res.json({
          status: true,
          message: "Vision got Successfully.",
          data: vision,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Vision Not Found",
          code: 404,
        });
      }
    } catch (error) {
      return res.json({ status: false, message: error.message, code: 500 });
    }
  };
  
  export default getOneVision;