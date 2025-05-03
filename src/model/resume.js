import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    title: String,
    userName: String,
    resumeId: {
      type: String,
      unique: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const resumeModel = mongoose.model("Resume", resumeSchema);

export default resumeModel;
