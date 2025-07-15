import Homepage from "../../models/homePage.js";

const getOneHomepage = async (req, res) => {
  try {
    let id = req.params.id;

    const homepage = await Homepage.findOne({ where: { id: id } });
    if (homepage) {
      return res.json({
        status: true,
        message: "Homepage got Successfully.",
        data: homepage,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Homepage Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneHomepage;
