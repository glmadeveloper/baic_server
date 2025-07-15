import JobCategories from '../../models/jobCategories.js';
const getAllJobCategories = async (req, res) => {
  try {
    const jobCategories = await JobCategories.findAll();

    if (jobCategories) {
      return res.json(jobCategories);
    } else {
      return res.json({
        status: false,
        message: 'Jobs Category is Not listed',
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllJobCategories;
