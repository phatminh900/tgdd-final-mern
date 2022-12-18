import mongoose from "mongoose";
import dotenv from "dotenv";
import log from "./logger";
import routes from "routesMiddleware";

dotenv.config();
const uri = process.env.DATABASE!;

// console.log(uri);
const connect = async () => {
  try {
    await mongoose.connect(uri);
    log.info("Connected to DB");
  } catch (error) {
    log.error(error);
    log.error("fail to connect to DB");
  }
};
export default connect;
