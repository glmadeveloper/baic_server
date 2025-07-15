import CapitalBeauty from "../../models/capitalBeauty.js";

const deleteCapitalBeauty = async (req, res) => {
  try {
    const id = req.params.id;

    const capitalBeauty = await CapitalBeauty.findOne({
      where: {
        id: id,
      },
    });
    if (capitalBeauty) {
      const capitalBeautyDelete = await CapitalBeauty.destroy({
        where: { id: req.params.id },
      });

      if (capitalBeautyDelete) {
        return res.json({
          status: true,
          message: "capital Beauty Deleted Successfully.",
          data: capitalBeautyDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "capital Beauty is  Not Deleted",
          code: 404,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "capital Beauty Not Found ",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default deleteCapitalBeauty;
