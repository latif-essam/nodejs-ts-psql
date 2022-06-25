import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

const authorization = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    jwt.verify(token as string, process.env.SECRET_TOKEN as string);
    next();
  } catch (error) {
    res.status(401).json(`Access denied Invalid Token, error: ${error}`);
  }
};

export default authorization;
