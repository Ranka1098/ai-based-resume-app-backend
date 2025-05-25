import resumeModel from "../../model/resume.js";

const skill = async (req, res) => {
  try {
    const { id } = req.params;
    const { skill } = req.body;

    const resume = await resumeModel.findById(id);
    if (!resume) {
      return res.status(400).json({ message: "Resume not found" });
    }

    resume.skill.push(skill);
    await resume.save();

    res
      .status(200)
      .json({ message: "Skill added successfully", skills: resume.skills });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export default skill;
