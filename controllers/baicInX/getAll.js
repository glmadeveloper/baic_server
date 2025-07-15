import BaicInX from "../../models/baicInX.js";

const getAllBaicInX = async (req, res) => {
  try {
    const baicInX = await BaicInX.findAll();

    if (baicInX) {
      return res.json({
        status: true,
        message: "Baic In X List Successfully Located.",
        data: baicInX,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Baic In X is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllBaicInX;
