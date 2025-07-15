import DataProtection from "../../models/dataProtection.js";

const deleteDataProtection = async (req, res) => {
  try {
    const id = req.params.id;

    const dataProtection = await DataProtection.findOne({
      where: {
        id: id,
      },
    });
    if (dataProtection) {
      const dataProtectionDelete = await DataProtection.destroy({
        where: { id: req.params.id },
      });

      if (dataProtectionDelete) {
        return res.json({
          status: true,
          message: "Data Protection Deleted Successfully.",
          data: dataProtectionDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Data Protection is Not Deleted",
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

export default deleteDataProtection;
