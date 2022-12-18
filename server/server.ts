import app from "./src/app";
import log from "./src/utils/logger";
import connect from "./src/utils/connect";
import routes from "routesMiddleware";
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});
const port = process.env.PORT || 4000;
const server = connect().then(() => {
  return app.listen(port, () => {
    log.info(`App running at port ${port}`);

    routes(app);
  });
});
process.on("unhandledRejection", async (err: Error) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  (await server).close(() => {
    process.exit(1);
  });
});
