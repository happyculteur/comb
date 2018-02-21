import { createServer } from "aws-serverless-express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as express from "express";
import { default as routes } from "./routes";

/* Load environment variable */
dotenv.config();

/* Create Express app */
const app = express();

/* Express Configuration */
app.set("port", process.env.DYNAMODB_PORT);
app.use(bodyParser.json({ strict: false }));

/* API for all routes */
app.use("/", routes);

/* Create serverless Server */
const api = createServer(app);

export { api };
