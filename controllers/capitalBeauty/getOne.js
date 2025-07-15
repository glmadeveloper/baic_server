import CapitalBeauty from "../../models/capitalBeauty.js";

const getOneCapitalBeauty = async (req, res) => {
  try {
    let id = req.params.id;

    const capitalBeauty = await CapitalBeauty.findOne({ where: { id: id } });
    if (capitalBeauty) {
      return res.json({
        status: true,
        message: "Capital Beauty got Successfully.",
        data: capitalBeauty,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Capital Beauty Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneCapitalBeauty;
