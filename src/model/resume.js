import mongoose from "mongoose";

const professionalSchema = new mongoose.Schema({
  designation: { type: String, default: "" },
  companyName: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  startDate: { type: Date, default: null },
  endDate: { type: Date, default: null },
  workSummery: { type: String, default: "" },
});

const projectSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  feature: { type: String, default: "" },
});

const resumeSchema = new mongoose.Schema(
  {
    // Mandatory at creation
    title: { type: String, required: true },
    userName: { type: String, required: true },
    resumeId: { type: String, unique: true, required: true },
    userEmail: { type: String, required: true },

    // Personal Info
    personalInfo: {
      firstName: { type: String, default: "" },
      lastName: { type: String, default: "" },
      jobTitle: { type: String, default: "" },
      email: { type: String, default: "" },
      phone: { type: String, default: "" },
      address: { type: String, default: "" },
    },

    // Summary
    summery: { type: String, default: "" },

    // Professional Info (can be many)
    professionalInfo: {
      type: [professionalSchema],
      default: [],
    },

    // Projects (can be many)
    projects: {
      type: [projectSchema],
      default: [],
    },

    // Skills and Education (array of strings)
    skill: {
      type: [String],
      default: [],
    },
    education: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const resumeModel = mongoose.model("Resume", resumeSchema);
export default resumeModel;
