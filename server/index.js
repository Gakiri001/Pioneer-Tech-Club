import express from "express"
import { config } from "dotenv"

config()
const app = express()


app.get("/",(req,res) => {
  res.send("hello Mr Gakiri")
})

app.listen(5000,() => {
  console.log("App running on port 5000")
})