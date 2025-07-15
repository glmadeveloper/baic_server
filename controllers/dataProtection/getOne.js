import DataProtection from "../../models/dataProtection.js";

const getOneDataProtection = async (req, res) => {
  try {
    let id = req.params.id;

    const dataProtection = await DataProtection.findOne({
      where: { id: id },
    });
    if (dataProtection) {
      return res.json({
        status: true,
        message: "Data Protection got Successfully.",
        data: dataProtection,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Data Protection Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneDataProtection;
