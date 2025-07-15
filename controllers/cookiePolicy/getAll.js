import CookiePolicy from "../../models/cookiePolicy.js";
const getAllCookiePolicy = async (req, res) => {
  try {
    const cookiePolicy = await CookiePolicy.findAll();

    if (cookiePolicy) {
      return res.json({
        status: true,
        message: "Cookie Policy List Successfully Located.",
        data: cookiePolicy,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Cookie Policy is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllCookiePolicy;
