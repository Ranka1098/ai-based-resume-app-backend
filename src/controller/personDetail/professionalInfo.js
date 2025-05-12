import resumeModel from "../../model/resume.js";

const professionalInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { professionalInfo } = req.body;

    const resume = await resumeModel.findById(id);
    if (!resume) {
      return res.status(400).json({ message: "resume not exist" });
    }

    resume.professionalInfo = professionalInfo;

    await resume.save();

    res.status(200).json({
      message: "professional information added successfully",
      data: resume,
    });
  } catch (error) {
    res.status(500).json({
      message: "failed to add professional information",
      error: error.message,
    });
  }
};

export default professionalInfo;
