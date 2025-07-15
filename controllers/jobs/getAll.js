import Job from '../../models/job.js';
import JobCategories from '../../models/jobCategories.js';

const getAllJob = async (req, res) => {
  try {
    const job = await Job.findAll({
      // include: [
      //   {
      //     model: JobCategories,
      //   },
      // ],
    });

    if (job) {
      return res.json(job);
    } else {
      return res.json({
        status: false,
        message: 'Job is Not listed',
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getAllJob;
