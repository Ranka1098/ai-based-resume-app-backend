import express from "express";
import personDetail from "../../controller/personDetail/personDetail.js";
import summery from "../../controller/personDetail/summery.js";
import geminiAi from "../../controller/personDetail/geminiAi.js";
const personalRouter = express.Router();

personalRouter.put("/personDetail/:id", personDetail);
personalRouter.put("/summery/:id", summery);
personalRouter.post("/ai", geminiAi);

export default personalRouter;
