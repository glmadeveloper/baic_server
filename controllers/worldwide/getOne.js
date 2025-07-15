import Worldwide from "../../models/worldwide.js";

const getOneWorldWide = async (req, res) => {
  try {
    let id = req.params.id;

    const worldwide = await Worldwide.findOne({ where: { id: id } });
    if (worldwide) {
      return res.json({
        status: true,
        message: "World wide got Successfully.",
        data: worldwide,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "World wide Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneWorldWide;
