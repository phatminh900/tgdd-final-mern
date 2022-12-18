import path from "path";
import express from "express";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

// import { errorController } from "controllers/error.controller";
import { NotFoundError } from "./utils/AppError";
import { Request, Response, NextFunction } from "express";
import {
  userRouter,
  reviewRouter,
  phoneRouter,
  laptopRouter,
  productRouter,
  bookingRouter,
} from "routes";
dotenv.config();
const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "script-src": ["'self'", "https://cdnjs.cloudflare.com/"],
      },
    },
  })
);
app.use(cors());
// limit requests from 1 IPT

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this IP. try again in 1 hour",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use("/api", limiter);

// // body-parse,reading from body to req.body

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
// // Data sanitization against Nosql injection
app.use(mongoSanitize());
// // Data sanitization against XXS
const html = '<script>alert("xss");</script>';
// app.use(xss(html));

// Prevent parameter pollution

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// static file
// public not in src fixed it

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "./client")));

export default app;
