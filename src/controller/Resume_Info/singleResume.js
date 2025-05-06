import resumeModel from "../../model/resume.js";

const singleResume = async (req, res) => {
  try {
    const { id } = req.params;

    const resume = await resumeModel.findById(id);

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.status(200).json(resume);
  } catch (error) {
    console.error("Error fetching resume:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export default singleResume;
