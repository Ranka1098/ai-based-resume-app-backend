import bcrypt from "bcryptjs";
import userModel from "../../model/user.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not exist" });
    }
    if (!user.isVerified) {
      return res.status(400).json({ message: "user is not verified" });
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(401).json({ message: "password is invalid" });
    }

    //   genarate jwt token

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    const { password: pwd, ...userWithoutPassword } = user._doc;

    // set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // only on HTTPS
      sameSite: "None", // or "Lax"
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res
      .status(200)
      .json({ message: "Login Successfull", token, data: userWithoutPassword });
  } catch (error) {
    res.status(500).json({ message: "failed to login", error: error.message });
  }
};

export default login;
