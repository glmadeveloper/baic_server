import History from "../../models/history.js";

const getAllHistory = async (req, res) => {
  try {
    const history = await History.findAll();

    if (history) {
      return res.json({
        status: true,
        message: "History List Successfully Located.",
        data: history,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "History is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default getAllHistory;
