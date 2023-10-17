import mongoose, { model, models, Schema } from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  writeup: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  otherImages: {
    type: [String],
    required: false,
  },
});

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);
