import resumeModel from "../../model/resume.js";

const projects = async (req, res) => {
  try {
    const { title, features } = req.body;
    const { id } = req.params;

    const resume = await resumeModel.findById(id);
    if (!resume) {
      return res.status(400).json({ message: "resume not exist" });
    }

    if (!title || !features) {
      return res.status(400).json({ message: "All feilds are required" });
    }

    resume.projects.push({ title, features });

    await resume.save();

    res.status(200).json({ message: "Project added successfully", resume });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default projects;
