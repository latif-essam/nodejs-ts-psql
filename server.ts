import express, { Application, Request, Response } from "express";

import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env;
const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) =>
  res.status(200).json({ message: "valid request to entry point /" })
);

app.listen(PORT, () =>
  console.log(`server running 🐱‍🏍 on http://localhost:${PORT}`)
);

export default app;
