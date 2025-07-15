import History from "../../models/history.js";

const deleteHistory = async (req, res) => {
  try {
    const id = req.params.id;

    const history = await History.findOne({
      where: {
        id: id,
      },
    });
    if (history) {
      const historyDelete = await History.destroy({
        where: { id: req.params.id },
      });

      if (historyDelete) {
        return res.json({
          status: true,
          message: "History Deleted Successfully.",
          data: historyDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "History  is  Not Deleted",
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

export default deleteHistory;
