import JobCategories from '../../models/jobCategories.js';
import _ from 'lodash';

const updateJobCategories = async (req, res) => {
  try {
    const id = req.params.id;

    const test = await JobCategories.findOne({
      where: {
        id: id,
      },
    });

    if (test) {
      const data = {
        jobCategeryName: req.body.jobCategeryName,
        jobCategeryName_ar: req.body.jobCategeryName_ar,
      };

      const jobCategories = await JobCategories.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: 'Jobs Category Update Successfully .',
        data: jobCategories,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: 'Jobs Category is  Not Update',
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateJobCategories;
