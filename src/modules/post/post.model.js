import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true,
      trim: true
    },
    votes: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export default mongoose.model('Post', PostSchema);
