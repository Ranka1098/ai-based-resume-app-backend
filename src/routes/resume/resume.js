import express from "express";
import createResume from "../../controller/Resume_Info/createResume.js";
import allResume from "../../controller/Resume_Info/allResume.js";
import singleResume from "../../controller/Resume_Info/singleResume.js";
import deleteSingleResume from "../../controller/Resume_Info/deleteSingleResume.js";
import fullresume from "../../controller/personDetail/fullresume.js";
import atsFriendlyResume from "../../controller/Resume_Info/atsFriendlyResume.js";

const ResumeRouter = express.Router();

ResumeRouter.post("/resumeInfo", createResume);
ResumeRouter.get("/allresume/", allResume);
ResumeRouter.get("/singleResumeDetail/:id", singleResume);
ResumeRouter.post("/deleteSingleResume/:id", deleteSingleResume);
ResumeRouter.get("/fullresume/:id", fullresume);
ResumeRouter.post("/atsResume", atsFriendlyResume);

export default ResumeRouter;
