import express from "express";
import { authRouter } from "./auth/auth.route.js";

export const api = express.Router();

api.use("/auth", authRouter);
