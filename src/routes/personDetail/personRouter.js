import express from "express";
import personDetail from "../../controller/personDetail/personDetail.js";
import summery from "../../controller/personDetail/summery.js";
import geminiAi from "../../controller/personDetail/geminiAi.js";
import professionalInfo from "../../controller/personDetail/professionalInfo.js";
import projects from "../../controller/personDetail/projects.js";
import skill from "../../controller/personDetail/skill.js";
import education from "../../controller/personDetail/education.js";
const personalRouter = express.Router();

personalRouter.put("/personDetail/:id", personDetail);
personalRouter.put("/summery/:id", summery);
personalRouter.post("/ai", geminiAi);
personalRouter.post("/professionalDetail/:id", professionalInfo);
personalRouter.post("/projects/:id", projects);
personalRouter.post("/skill/:id", skill);
personalRouter.post("/education/:id", education);

export default personalRouter;
