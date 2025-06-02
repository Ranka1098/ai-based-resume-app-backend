import express from "express";
import resume from "../../controller/Resume_Info/resume.js";
import allResume from "../../controller/Resume_Info/allResume.js";
import singleResume from "../../controller/Resume_Info/singleResume.js";
import deleteSingleResume from "../../controller/Resume_Info/deleteSingleResume.js";

const ResumeRouter = express.Router();

ResumeRouter.post("/resumeInfo", resume);
ResumeRouter.get("/allresume", allResume);
ResumeRouter.post("/singleResumeDetail/:id", singleResume);
ResumeRouter.post("/deleteSingleResume/:id", deleteSingleResume);

export default ResumeRouter;
