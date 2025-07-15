import JoinUs from "../../models/joinUs.js";
import _ from "lodash";
import fs from "fs";

const __dirname = process.env.ROOTPATH;
const imagePath1 = __dirname + "/uploads/.tmp/";
const updateJoinUs = async (req, res) => {
  try {
    const id = req.params.id;
    const files = req.files;
    console.log("FILES IN JOIN US ", files);
    const find = await JoinUs.findOne({
      where: {
        id: id,
      },
    });
    if (find) {
      if (!_.isEmpty(files)) {
        let pdf =
          typeof req.files.pdf !== "undefined" ? req.files.pdf[0].filename : "";
        console.log(" IMAGE", pdf);
        if (_.isEmpty(pdf)) {
          pdf = find.dataValues.pdf ? find.dataValues.pdf : "";
        }
        if (!_.isEmpty(pdf)) {
          console.log("first", imagePath1 + find.dataValues.pdf);
          pdf = pdf ? pdf : find.dataValues.pdf;
          if (
            req.body.pdf &&
            req.body.pdf !== null &&
            req.body.pdf &&
            req.body.pdf !== "null" &&
            req.body.pdf &&
            req.body.pdf !== undefined &&
            req.body.pdf &&
            req.body.pdf !== "undefined" &&
            find.dataValues.pdf !== null &&
            find.dataValues.pdf !== "null" &&
            find.dataValues.pdf !== undefined &&
            find.dataValues.pdf !== "undefined"
          ) {
            fs.unlinkSync(imagePath1 + find.dataValues.pdf);
          }

          console.log("First IAGE", pdf);
        }
      }
      const data = {
        id: id,
        gender: req.body.gender,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        nationality: req.body.nationality,
        jobTitle: req.body.jobTitle,
        countryCode: req.body.countryCode,
        message: req.body.message,
        pdf: pdf,
      };

      const joinUs = await JoinUs.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: "Join Us Update Successfully .",
        data: data,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: "Join US is Not Update",
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateJoinUs;
