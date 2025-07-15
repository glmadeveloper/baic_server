import CookiePolicy from "../../models/cookiePolicy.js";

const createCookiePolicy = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      title_ar: req.body.title_ar,
      description: req.body.description,
      description_ar: req.body.description_ar,
    };
    const cookiePolicy = await CookiePolicy.create(data);

    if (cookiePolicy) {
      return res.json({
        status: true,
        message: "Cookie Policy Created Successfully!",
        data: cookiePolicy,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Cookie Policy is Not Created!!!",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createCookiePolicy;
