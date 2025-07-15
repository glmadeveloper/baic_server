import CapitalBeauty from "../../models/capitalBeauty.js";

const getAllCapitalBeauty = async (req, res) => {
  try {
    const capitalBeauty = await CapitalBeauty.findAll();

    if (capitalBeauty) {
      return res.json({
        status: true,
        message: "Capital Beauty List Successfully Located.",
        data: capitalBeauty,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Capital Beauty is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllCapitalBeauty;
