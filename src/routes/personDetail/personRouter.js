import express from "express";
import personDetail from "../../controller/personDetail/personDetail.js";
import summery from "../../controller/personDetail/summery.js";
import geminiAi from "../../controller/personDetail/geminiAi.js";
import professionalInfo from "../../controller/personDetail/professionalInfo.js";
const personalRouter = express.Router();

personalRouter.put("/personDetail/:id", personDetail);
personalRouter.put("/summery/:id", summery);
personalRouter.post("/ai", geminiAi);
personalRouter.post("/professionalDetail/:id", professionalInfo);

export default personalRouter;
