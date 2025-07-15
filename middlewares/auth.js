import jwt from "jsonwebtoken";
import User from "../models/user.js";

const verifyToken = async (req, res, next) => {
  try {
    const API_SECRET = process.env.API_SECRET;
    let Authorization;
    if (req.headers["authorization"]) {
      Authorization = req.headers["authorization"].split("Bearer ")[1] || null;
    }

    if (Authorization !== null) {
      const secretKey = API_SECRET;

      await jwt.verify(Authorization, secretKey, async function (err, decoded) {
        if (err !== null) {
          return res.json({ status: false, message: err.message, code: 200 });
        }
        if (decoded) {
          req.user = decoded;
          next();
        } else {
          return res.json({
            status: false,
            message: "You Are Not Authorized.",
            code: 200,
          });
        }
      });
    } else {
      return res.json({
        status: false,
        message: "Token Not Found.",
        code: 200,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default verifyToken;
