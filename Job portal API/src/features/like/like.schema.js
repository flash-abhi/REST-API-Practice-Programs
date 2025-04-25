// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";
export const likeSchema = new mongoose.Schema({
  // Write your code here
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  likeable: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: 'on_model' },
  on_model: { type: String, required: true, enum: ['User', 'Job'] }
});
export const Like = mongoose.model('Like', likeSchema);