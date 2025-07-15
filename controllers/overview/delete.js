import OverView from "../../models/overView.js";

const deleteOverview = async (req, res) => {
  try {
    const id = req.params.id;

    const overView = await OverView.findOne({
      where: {
        id: id,
      },
    });
    if (overView) {
      const overviewDelete = await OverView.destroy({
        where: { id: req.params.id },
      });

      if (overviewDelete) {
        return res.json({
          status: true,
          message: "Overview Deleted Successfully.",
          data: overviewDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Overview  is  Not Deleted",
          code: 404,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "Data Not Found ",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default deleteOverview;
