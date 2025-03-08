import AWS from "aws-sdk";
import { v1 as uuidv1 } from "uuid";

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  region: process.env.AWS_REGION,
});

export const uploadFile = (req, res) => {};
