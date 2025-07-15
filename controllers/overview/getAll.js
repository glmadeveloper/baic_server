import OverView from "../../models/overView.js";

const getAllOverview = async (req, res) => {
  try {
    const overView = await OverView.findAll();

    if (overView) {
      return res.json({
        status: true,
        message: "Overview List Successfully Located.",
        data: overView,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Overview is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default getAllOverview;
