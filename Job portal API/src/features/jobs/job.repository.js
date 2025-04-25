// Please don't change the pre-written code
// Import the necessary modules here
import { Job } from "./schema/newJob.schema.js";
import { application } from "./schema/applyJob.schema.js";

export const createNewJob = async (job) => {
  // Write your code here
  return await Job.create(job);
};

export const applyJobRepo = async (jobId, userId) => {
  const checkIfAlreadyApplied = await ApplyJobModel.findOne({ jobId, userId });
  if (checkIfAlreadyApplied) {
    return false;
  } else {
    // updateApplyJobModel
    await new ApplyJobModel({ jobId, userId }).save();

    // update jobModel applicants
    const filter = { _id: jobId };
    const update = { $push: { applicants: userId } };
    return await JobModel.findByIdAndUpdate(filter, update, {
      new: true,
    });
  }
};
export const findJobRepo = async (_id) => {
  // Write your code here
  try {
    const job = await Job.findById(_id); 
    return job;
  } catch (error) {
    throw new Error('Job not found or invalid ID');
  }
};
