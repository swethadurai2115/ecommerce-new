const Task = require('../models/taskModel');

// Get all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find().populate('assignedTo', 'name email');
  res.json(tasks);
};

// Create a task
const createTask = async (req, res) => {
  const { title, description, assignedTo } = req.body;
  const task = await Task.create({ title, description, assignedTo });
  res.status(201).json(task);
};

// Update a task
const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.status = req.body.status || task.status;
    task.assignedTo = req.body.assignedTo || task.assignedTo;
    const updatedTask = await task.save();
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    await task.remove();
    res.json({ message: 'Task removed' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
