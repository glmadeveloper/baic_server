import MultiMedia from "../../models/multiMedia.js";

const createMultiMedia = async (req, res) => {
  try {
    let media = req.files.media[0].filename;
    console.log("MEDIA", media);

    const data = {
      title: req.body.title,
      title_ar: req.body.title_ar,
      typeOfMedia: req.body.typeOfMedia,
      typeOfMedia_ar: req.body.typeOfMedia_ar,
      modelId: req.body.modelId,
      media: media,
    };
    const multiMedia = await MultiMedia.create(data);

    if (multiMedia) {
      return res.json({
        status: true,
        message: "Multi Media Created Successfully.",
        data: multiMedia,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Multi Media is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createMultiMedia;
