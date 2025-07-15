import MediaContact from "../../models/mediaContact.js";

const getOneMediaContact = async (req, res) => {
  try {
    let id = req.params.id;

    const mediaContact = await MediaContact.findOne({ where: { id: id } });
    if (mediaContact) {
      return res.json({
        status: true,
        message: "Media Contact got Successfully.",
        data: mediaContact,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Media Contact Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneMediaContact;
