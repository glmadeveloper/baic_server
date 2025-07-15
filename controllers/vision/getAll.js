import Vision from "../../models/vision.js";


const getAllVision = async (req, res) => {
  try {
    const vision = await Vision.findAll();

    if (vision) {
      return res.json({
        status: true,
        message: "Vision List Successfully Located.",
        data: vision,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Vision is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default getAllVision;
