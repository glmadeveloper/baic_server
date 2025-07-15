import TermsAndCondition from "../../models/termsAndCondition.js";

const deleteTermsAndCondition = async (req, res) => {
  try {
    const id = req.params.id;

    const termsAndCondition = await TermsAndCondition.findOne({
      where: {
        id: id,
      },
    });
    if (termsAndCondition) {
      const termsAndConditionDelete = await TermsAndCondition.destroy({
        where: { id: req.params.id },
      });

      if (termsAndConditionDelete) {
        return res.json({
          status: true,
          message: "Terms And Condition Deleted Successfully.",
          data: termsAndConditionDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Terms And Condition is Not Deleted",
          code: 404,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "Data Not Found ",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default deleteTermsAndCondition;
