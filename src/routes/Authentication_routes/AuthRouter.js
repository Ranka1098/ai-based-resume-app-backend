import express from "express";
import register from "../../controller/Authentication_controller/register.js";

const AuthRouter = express.Router();

AuthRouter.post("/register", register);

export default AuthRouter;
