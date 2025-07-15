import Worldwide from "../../models/worldwide.js";

const createWorldWide = async (req, res) => {
  try {
    let image = req.files.image[0].filename;
    console.log("IMAGE", image);

    const data = {
      image: image,
    };
    const worldwide = await Worldwide.create(data);

    if (worldwide) {
      return res.json({
        status: true,
        message: "World wide Created Successfully.",
        data: worldwide,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "World wide is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createWorldWide;
