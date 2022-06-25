import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const logger = (req: Request, res: Response, next: NextFunction) => {
  const url = `localhost:${process.env.PORT}/${req.baseUrl}`;
  console.log(`${url}`);
  next();
};

export default logger;
