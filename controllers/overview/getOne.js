import OverView from "../../models/overView.js";

const getOneOverview = async (req, res) => {
  try {
    let id = req.params.id;

    const overView = await OverView.findOne({ where: { id: id } });
    if (overView) {
      return res.json({
        status: true,
        message: "Overview got Successfully.",
        data: overView,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Overview Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneOverview;
