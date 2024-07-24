import { Elysia } from "elysia";

import logger from "./middlewares/logger";
import errorHandler from "./middlewares/errorHandler";
import responseMapper from "./middlewares/responseMapper";
import feedController from "./controllers/feedController";
import usersController from "./controllers/usersController";
import postsController from "./controllers/postsController";

const app = new Elysia({ name: "home", prefix: "/api" })
  .use(logger)
  .use(errorHandler)
  .use(responseMapper)
  .use(feedController)
  .use(usersController)
  .use(postsController)
  .listen(3000);

console.log(`Server is running at ${app.server?.url}`);
