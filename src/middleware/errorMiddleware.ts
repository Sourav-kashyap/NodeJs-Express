import { Request, Response, NextFunction } from "express";
interface ErrorWithStatus extends Error {
  statusCode?: number;
  errorMessage?: string;
}
const errorMiddleware = (
  err: ErrorWithStatus,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  err.statusCode = err.statusCode || 500;
  err.message = err.errorMessage || err.message || "Something went wrong";
  res.status(err.statusCode).json({ success: false, message: err.message });
};
export default errorMiddleware;
