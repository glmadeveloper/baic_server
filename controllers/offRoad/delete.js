import OffRoad from "../../models/offRoad.js";

const deleteOffRoad = async (req, res) => {
  try {
    const id = req.params.id;

    const offRoad = await OffRoad.findOne({
      where: {
        id: id,
      },
    });
    if (offRoad) {
      const offRoadDelete = await OffRoad.destroy({
        where: { id: req.params.id },
      });

      if (offRoadDelete) {
        return res.json({
          status: true,
          message: "Off Road Deleted Successfully.",
          data: offRoadDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Off Road is  Not Deleted",
          code: 404,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "After Sales service Not Found ",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default deleteOffRoad;
