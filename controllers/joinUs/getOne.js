import JoinUs from "../../models/joinUs.js";

const getOneJoinUs = async (req, res) => {
  try {
    let id = req.params.id;

    const joinUs = await JoinUs.findOne({ where: { id: id } });
    if (joinUs) {
      return res.json({
        status: true,
        message: "Join Us got Successfully.",
        data: joinUs,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Join Us Not Found",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneJoinUs;
