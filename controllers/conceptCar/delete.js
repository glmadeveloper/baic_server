import ConceptCar from "../../models/conceptCar.js";

const deleteConceptCar = async (req, res) => {
  try {
    const id = req.params.id;

    const conceptCar = await ConceptCar.findOne({
      where: {
        id: id,
      },
    });
    if (conceptCar) {
      const conceptCarDelete = await ConceptCar.destroy({
        where: { id: req.params.id },
      });

      if (conceptCarDelete) {
        return res.json({
          status: true,
          message: "Concept Car Deleted Successfully.",
          data: conceptCarDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Concept Car is Not Deleted",
          code: 404,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "After Sales service Not Found ",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default deleteConceptCar;
