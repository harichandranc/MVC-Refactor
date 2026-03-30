const Task = require('../models/taskModel');

// GET all
exports.getTasks = (req, res) => {
  res.json(Task.getAllTasks());
};

// GET one
exports.getTask = (req, res) => {
  const task = Task.getTaskById(req.params.id);
  if (!task) return res.status(404).send("Task not found");
  res.json(task);
};

// CREATE
exports.createTask = (req, res) => {
  const task = Task.createTask(req.body.title);
  res.json(task);
};

// UPDATE
exports.updateTask = (req, res) => {
  const task = Task.updateTask(req.params.id, req.body);
  if (!task) return res.status(404).send("Task not found");
  res.json(task);
};

// DELETE
exports.deleteTask = (req, res) => {
  Task.deleteTask(req.params.id);
  res.send("Task deleted");
};
