import ConceptCar from "../../models/conceptCar.js";

const getAllConceptCar = async (req, res) => {
  try {
    const conceptCar = await ConceptCar.findAll();

    if (conceptCar) {
      return res.json({
        status: true,
        message: "Concept Car List Successfully Located.",
        data: conceptCar,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Concept Car is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllConceptCar;
