import ContactUs from "../../models/contactUs.js";
import MediaContact from "../../models/mediaContact.js";
import Subscribe from "../../models/subscribe.js";
import TestDrive from "../../models/testDrive.js";

const count = async (req, res) => {
  try {
    const contactUs = await ContactUs.findAll();
    const mediaContact = await MediaContact.findAll();
    const subscribe = await Subscribe.findAll();
    const testDrive = await TestDrive.findAll();
    let data = {
      contactUsCount: contactUs ? contactUs.length : "",
      mediaContactCount: mediaContact ? mediaContact.length : "",
      subscribeCount: subscribe ? subscribe.length : "",
      testDriveCount: testDrive ? testDrive.length : "",
    };
    return res.json({
      status: true,
      message: "Cookie Policy List Successfully Located.",
      data: data,
      code: 200,
    });
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default count;
