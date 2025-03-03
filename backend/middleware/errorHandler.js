class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = "API Error";
  }
}

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export const globalErrorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof APIError) {
    switch (err.name) {
      case "Validation Error":
        return res.status(400).json({
          success: false,
          message: "Validation Error",
        });
        break;

      default:
        return res.status(400).json({
          success: false,
          message: "Internal Server Error",
        });
        break;
    }
  }
};
