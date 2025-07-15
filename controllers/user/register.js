import User from "../../models/user.js";
import bcrypt from "bcrypt";
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt();

    const hashPassword = await bcrypt.hash(password, salt);

    const data = {
      name: name,
      email: email,
      password: hashPassword,
    };

    const IsEmail = await User.findOne({
      where: { email: req.body.email },
    });

    if (IsEmail) {
      return res.json({
        status: true,
        message: "Email AllReady Exists.",
        code: 404,
      });
    }

    const user = await User.create(data);

    if (user) {
      return res.json({
        status: true,
        message: "Admin Created Successfully Located.",
        data: user,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Admin is Not Created",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default registerUser;
