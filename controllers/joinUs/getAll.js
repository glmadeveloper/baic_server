import JoinUs from "../../models/joinUs.js";

const getAllJoinUs = async (req, res) => {
  try {
    const joinUs = await JoinUs.findAll();

    if (joinUs) {
      return res.json({
        status: true,
        message: "Join Us List Successfully Located.",
        data: joinUs,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Join Us is Not listed",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllJoinUs;
