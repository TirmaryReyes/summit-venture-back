import createDebug from "debug";
import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../CustomError/CustomError.js";
import chalk from "chalk";

const debug = createDebug("summit-venture-api:middlewares:ErrorMiddlewares");

export const notFoundError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error = new CustomError("Endpoint not found", 400);

  next(error);
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  debug(`Error: ${chalk.red(error.message)}`);

  const statusCode = error.statusCode || 500;

  const message = error.statusCode ? error.message : "General error";

  res.status(statusCode).json({ message });
};
