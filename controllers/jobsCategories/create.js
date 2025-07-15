import JobCategories from '../../models/jobCategories.js';

const createJobCategories = async (req, res) => {
  try {
    const data = {
      jobCategeryName: req.body.jobCategeryName,
      jobCategeryName_ar: req.body.jobCategeryName_ar,
    };
    const jobCategories = await JobCategories.create(data);

    if (jobCategories) {
      return res.json({
        status: true,
        message: 'Jobs Category Created Successfully.',
        data: jobCategories,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: 'Jobs Category is Not Created',
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default createJobCategories;
