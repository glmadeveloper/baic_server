import OffRoad from "../../models/offRoad.js";
const getOneOffRoad = async (req, res) => {
  try {
    let id = req.params.id;

    const offRoad = await OffRoad.findOne({ where: { id: id } });
    if (offRoad) {
      return res.json({
        status: true,
        message: "Off Road got Successfully.",
        data: offRoad,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Off Road Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneOffRoad;
