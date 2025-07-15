import MediaContact from "../../models/mediaContact.js";

const getAllMediaContact = async (req, res) => {
  try {
    const mediaContact = await MediaContact.findAll();

    if (mediaContact) {
      return res.json({
        status: true,
        message: "Media Contact List Successfully Located.",
        data: mediaContact,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Media Contact is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default getAllMediaContact;
