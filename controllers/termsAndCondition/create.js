import TermsAndCondition from "../../models/termsAndCondition.js";

const createTermsAndCondition = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      title_ar: req.body.title_ar,
      description: req.body.description,
      description_ar: req.body.description_ar,
    };
    const termsAndCondition = await TermsAndCondition.create(data);

    if (termsAndCondition) {
      return res.json({
        status: true,
        message: "Terms And Condition Created Successfully!",
        data: termsAndCondition,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Terms And Condition is Not Created!!!",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createTermsAndCondition;
