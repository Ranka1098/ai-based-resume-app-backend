import resumeModel from "../../model/resume.js";

const allResume = async (req, res) => {
  try {
    const { userEmail } = req.query;

    if (!userEmail) {
      return res.status(400).json({ message: "User email is required" });
    }

    const resumeList = await resumeModel.find({ userEmail });

    if (resumeList.length === 0) {
      return res.status(200).json({ message: "no resume found" });
    }

    res
      .status(200)
      .json({ message: "all Resume list here..", data: resumeList });
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to fetch resume", error: error.message });
  }
};

export default allResume;
