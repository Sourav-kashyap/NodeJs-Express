import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";


import errorMiddleware from "./middleware/errorMiddleware";
import {logger , httpLogger} from "./utils/logger";

dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 5000;

app.use(express.json());
app.use(httpLogger)
app.use(errorMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from home page:");
});

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
