import resumeModel from "../../model/resume.js";

const deleteSingleResume = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await resumeModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export default deleteSingleResume;
