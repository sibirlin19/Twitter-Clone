import express from "express";
import { verefiyToken } from "../../middleware/authMiddleware.js";
import {
  updateUser,
  getUserProfile,
} from "../../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.get("/profile/:username", verefiyToken, getUserProfile);
userRouter.post("/update-profile/:id", verefiyToken, updateUser);
