import fs from "fs/promises";
import path from "path";

const tasksPath = path.join(process.cwd(), "./db/tasks.json");

export const addTask = (req, res) => {};
export const getTasks = async (req, res) => {
  const result = await fs.readFile(tasksPath);
  const tasks = JSON.parse(result);
  res.send(tasks);
};
