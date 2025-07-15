import JoinUs from "../../models/joinUs.js";

const deleteJoinUs = async (req, res) => {
  try {
    const id = req.params.id;

    const joinUs = await JoinUs.findOne({
      where: {
        id: id,
      },
    });
    if (joinUs) {
      const joinUsDelete = await JoinUs.destroy({
        where: { id: req.params.id },
      });

      if (joinUsDelete) {
        return res.json({
          status: true,
          message: "Join Us Deleted Successfully.",
          data: joinUsDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Join Us is Not Deleted",
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

export default deleteJoinUs;
