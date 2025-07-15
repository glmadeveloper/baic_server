import ContactUs from "../../models/contactUs.js";

const getAllContact = async (req, res) => {
  try {
    // const contact = await ContactUs.findAll();
    const contact = await ContactUs.findAll({
      order: [['createdAt', 'DESC']], // Replace 'createdAt' with the column name you want to sort by
    });

    if (contact) {
      return res.json({
        status: true,
        message: "Contact List Successfully Located.",
        data: contact,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Contact is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default getAllContact;
