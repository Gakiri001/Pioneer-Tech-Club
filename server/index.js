import express from "express"
import { config } from "dotenv"
import eventRouter from "./routes/event.route.js"

config()
const app = express()

app.use(express.json())


app.use("/api/plan", eventRouter);

app.get("/",(req,res) => {
  res.send("hello Mr Gakiri")
})

app.listen(5000,() => {
  console.log("App running on port 5000")
})