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
    personalInfo: {
      firstName: String,
      lastName: String,
      jobTitle: String,
      address: String,
      phone: String,
      email: String,
    },
  },
  {
    timestamps: true,
  }
);

const resumeModel = mongoose.model("Resume", resumeSchema);

export default resumeModel;
