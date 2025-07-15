import Job from '../../models/job.js';

const createJob = async (req, res) => {

  try {
    const data = {
      title: req.body.title,
      title_ar: req.body.title_ar,
      description: req.body.description,
      description_ar: req.body.description_ar,
      location: req.body.location,
      location_ar: req.body.location_ar,
      categoryId: req.body.categoryId,
    };
    const job = await Job.create(data);

    if (job) {
      return res.json({
        status: true,
        message: 'Job Created Successfully.',
        data: job,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: 'Job is Not Created',
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};
export default createJob;
