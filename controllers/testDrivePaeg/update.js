import TestDrivePage from "../../models/testDrivePage.js";

const updateTestDrivePage = async (req, res) => {
  try {
    const id = req.params.id;

    const test = await TestDrivePage.findOne({
      where: {
        id: id,
      },
    });

    if (test) {
      const data = {
        id: id,
        meta_description: req.body.meta_description,
        meta_title: req.body.meta_title,
        meta_keywords: req.body.meta_keywords,
      };

      const testDrivePage = await TestDrivePage.update(data, { where: { id: id } });
      return res.json({
        status: true,
        message: "Test Drive Update Successfully .",
        data: testDrivePage,
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

export default updateTestDrivePage;
