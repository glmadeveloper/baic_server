import Job from '../../models/job.js';

const deleteJob = async (req, res) => {
  try {
    const id = req.params.id;

    const job = await Job.findOne({
      where: {
        id: id,
      },
    });
    if (job) {
      const JobDelete = await Job.destroy({
        where: { id: req.params.id },
      });

      if (JobDelete) {
        return res.json({
          status: true,
          message: 'Job Deleted Successfully.',
          data: JobDelete,
          code: 200,
        });
      } else {
        return res.json({
          status: false,
          message: 'Job is Not Deleted',
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

export default deleteJob;
