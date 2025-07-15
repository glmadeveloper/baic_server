import Model from "../../models/model.js";
import TestDrive from "../../models/testDrive.js";

const getOneTestDrive = async (req, res) => {
  try {
    let id = req.params.id;

    const testDrive = await TestDrive.findOne({
      where: { id: id },
      include: [
        {
          model: Model,
        },
      ],
    });
    if (testDrive) {
      return res.json({
        status: true,
        message: "Test Drive got Successfully.",
        data: testDrive,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Test Drive Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneTestDrive;
