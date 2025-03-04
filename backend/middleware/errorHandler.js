export class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export const globalErrorHandler = (err, req, res, next) => {
  console.error(err.stack);
  // console.log("Hello");

  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : "Internal server error";

  return res.status(statusCode).json({
    success: false,
    message,
  });
};
