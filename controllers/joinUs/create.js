import JoinUs from '../../models/joinUs.js';

const createJoinUs = async (req, res) => {
  try {
    


    // console.log('IMAGE', req.files.pdf[0].filename);

    const data = {
      gender: req.body.gender,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      nationality: req.body.nationality,
      jobTitle: req.body.jobTitle,
      countryCode: req.body.countryCode,
      message: req.body.message,
      // pdf: pdf,
    };
    const joinUs = await JoinUs.create(data);

    if (joinUs) {
      return res.json({
        status: true,
        message: 'Join Us Created Successfully.',
        data: joinUs,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: 'Join Us is Not Created',
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default createJoinUs;
