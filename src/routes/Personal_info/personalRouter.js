import express from "express";
import addPersonDetail from "../../controller/person_info/addPersonDetail.js";
const personalRouter = express.Router();

personalRouter.put("/personDetail/:id", addPersonDetail);

export default personalRouter;
