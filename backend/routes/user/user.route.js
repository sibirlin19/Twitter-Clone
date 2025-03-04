import express from "express";
import { verefiyToken } from "../../middleware/authMiddleware.js";
import { updateUser } from "../../controllers/user.controller.js";

export const authRouter = express.Router();

authRouter.post("/update-profile/:id", verefiyToken, updateUser);
