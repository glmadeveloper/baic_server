import NewsRelease from "../../models/newsRelease.js";

const deleteNewsRelease = async (req, res) => {
  try {
    const id = req.params.id;

    const newsRelease = await NewsRelease.findOne({
      where: {
        id: id,
      },
    });
    if (newsRelease) {
      const newsReleaseDelete = await NewsRelease.destroy({
        where: { id: req.params.id },
      });

      if (newsReleaseDelete) {
        return res.json({
          status: true,
          message: "News Release Deleted Successfully.",
          data: newsReleaseDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "News Release is Not Deleted",
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

export default deleteNewsRelease;
