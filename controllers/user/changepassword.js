import User from "../../models/user.js";
import bcrypt from "bcrypt";

const changepassword = async (req, res) => {
  try {
    const agent = await User.findOne({
      where: { email: req.user.email },
    });

    if (!agent) {
      return res.json({
        status: false,
        message: "No account found with this user!",
        data:agent,
        code: 404,
      });
    }

    // ✅ verify old password
    const verify = await bcrypt.compare(
      req.body.current_password,
      agent.password
    );

    if (!verify) {
      return res.json({
        status: false,
        message: "Current password is incorrect!",
        code: 400,
      });
    }

    // ✅ hash new password
    const hashedPassword = await bcrypt.hash(req.body.new_password, 10);

    // ✅ update password in DB
    await User.update(
      { password: hashedPassword },
      { where: { email: req.user.email } }
    );

    return res.json({
      status: true,
      message: "Password changed successfully.",
      code: 200,
    });
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default changepassword;