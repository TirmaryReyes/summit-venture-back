import "./loadEnvironment.js";
import createDebug from "debug";
import { app } from "./server/app.js";

export const debug = createDebug("summit-venture-api:root");

export const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  debug(`listening on http://localhost:${port}`);
});
