export const requestLogger = (req, res, next) => {
  const timeStamps = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const userAgent = req.get("User-Agent");
  console.log(`${timeStamps} ${method} ${url} - ${userAgent}`);
  next();
};

export const addTimeStamps = (req, res, next) => {
  req.timeStamp = new Date().toISOString();
  next();
};
