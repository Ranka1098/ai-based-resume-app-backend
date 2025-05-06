import express from "express";
import personDetail from "../../controller/personDetail/personDetail.js";
const personalRouter = express.Router();

personalRouter.put("/personDetail/:id", personDetail);

export default personalRouter;
