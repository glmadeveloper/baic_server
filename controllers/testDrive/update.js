import TestDrive from "../../models/testDrive.js";

const updateTestDrive = async (req, res) => {
  try {
    const id = req.params.id;

    const test = await TestDrive.findOne({
      where: {
        id: id,
      },
    });

    if (test) {
      const data = {
        id: id,
        country: req.body.country,
        gender: req.body.gender,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        modelId: req.body.modelId,
      };

      const testDrive = await TestDrive.update(data, { where: { id: id } });
      return res.json({
        status: true,
        message: "Test Drive Update Successfully .",
        data: testDrive,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Test Drive is Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateTestDrive;
