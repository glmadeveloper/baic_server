import ConceptCar from "../../models/conceptCar.js";

const getOneConceptCar = async (req, res) => {
  try {
    let id = req.params.id;

    const conceptCar = await ConceptCar.findOne({ where: { id: id } });
    if (conceptCar) {
      return res.json({
        status: true,
        message: "Concept Car got Successfully.",
        data: conceptCar,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Concept Car Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneConceptCar;
