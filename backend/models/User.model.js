import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    name: {
      type: String,
      required: true,
    },
    profilePictureUrl: {
      type: String,
      default: "",
    },
  },
  { timeseries: true }
);

export const User = mongoose.model("User", userSchema);
