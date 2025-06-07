import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./src/database/database.js";
import AuthRouter from "./src/routes/Authentication_routes/AuthRouter.js";
import ResumeRouter from "./src/routes/resume/resume.js";
import personalRouter from "./src/routes/personDetail/personRouter.js";

// create server
const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "https://ai-based-resume-app-frontend.onrender.com",
  "https://luxury-buttercream-ebc5b1.netlify.app",
];
// ceate middleware
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const PORT = process.env.PORT || 8080;

// create route
app.use("/api/auth", AuthRouter);
app.use("/", ResumeRouter);
app.use("/", personalRouter);

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
