import express from "express";
import { singup, login, logout } from "../../controllers/auth.controller.js";

export const authRouter = express.Router();

authRouter.post("/singup", singup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
