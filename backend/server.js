import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import { api } from "./routes/api.js";
import { configureCors } from "./config/configureCors.js";
import { connectDB } from "./config/db.js";
import {
  addTimeStamps,
  requestLogger,
} from "./middleware/customeMiddleware.js";
import { globalErrorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(requestLogger);
app.use(addTimeStamps);

app.use(configureCors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", api);
app.use("*", globalErrorHandler);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on PORT: ${PORT}`);
});
