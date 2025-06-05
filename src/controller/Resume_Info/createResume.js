import resumeModel from "../../model/resume.js";

const createResume = async (req, res) => {
  try {
    const { title, userName, resumeId, userEmail } = req.body;

    if (!title || !userName || !resumeId || !userEmail) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingResume = await resumeModel.findOne({ resumeId });
    if (existingResume) {
      return res.status(409).json({ message: "Resume ID already exists" });
    }

    const newResume = new resumeModel({
      title,
      userName,
      resumeId,
      userEmail,
    });

    await newResume.save();

    res
      .status(201)
      .json({ message: "Resume saved successfully", data: newResume });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to save resume", error: error.message });
  }
};

export default createResume;
