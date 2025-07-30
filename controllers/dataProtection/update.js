import DataProtection from "../../models/dataProtection.js";

const updateDataProtection = async (req, res) => {
  try {
    const id = req.params.id;

    const test = await DataProtection.findOne({
      where: {
        id: id,
      },
    });

    if (test) {
      const data = {
        id: id,
        title: req.body.title,
        title_ar: req.body.title_ar,
        description: req.body.description,
        description_ar: req.body.description_ar,
        meta_description: req.body.meta_description,
        meta_title: req.body.meta_title,
        meta_keywords: req.body.meta_keywords,
      };

      const dataProtection = await DataProtection.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: "Data Protection Update Successfully .",
        data: data,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Data Protection is Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateDataProtection;
