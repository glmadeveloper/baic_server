import TermsAndCondition from "../../models/termsAndCondition.js";

const getAllTermsAndCondition = async (req, res) => {
  try {
    const termsAndCondition = await TermsAndCondition.findAll();

    if (termsAndCondition) {
      return res.json({
        status: true,
        message: "Terms And Condition List Successfully Located.",
        data: termsAndCondition,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Terms And Condition is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllTermsAndCondition;
