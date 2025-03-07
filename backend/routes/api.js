import express from "express";
import { authRouter } from "./auth/auth.route.js";
import { userRouter } from "./user/user.route.js";

export const api = express.Router();

api.use("/auth", authRouter);
api.use("/user", userRouter);
api.use("/upload", uploadRouter);
