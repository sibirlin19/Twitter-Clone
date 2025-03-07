import { asyncHandler } from "../middleware/errorHandler";
import { Post } from "../models/Post.model";

const createPost = async (req, res) => {
  const { title, user, text, img } = req.body;

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Post creator required",
    });
  }

  const post = new Post({
    title: title,
    text: text,
    img: img,
  });

  await post.save();
};

const deletePost = asyncHandler(async (req, res) => {});

const leaveComment = asyncHandler(async (req, res) => {});

const deleteComment = asyncHandler(async (req, res) => {});

const likePost = asyncHandler(async (req, res) => {});
