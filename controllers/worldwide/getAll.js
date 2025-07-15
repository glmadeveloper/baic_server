import Worldwide from "../../models/worldwide.js";

const getAllWorldWide = async (req, res) => {
  try {
    const worldwide = await Worldwide.findAll();

    if (worldwide) {
      return res.json({
        status: true,
        message: "World wide List Successfully Located.",
        data: worldwide,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "World wide is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllWorldWide;
