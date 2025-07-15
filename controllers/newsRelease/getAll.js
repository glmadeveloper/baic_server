import NewsRelease from "../../models/newsRelease.js";

const getAllNewswRelease = async (req, res) => {
  try {
    const newsRelease = await NewsRelease.findAll();

    if (newsRelease) {
      return res.json({
        status: true,
        message: "News Release List Successfully Located.",
        data: newsRelease,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "News Release is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllNewswRelease;
