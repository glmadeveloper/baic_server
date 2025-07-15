import NewsRelease from "../../models/newsRelease.js";

const createNewsRelease = async (req, res) => {
  try {
    let image = req.files.image[0].filename;
    console.log("IMAGE", image);

    const data = {
      title: req.body.title,
      title_ar: req.body.title_ar,
      subTitle: req.body.subTitle,
      subTitle_ar: req.body.subTitle_ar,
      description: req.body.description,
      description_ar: req.body.description_ar,
      otherNews: req.body.otherNews,
      image: image,
    };
    const newsRelease = await NewsRelease.create(data);

    if (newsRelease) {
      return res.json({
        status: true,
        message: "News Release Created Successfully.",
        data: newsRelease,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "News Release is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default createNewsRelease;
