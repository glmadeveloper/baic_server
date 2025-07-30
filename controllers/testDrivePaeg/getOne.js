import TestDrivePage from "../../models/testDrivePage.js";

const getOneTestDrivePage = async (req, res) => {
  try {
    let id = req.params.id;

    const testDrivePage = await TestDrivePage.findOne({
      where: { id: id },
    });
    if (testDrivePage) {
      return res.json({
        status: true,
        message: "Test Drive Page got Successfully.",
        data: testDrivePage,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Test Drive Page Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneTestDrivePage;
