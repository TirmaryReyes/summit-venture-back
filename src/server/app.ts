import cors from "cors";
import express from "express";
import morgan from "morgan";
import pingController from "./controllers/ping/pingController.js";
import paths from "./paths/paths.js";
import {
  generalError,
  notFoundError,
} from "./middlewares/errorMiddlewares/errorMiddlewares.js";

export const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS;

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.use(morgan("dev"));

app.use(express.json());

app.disable("x-powered-by");

app.get(paths.ping, pingController);

app.use(notFoundError);

app.use(generalError);
