import Subscribe from "../../models/subscribe.js";

const getOneSubscribe = async (req, res) => {
  try {
    let id = req.params.id;

    const subscribe = await Subscribe.findOne({ where: { id: id } });
    if (subscribe) {
      return res.json({
        status: true,
        message: "Subscribe got Successfully.",
        data: subscribe,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Subscribe Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneSubscribe;
