import Homepage from "../../models/homePage.js";

const createHomepage = async (req, res) => {
  try {
    console.log("IMAGE", req.files);
    console.log("BODY", req.body);
    let banner_image1 = req.files[0].filename ? req.files[0].filename : "";
    let banner_image2 = req.files[1].filename ? req.files[1].filename : "";
    let banner_image3 = req.files[2].filename ? req.files[2].filename : "";
    let logo = req.files[3].filename ? req.files[3].filename : "";

    //   console.log("IMAGE", req.files);

    const data = {
      banner_image1: banner_image1,
      banner_image1_title: req.body.banner_image1_title,
      banner_image1_title_ar: req.body.banner_image1_title_ar,
      banner_image1_description: req.body.banner_image1_description,
      banner_image1_description_ar: req.body.banner_image1_description_ar,
      banner_image1_button1: req.body.banner_image1_button1,
      banner_image1_button1_url: req.body.banner_image1_button1_url,
      banner_image1_button2: req.body.banner_image1_button2,
      banner_image1_button2_url: req.body.banner_image1_button2_url,
      banner_image2: banner_image2,
      banner_image2_title: req.body.banner_image2_title,
      banner_image2_title_ar: req.body.banner_image2_title_ar,
      banner_image2_description: req.body.banner_image2_description,
      banner_image2_description_ar: req.body.banner_image2_description_ar,
      banner_image2_button1: req.body.banner_image2_button1,
      banner_image2_button1_url: req.body.banner_image2_button1_url,
      banner_image2_button2: req.body.banner_image2_button2,
      banner_image2_button2_url: req.body.banner_image2_button2_url,
      banner_image3: banner_image3,
      banner_image3_title: req.body.banner_image3_title,
      banner_image3_title_ar: req.body.banner_image3_title_ar,
      banner_image3_description: req.body.banner_image3_description,
      banner_image3_description_ar: req.body.banner_image3_description_ar,
      banner_image3_button1: req.body.banner_image3_button1,
      banner_image3_button1_url: req.body.banner_image3_button1_url,
      banner_image3_button2: req.body.banner_image3_button2,
      banner_image3_button2_url: req.body.banner_image3_button2_url,
      instagram_link: req.body.instagram_link,
      facebook_link: req.body.facebook_link,
      linkedin_link: req.body.linkedin_link,
      logo: logo,
    };
    const homepage = await Homepage.create(data);

    if (homepage) {
      return res.json({
        status: true,
        message: "Homepage Created Successfully.",
        data: homepage,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Homepage is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createHomepage;
