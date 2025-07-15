import DataProtection from "../../models/dataProtection.js";

const getAllDataProtection = async (req, res) => {
  try {
    const dataProtection = await DataProtection.findAll();

    if (dataProtection) {
      return res.json({
        status: true,
        message: "Data Protection List Successfully Located.",
        data: dataProtection,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Data Protection is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllDataProtection;
