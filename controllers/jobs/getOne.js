import Job from '../../models/job.js';

const getOneJob = async (req, res) => {
  try {
    let id = req.params.id;

    const job = await Job.findOne({ where: { id: id } });
    if (Job) {
      return res.json({
        status: true,
        message: 'Job got Successfully.',
        data: job,
        code: 200,
      });
    } else {
      return res.json({
        status: false,
        message: 'Job Not Found',
        code: 404,
      });
    }
  } catch (error) {
    return res.json({ status: false, message: error.message, code: 500 });
  }
};

export default getOneJob;
