import jwt from "jsonwebtoken";
import { APIError, asyncHandler } from "./errorHandler";

export const verefiyToken = asyncHandler(async (req, res, next) => {
  const { token } = req.cookies.token;
  if (!token) {
    throw new APIError("Unauthorized - no token provided", 401);
  }
  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    if (!decoded) {
      throw new APIError("Unauthorized - invalid token", 401);
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    throw new APIError("Server error", 500);
  }
});
