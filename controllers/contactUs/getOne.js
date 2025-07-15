import ContactUs from "../../models/contactUs.js";

const getOneContact = async (req, res) => {
  try {
    let id = req.params.id;

    const contact = await ContactUs.findOne({ where: { id: id } });
    if (contact) {
      return res.json({
        status: true,
        message: "Contact got Successfully.",
        data: contact,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Contact Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneContact;
