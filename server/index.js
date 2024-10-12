import express from "express";
import { config } from "dotenv";
import eventRouter from "./routes/event.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

config();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5174", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    Credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/plan", eventRouter);

app.get("/", (req, res) => {
  res.send("hello Mr Gakiri");
});

app.listen(5000, () => {
  console.log("App running on port 5000");
});
