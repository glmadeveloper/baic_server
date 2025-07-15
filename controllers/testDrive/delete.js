import TestDrive from "../../models/testDrive.js";

const deleteTestDrive = async (req, res) => {
  try {
    const id = req.params.id;

    const testDrive = await TestDrive.findOne({
      where: {
        id: id,
      },
    });
    if (testDrive) {
      const testDriveDelete = await TestDrive.destroy({
        where: { id: req.params.id },
      });

      if (testDriveDelete) {
        return res.json({
          status: true,
          message: "Test Drive Deleted Successfully.",
          data: testDriveDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: "Test Drive is Not Deleted",
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

export default deleteTestDrive;
