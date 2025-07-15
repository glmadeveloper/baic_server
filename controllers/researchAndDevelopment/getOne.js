import ResearchAndDevelopment from "../../models/researchAndDevelopment.js";

const getOneResearch = async (req, res) => {
  try {
    let id = req.params.id;

    const researchAndDevelopment = await ResearchAndDevelopment.findOne({
      where: { id: id },
    });
    if (researchAndDevelopment) {
      return res.json({
        status: true,
        message: "Research And Development got Successfully.",
        data: researchAndDevelopment,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Research And Development Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneResearch;
