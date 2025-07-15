import TermsAndCondition from "../../models/termsAndCondition.js";

const getOneTermsAndCondition = async (req, res) => {
  try {
    let id = req.params.id;

    const termsAndCondition = await TermsAndCondition.findOne({
      where: { id: id },
    });
    if (termsAndCondition) {
      return res.json({
        status: true,
        message: "Terms And Condition got Successfully.",
        data: termsAndCondition,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Terms And Condition Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneTermsAndCondition;
