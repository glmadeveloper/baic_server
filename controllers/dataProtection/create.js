import DataProtection from "../../models/dataProtection.js";

const createDataProtection = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      title_ar: req.body.title_ar,
      description: req.body.description,
      description_ar: req.body.description_ar,
    };
    const dataProtection = await DataProtection.create(data);

    if (dataProtection) {
      return res.json({
        status: true,
        message: "Data Protection Created Successfully!",
        data: dataProtection,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Dat Protection is Not Created!!!",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createDataProtection;
