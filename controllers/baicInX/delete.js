import BaicInX from "../../models/baicInX.js";

const deleteBaicInX = async (req, res) => {
  try {
    const id = req.params.id;

    const baicInX = await BaicInX.findOne({
      where: {
        id: id,
      },
    });
    if (baicInX) {
      const baicInXDelete = await BaicInX.destroy({
        where: { id: req.params.id },
      });

      if (baicInXDelete) {
        return res.json({
          status: true,
          message: "Baic In X Deleted Successfully.",
          data: baicInXDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Baic In X is Not Deleted",
          code: 404,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "Baic In X Not Found ",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default deleteBaicInX;
