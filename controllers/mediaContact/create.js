import MediaContact from "../../models/mediaContact.js";

const createMediaContact = async (req, res) => {
  try {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mediaName: req.body.mediaName,
      email: req.body.email,
      gender: req.body.gender,
      mediaIntroduction: req.body.mediaIntroduction,
    };

    const contact = await MediaContact.create(data);

    if (contact) {
      return res.json({
        status: true,
        message: "Contact Created Successfully.",
        data: contact,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Contact is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createMediaContact;
