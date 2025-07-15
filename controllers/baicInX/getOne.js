import BaicInX from "../../models/baicInX.js";

const getOneBaicInX = async (req, res) => {
  try {
    let id = req.params.id;

    const baicInX = await BaicInX.findOne({ where: { id: id } });
    if (baicInX) {
      return res.json({
        status: true,
        message: "Baic In X got Successfully.",
        data: baicInX,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Baic In X Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneBaicInX;
