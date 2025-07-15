import Subscribe from "../../models/subscribe.js";

const getAllSubscribe = async (req, res) => {
  try {
    const subscribe = await Subscribe.findAll();

    if (subscribe) {
      return res.json({
        status: true,
        message: "Subscribe List Successfully Located.",
        data: subscribe,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Subscribet is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default getAllSubscribe;
