import JobCategories from '../../models/jobCategories.js';

const deleteJobCategories = async (req, res) => {
  try {
    const id = req.params.id;

    const jobCategories = await JobCategories.findOne({
      where: {
        id: id,
      },
    });
    if (jobCategories) {
      const jobCategoriesDelete = await JobCategories.destroy({
        where: { id: req.params.id },
      });

      if (jobCategoriesDelete) {
        return res.json({
          status: true,
          message: 'Jobs Category Deleted Successfully.',
          data: jobCategoriesDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: 'Jobs Category is Not Deleted',
          code: 404,
        });
      }
    } else {
      return res.json({
        status: false,
        message: 'Data Not Found ',
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default deleteJobCategories;
