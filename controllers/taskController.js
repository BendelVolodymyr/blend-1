import fs from "fs/promises";
import path from "path";

const tasksPath = path.join(process.cwd(), "./db/tasks.json");

export const addTask = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;
    if (!title || !description || !completed) {
      throw new Error("Invalid params");
    }
    const tasks = JSON.parse(await fs.readFile(tasksPath));
    const newTask = { id: tasks.length + 1, title, description, completed };
    tasks.push(newTask);
    await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
    console.log(data);
    res.sendStatus(200);
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

export const getTasks = async (req, res) => {
  const result = await fs.readFile(tasksPath);
  const tasks = JSON.parse(result);
  res.send(tasks);
};
