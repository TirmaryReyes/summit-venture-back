import createDebug from "debug";
import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../../CustomError/CustomError";
import chalk from "chalk";

const debug = createDebug("summit-venture-api:middlewares:ErrorMiddlewares");

export const notFoundError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  debug(chalk.red("not found Error"));
  const error = new CustomError("Endpoint not found", 400);

  next(error);
};
