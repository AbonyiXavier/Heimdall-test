// import app from "./index";
import express from "express";
import cors from "cors";
import logger from "morgan";
import dotenv from "dotenv";
import router from "./routes/index";

dotenv.config();

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

app.get("/", (request, response) => {
  response.status(200).json({
    status: true,
    message: "Welcome to Heimdall Technologies APIs Test questions....",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});

export default app;
