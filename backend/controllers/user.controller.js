import { asyncHandler } from "../middleware/errorHandler";
import { User } from "../models/User.model";

export const updateUser = asyncHandler(async (req, res) => {});

export const getUserProfile = asyncHandler(async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username }).select("-password");

    if (!user) {
      throw new APIError("User not found", 404);
    }

    req.send(200).json({
      success: true,
      message: "User found",
      user: user,
    });
  } catch (error) {
    throw new APIError("Internal server error", 500);
  }
});

export const followOnUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const userToModify = User.findById(id);
    const currentUser = User.findById(req.userId);

    if (id === req.userId.toString()) {
      throw new Error("You can't follow yourself");
    }

    if (!userToModify && !currentUser) throw new Error("User not found", 404);
    const following = currentUser.followers.includes(req.userId);

    if (following) {
      await User.findByIdAndUpdate(id, { $pull: { followers: req.userId } });
      await User.findByIdAndUpdate(req.userId, { $pull: { following: id } });

      return res.send(200).json({
        success: true,
        message: "User unfollowed successfully",
      });
    } else {
      await User.findByIdAndUpdate(id, { $push: { followers: req.userId } });
      await User.findByIdAndUpdate(req.userId, { $push: { following: id } });
      return res.send(200).json({
        success: true,
        message: "User followed successfully",
      });
    }
  } catch (error) {}
});
