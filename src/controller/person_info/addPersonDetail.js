import resumeModel from "../../model/resume.js";

const addPersonDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, jobTitle, email, phone, address } = req.body;

    const resume = await resumeModel.findById(id);

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    resume.personalInfo = {
      firstName,
      lastName,
      jobTitle,
      email,
      phone,
      address,
    };

    await resume.save();
    res.status(200).json({ message: "Personal details updated", resume });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default addPersonDetail;
