import History from "../../models/history.js";

const getOneHistory = async (req, res) => {
  try {
    let id = req.params.id;

    const history = await History.findOne({ where: { id: id } });
    if (history) {
      return res.json({
        status: true,
        message: "History got Successfully.",
        data: history,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "History Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneHistory;
