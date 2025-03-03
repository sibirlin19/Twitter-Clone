import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String },
    text: { type: String },
    img: { type: String },
    comments: [
      {
        text: {
          type: String,
          required: true,
        },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
