import "./loadEnvironment.js";
import createDebug from "debug";
import { app } from "./server/app.js";
import chalk from "chalk";
import connectToDatabase from "./database/connectToDatabase.js";

export const debug = createDebug("summit-venture-api:root");

export const port = process.env.PORT ?? 3000;
const mongoDbConnection = process.env.MONGODB_CONNECTION;

if (!mongoDbConnection) {
  debug(chalk.red("Missing environment variables. Exiting..."));
  process.exit(1);
}

app.listen(port, () => {
  debug(chalk.green(`Listening on http://localhost:${port}`));
});

try {
  await connectToDatabase(mongoDbConnection);

  debug(chalk.green("Connected to database"));
} catch (error: unknown) {
  debug(`Error connecting to database: ${chalk.red((error as Error).message)}`);
}
