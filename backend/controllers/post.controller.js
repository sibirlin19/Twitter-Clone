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
