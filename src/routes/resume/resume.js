import express from "express";
import resume from "../../controller/Resume_Info/resume.js";
import allResume from "../../controller/Resume_Info/resume.js";

const ResumeRouter = express.Router();

ResumeRouter.post("/resumeInfo", resume);
ResumeRouter.get("/allresume", allResume);

export default ResumeRouter;
