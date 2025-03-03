import { hash } from "bcryptjs";
import { User } from "../models/User.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

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
    return res.status(400).send({
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
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.send(200).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.send(200).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  generateTokenAndSetCookie(res, user._id);

  return res.send(200).json({
    success: true,
    message: "User logged in",
  });
};
export const logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    success: true,
    meassage: "Logged out",
  });
};
