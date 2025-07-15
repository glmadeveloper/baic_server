import OffRoad from "../../models/offRoad.js";

const getAllOffRoad = async (req, res) => {
  try {
    const offRoad = await OffRoad.findAll();

    if (offRoad) {
      return res.json({
        status: true,
        message: "Off Road List Successfully Located.",
        data: offRoad,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Off Road is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default getAllOffRoad;
