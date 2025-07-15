import Homepage from "../../models/homePage.js";

const getAllHomepage = async (req, res) => {
  try {
    const homepage = await Homepage.findAll();

    if (homepage) {
      return res.json({
        status: true,
        message: "Homepage List Successfully Located.",
        data: homepage,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Homepage is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllHomepage;
