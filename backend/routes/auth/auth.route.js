import express from "express";
import { singup } from "../../controllers/auth.controller.js";

export const authRouter = express.Router();

authRouter.get("/singup", singup);
authRouter.get("/login", singup);
authRouter.get("/logout", singup);
