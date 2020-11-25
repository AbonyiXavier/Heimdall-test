import express from "express";
import cors from "cors";
import logger from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (request, response) => {
  response.status(200).json({
    status: true,
    message: "Welcome to Heimdall Technologies APIs Test questions....",
  });
});

export default app;
