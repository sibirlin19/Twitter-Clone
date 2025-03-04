import bcrypt from "bcryptjs";
import { User } from "../models/User.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { APIError, asyncHandler } from "../middleware/errorHandler.js";

export const singup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new APIError("All fields required", 400);
  }

  const alreadyExists = await User.findOne({ email });

  if (alreadyExists) {
    throw new APIError("Invalid email or password", 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();

  generateTokenAndSetCookie(res, user._id);

  const userInfo = {
    email: user._doc.email,
    name: user._doc.name,
  };
  return res.status(200).json({
    success: true,
    message: "User Created",
    user: userInfo,
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new APIError("User with this email does not exist", 400);
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    throw new APIError("Invalid email or password", 400);
  }

  generateTokenAndSetCookie(res, user._id);

  return res.status(200).json({
    success: true,
    message: "User logged in",
  });
});

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    success: true,
    meassage: "Logged out",
  });
});
