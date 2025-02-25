import { hash } from "bcryptjs";
import { User } from "../models/User.model.js";

export const singup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields required",
    });
  }

  const alreadyExists = await User.findOne({ email });

  if (alreadyExists) {
    return res.status(400).sned({
      success: false,
      meassage: "User with this email is aleready exists",
    });
  }

  const hashedPassword = await hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();

  return res.status(200).json({
    success: true,
    message: "User Created",
    user: { ...user._doc, password: null },
  });
};
export const login = async (req, res) => {
  return res.send("Sing up");
};
export const logout = async (req, res) => {
  return res.send("Sing up");
};
