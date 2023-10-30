import { type NextFunction, type Request, type Response } from "express";
import { notFoundError } from "./errorMiddlewares";
import CustomError from "../../../CustomError/CustomError";

describe("Given a notFoundError errir middleware", () => {
  describe("When it receives a request and a next function", () => {
    test("Then it should call the next function with a 404 status code and the 'Endpoint not found' error message", () => {
      const res = {};

      const errorMessage = "Endpoint not found";
      const expectedError = new CustomError(errorMessage, 404);
      const req = {};
      const next = jest.fn();

      notFoundError(req as Request, res as Response, next as NextFunction);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
