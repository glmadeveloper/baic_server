import Worldwide from "../../models/worldwide.js";

const deleteWorldWide = async (req, res) => {
  try {
    const id = req.params.id;

    const worldwide = await Worldwide.findOne({
      where: {
        id: id,
      },
    });
    if (worldwide) {
      const worldwideDelete = await Worldwide.destroy({
        where: { id: req.params.id },
      });

      if (worldwideDelete) {
        return res.json({
          status: true,
          message: "World wide Deleted Successfully.",
          data: worldwideDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "World wide is Not Deleted",
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

export default deleteWorldWide;
