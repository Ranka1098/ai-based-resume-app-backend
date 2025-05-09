import resumeModel from "../../model/resume.js";
const summery = async (req, res) => {
  try {
    const { id } = req.params;
    const { summery } = req.body;

    const resume = await resumeModel.findById(id);
    if (!resume) {
      return res.status(400).json({ message: "resume not found" });
    }

    resume.summery = summery;

    await resume.save();
    res
      .status(200)
      .json({ message: "summery added successfully", data: summery });
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to add summery", error: error.message });
  }
};

export default summery;
