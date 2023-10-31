import cors from "cors";
import express from "express";
import morgan from "morgan";
import pingController from "./controllers/pingController/pingController";
import {
  generalError,
  notFoundError,
} from "./middlewares/errorMiddlewares/errorMiddlewares";

export const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS;

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.use(morgan("dev"));

app.use(express.json());

app.disable("x-powered-by");

app.get("/", pingController);

app.use(notFoundError);

app.use(generalError);
