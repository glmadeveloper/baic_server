import Job from '../../models/job.js';
import _ from 'lodash';

const updateJob = async (req, res) => {
  try {
    const id = req.params.id;

    const test = await Job.findOne({
      where: {
        id: id,
      },
    });

    if (test) {
      const data = {
        title: req.body.title,
        title_ar: req.body.title_ar,
        description: req.body.description,
        description_ar: req.body.description_ar,
        location: req.body.location,
        location_ar: req.body.location_ar,
        categoryId: req.body.categoryId,
      };

      const job = await Job.update(data, {
        where: { id: id },
      });
      return res.json({
        status: true,
        message: ' Job Update Successfully .',
        data: job,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: 'Job is Not Update',
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default updateJob;
