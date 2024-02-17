import express from "express";
import { addTask, getTasks } from "../controllers/taskController.js";

const router = express.Router();

router.get("/list", getTasks);

router.post("/add", addTask);

export default router;
