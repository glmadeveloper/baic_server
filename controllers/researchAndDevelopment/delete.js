import ResearchAndDevelopment from "../../models/researchAndDevelopment.js";

const deleteResearch = async (req, res) => {
  try {
    const id = req.params.id;

    const researchAndDevelopment = await ResearchAndDevelopment.findOne({
      where: {
        id: id,
      },
    });
    if (researchAndDevelopment) {
      const deleteResearchAndDevelopment = await ResearchAndDevelopment.destroy(
        {
          where: { id: req.params.id },
        }
      );

      if (deleteResearchAndDevelopment) {
        return res.json({
          status: true,
          message: "Research And Development Deleted Successfully.",
          data: deleteResearchAndDevelopment,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Research And Development is Not Deleted",
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

export default deleteResearch;
