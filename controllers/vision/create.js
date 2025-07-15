import Vision from "../../models/vision.js";

const createVision = async (req, res) => {
  try {
    let image = req.files.image[0].filename;
    console.log("IMAGE", image);

    const data = {
      title: req.body.title,
      title_ar: req.body.title_ar,
      subTitle: req.body.subTitle,
      subTitle_ar: req.body.subTitle_ar,
      image: image,
    };
    const vision = await Vision.create(data);

    if (vision) {
      return res.json({
        status: true,
        message: "Vision Created Successfully.",
        data: vision,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Vision is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default createVision;
