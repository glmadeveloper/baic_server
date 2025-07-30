import AfterSalesService from "../../models/afterSalesService.js";

const createAfterSalesService = async (req, res) => {
  try {
    console.log("IMAGE", req.files);
    console.log("BODY", req.body);
    let bannerImage = req.files[0].filename ? req.files[0].filename : "";
    let worldImage = req.files[1].filename ? req.files[1].filename : "";
    let featureImage = req.files[2].filename ? req.files[2].filename : "";
    //   console.log("IMAGE", req.files);

    const data = {
      title: req.body.title,
      title_ar: req.body.title_ar,
      subTitle: req.body.subTitle,
      subTitle_ar: req.body.subTitle_ar,
      bannerImage: bannerImage,

      worldTitle: req.body.worldTitle,
      worldTitle_ar: req.body.worldTitle_ar,
      worldSubTitle: req.body.worldSubTitle,
      worldSubTitle_ar: req.body.worldSubTitle_ar,
      worldimage: worldImage,
      featureTitle: req.body.featureTitle,
      featureTitle_ar: req.body.featureTitle_ar,
      featureSubTitle: req.body.featureSubTitle,
      featureSubTitle_ar: req.body.featureSubTitle_ar,
      featureimage: featureImage,
      meta_description: req.body.meta_description,
      meta_title: req.body.meta_title,
      meta_keywords: req.body.meta_keywords,
    };
    const afterSalesService = await AfterSalesService.create(data);

    if (afterSalesService) {
      return res.json({
        status: true,
        message: "After Sales Service Created Successfully.",
        data: afterSalesService,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "After Sales Service is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createAfterSalesService;
