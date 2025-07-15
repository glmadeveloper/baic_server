import JobCategories from '../../models/jobCategories.js';

const getOneJobCategories = async (req, res) => {
  try {
    let id = req.params.id;

    const jobCategories = await JobCategories.findOne({ where: { id: id } });
    if (jobCategories) {
      return res.json({
        status: true,
        message: 'job Categories Category got Successfully.',
        data: jobCategories,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: 'job Categories Not Found',
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default getOneJobCategories;
