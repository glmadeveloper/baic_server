import CookiePolicy from "../../models/cookiePolicy.js";

const deleteCookiePolicy = async (req, res) => {
  try {
    const id = req.params.id;

    const cookiePolicy = await CookiePolicy.findOne({
      where: {
        id: id,
      },
    });
    if (cookiePolicy) {
      const cookiePolicyDelete = await CookiePolicy.destroy({
        where: { id: req.params.id },
      });

      if (cookiePolicyDelete) {
        return res.json({
          status: true,
          message: "Cookie Policy Deleted Successfully.",
          data: cookiePolicyDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Cookie Policy is Not Deleted",
          code: 404,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "Data Not Found ",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default deleteCookiePolicy;
