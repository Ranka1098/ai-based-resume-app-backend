import userModel from "../../model/user.js";
import sendEmail from "./sendEmail.js";
import bcrypt from "bcryptjs";

const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });

    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 60 * 1000);
    const hashedPassword = await bcrypt.hash(password, 10);

    if (existingUser) {
      if (existingUser.isVerified) {
        return res.status(400).json({ message: "user already exist" });
      } else {
        existingUser.name = name;
        existingUser.password = hashedPassword;
        existingUser.otp = otp;
        existingUser.otpExpires = otpExpires;
        await existingUser.save();

        await sendEmail(
          email,
          `Email Verification OTP ${otp}`,
          `Your OTP is ${otp}`
        );

        return res.status(200).json({
          message:
            "OTP re-sent to your email. Please verify to complete registration",
        });
      }
    }

    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpires,
      isVerified: false,
    });

    await sendEmail(
      email,
      `Email Verification OTP ${otp}`,
      `Your  OTP is ${otp}`
    );

    res
      .status(201)
      .json({ message: "user register successfully , OTP sent to your email" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to create user", error: error.message });
  }
};

export default register;
