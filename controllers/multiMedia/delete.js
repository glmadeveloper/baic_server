import MultiMedia from "../../models/multiMedia.js";

const deleteMultiMedia = async (req, res) => {
  try {
    const id = req.params.id;

    const multiMedia = await MultiMedia.findOne({
      where: {
        id: id,
      },
    });
    if (multiMedia) {
      const multiMediaDelete = await MultiMedia.destroy({
        where: { id: req.params.id },
      });

      if (multiMediaDelete) {
        return res.json({
          status: true,
          message: "Multi Media Deleted Successfully.",
          data: multiMediaDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Multi Media is Not Deleted",
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

export default deleteMultiMedia;
