import TermsAndCondition from "../../models/termsAndCondition.js";

const updateTermsAndCondition = async (req, res) => {
  try {
    const id = req.params.id;

    const test = await TermsAndCondition.findOne({
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
      };

      const termsAndCondition = await TermsAndCondition.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: "Terms And Condition Update Successfully .",
        data: data,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Terms And Condition is Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateTermsAndCondition;
