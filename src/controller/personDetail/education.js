import resumeModel from "../../model/resume.js";

const education = async (req, res) => {
  try {
    const { id } = req.params;
    const { educationInput } = req.body;

    const resume = await resumeModel.findById(id);
    if (!resume) {
      return res.status(400).json({ message: "Resume not found" });
    }

    resume.education.push(educationInput);
    await resume.save();

    res.status(200).json({
      message: "education added successfully",
      education: resume.education,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default education;
