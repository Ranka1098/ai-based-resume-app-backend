import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./src/database/database.js";
import AuthRouter from "./src/routes/Authentication_routes/AuthRouter.js";
import ResumeRouter from "./src/routes/resume/resume.js";

// create server
const app = express();

// ceate middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT || 8080;

// create route
app.use("/api/auth", AuthRouter);
app.use("/", ResumeRouter);

// database connetion
connectDB()
  .then(() => {
    console.log("database connection established");
    app.listen(PORT, () => {
      console.log("server listeing on port", PORT);
    });
  })
  .catch((error) => {
    console.log(" failed to connect ", error);
  });
