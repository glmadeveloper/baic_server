import Model from "../../models/model.js";
import TestDrive from "../../models/testDrive.js";

const getAllTestDrive = async (req, res) => {
  try {
    const testDrive = await TestDrive.findAll({
      include: [
        {
          model: Model,
        },
      ],
    });

    if (testDrive) {
      return res.json({
        status: true,
        message: "Test Drive List Successfully Located.",
        data: testDrive,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Test Drive With Colors is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllTestDrive;
