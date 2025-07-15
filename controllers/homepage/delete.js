import Homepage from "../../models/homePage.js";

const deleteHomepage = async (req, res) => {
  try {
    const id = req.params.id;

    const homepage = await Homepage.findOne({
      where: {
        id: id,
      },
    });
    if (homepage) {
      const homepageDelete = await Homepage.destroy({
        where: { id: req.params.id },
      });

      if (homepageDelete) {
        return res.json({
          status: true,
          message: "Homepage Deleted Successfully.",
          data: homepageDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Homepage is Not Deleted",
          code: 404,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "Homepage Not Found ",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default deleteHomepage;
