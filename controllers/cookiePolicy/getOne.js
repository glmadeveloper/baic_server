import CookiePolicy from "../../models/cookiePolicy.js";

const getOneCookiePolicy = async (req, res) => {
  try {
    let id = req.params.id;

    const cookiePolicy = await CookiePolicy.findOne({
      where: { id: id },
    });
    if (cookiePolicy) {
      return res.json({
        status: true,
        message: "Cookie Policy got Successfully.",
        data: cookiePolicy,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Cookie Policy Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneCookiePolicy;
