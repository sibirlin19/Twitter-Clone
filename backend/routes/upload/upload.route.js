import express from "express";
import { uploadFile } from "../../controllers/upload.controller";
import { verefiyToken } from "../../middleware/authMiddleware";

export const uploadRouter = express.Router();

uploadRouter.post("/upload", verefiyToken, uploadFile).get();
