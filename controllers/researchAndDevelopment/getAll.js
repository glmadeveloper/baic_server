import ResearchAndDevelopment from "../../models/researchAndDevelopment.js";

const getAllResearch = async (req, res) => {
  try {
    const researchAndDevelopment = await ResearchAndDevelopment.findAll();

    if (researchAndDevelopment) {
      return res.json({
        status: true,
        message: "Research And Development List Successfully Located.",
        data: researchAndDevelopment,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Research And Development is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllResearch;
