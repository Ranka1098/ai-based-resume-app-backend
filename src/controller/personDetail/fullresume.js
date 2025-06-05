import resumeModel from "../../model/resume.js";

const fullresume = async (req, res) => {
  try {
    const { id } = req.params;

    const resume = await resumeModel.findById(id);

    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.status(200).json({ message: "you resume", data: resume });
  } catch (error) {
    console.log(error);
  }
};

export default fullresume;
