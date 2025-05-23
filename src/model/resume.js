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
    summery: {
      type: String,
      required: true,
    },
    professionalInfo: [
      {
        designation: String,
        companyName: String,
        city: String,
        state: String,
        startDate: Date,
        endDate: Date,
        workSummery: String,
      },
    ],
    projects: [
      {
        title: String,
        features: String,
      },
    ],
    skill: [String],
    education: [String],
  },
  {
    timestamps: true,
  }
);

const resumeModel = mongoose.model("Resume", resumeSchema);

export default resumeModel;
