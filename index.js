import express from "express";
import tasksRouter from "./routers/tasksRouter.js";

const app = express();

app.listen(3000, () => {
  console.log("server is run");
});

app.get("/", (req, res) => {
  res.send("test");
});

app.use("/tasks", tasksRouter);

