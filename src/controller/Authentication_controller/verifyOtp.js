import userModel from "../../model/user.js";

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user not exist" });
    }
    if (user.isVerified) {
      return res.status(400).json({ message: "user alrady verified" });
    }

    if (user.otp != otp) {
      return res.status(400).json({ message: "otp is not matched" });
    }
    if (user.otpExpires < new Date()) {
      return res.status(400).json({ message: "otp is Expired" });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;

    await user.save();

    res.status(200).json({ message: "user is verified successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "OTP verification failed", error: error.message });
  }
};

export default verifyOtp;
