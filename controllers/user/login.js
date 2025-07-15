import User from "../../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const login = async (req, res) => {
  const API_SECRET = process.env.API_SECRET;
  try {
    const agent = await User.findOne({
      where: { email: req.body.email },
    });

    if (agent) {
      console.log("req pass", req.body.password);
      console.log("agent pass", agent.dataValues.password);
      let verify = await bcrypt.compare(
        req.body.password,
        agent.dataValues.password
      );

      console.log("VERIFY", verify);

      if (verify === true) {
        console.log("VERIFY INNNNNNNN", verify);

        const token = jwt.sign(
          {
            id: agent.dataValues.id,
            email: agent.dataValues.email,
            name: agent.dataValues.name,
          },
          API_SECRET,
          { expiresIn: "1d" }
        );

        const response = {
          user: {
            id: agent.dataValues.id,
            email: agent.dataValues.email,
            name: agent.dataValues.name,
          },
          authToken: token,
        };
        res.json({
          status: true,
          message: "Login Successfull.",
          data: {
            token: response,
          },
          code: 200,
        });
      } else {
        res.json({
          status: false,
          message: "Username or Password is incorrect !",
          code: 404,
        });
      }
    } else {
      res.json({
        status: false,
        message: "No account found with this email!",
        code: 404,
      });
    }
  } catch (error) {
    res.json({ status: false, message: error.message, code: 500 });
  }
};

export default login;
