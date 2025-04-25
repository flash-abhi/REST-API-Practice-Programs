// Please don't change the pre-written code
// Import the necessary modules here
import { Like } from "./like.schema.js";
export const likeRepo = async (user_id, job_id, model) => {
  // Write your code here
  const exists = await Like.findOne({ user: user_id, likeable: job_id, on_model: model });
  if (exists) throw new Error('You have already liked this item.');

  return await Like.create({ user: user_id, likeable: job_id, on_model: model });
};
export const getLikesRepo = async (id, on_model) => {
  // Write your code here
  return await Like.find({ likeable: id, on_model: on_model }).populate('user');
};
