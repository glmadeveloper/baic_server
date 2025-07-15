import Subscribe from "../../models/subscribe.js";

const createSubscription = async (req, res) => {
  try {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mediaName: req.body.mediaName,
      email: req.body.email,
      mediaIntroduction: req.body.mediaIntroduction,
    };

    const contact = await Subscribe.create(data);

    if (contact) {
      return res.json({
        status: true,
        message: "Subscription Created Successfully.",
        data: contact,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Subscription is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createSubscription;
