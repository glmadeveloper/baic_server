import History from "../../models/history.js";

const createHistory = async (req, res) => {
  try {
    let image = req.files.image[0].filename;
    console.log("IMAGE", image);

    const data = {
      year: req.body.year,
      description: req.body.description,
      description_ar: req.body.description_ar,
      image: image,
    };
    const history = await History.create(data);

    if (history) {
      return res.json({
        status: true,
        message: "Blog Created Successfully.",
        data: history,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Blog is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createHistory;
