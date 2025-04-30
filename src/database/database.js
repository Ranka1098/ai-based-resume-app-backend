import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const URL = process.env.URL;
  mongoose.connect(URL);
  console.log("mongoose connection established");
};

export default connectDB;
