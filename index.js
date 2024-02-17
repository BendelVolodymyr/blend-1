import express from "express";
import tasksRouter from "./routers/tasksRouter.js";

const app = express();

app.listen(3000, () => {
  console.log("server is run");
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("test");
});

app.use("/tasks", tasksRouter);

app.use((error, req, res, next) => {
  const { status = 500 } = error;
  console.log(error);
  res.status(status).send(error.message);
});
