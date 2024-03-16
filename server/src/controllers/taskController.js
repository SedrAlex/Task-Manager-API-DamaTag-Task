const Task = require("../models/Task.js");

const createTask = async (req, res) => {
  req.body.createdBy = req.user.userId;
  console.log(req.user);
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(404).json({
      message:error.message,
    });
  }
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(200).json({ user: req.user.name, tasks, total: tasks.length });
};

const getTask = async (req, res) => {
  const {
    params: { id: taskId },
    user: { userId },
  } = req;
  try {
    const task = await Task.findOne({ _id: taskId, createdBy: userId });

    if (!task) {
      throw new Error(`Sorry. Task with id: ${taskId} doesn't exist`);
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};
const updateTask = async (req, res) => {
  const {
    params: { id: taskId },
    user: { userId },
  } = req;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: taskId, createdBy: userId },
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );

    if (!task) {
      throw new Error(`Sorry. Task with id: ${taskId} doesn't exist`);
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({
      message: error.message
      ,
    });
  }
};

const deleteTask = async (req, res) => {
  const {
    params: { id: taskId },
    user: { userId },
  } = req;
try{
  const task = await Task.findOneAndDelete({ _id: taskId, createdBy: userId });

  if (!task) {
    throw new Error(`Sorry. Task with id: ${taskId} doesn't exist`);
  }

  res
    .status(200)
    .json({ msg: "Task deleted successfully", success: true });
}
catch (error) {
  res.status(404).json({
    message: error.message
  });
}
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
