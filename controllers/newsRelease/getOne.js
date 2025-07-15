import NewsRelease from "../../models/newsRelease.js";

const getOneNewsRelease = async (req, res) => {
  try {
    let id = req.params.id;

    const newsRelease = await NewsRelease.findOne({ where: { id: id } });
    if (newsRelease) {
      return res.json({
        status: true,
        message: "News Release got Successfully.",
        data: newsRelease,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "News Release Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneNewsRelease;
