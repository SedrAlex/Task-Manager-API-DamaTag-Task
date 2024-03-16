const Task = require("../models/Task")

const getAllTasks = (req,res) => {
    res.send("get all items!!")
}

// const createTask = async (req,res) => {
//     const task = await Task.create(req.body)
//     res.status(200).json({task})
// }

const createTask = async (req, res) => {
    // req.body.createdBy = req.user.userId;
    const task = await Task.create(req.body);
    res.status(201).json(task);
  };
const getTask = (req,res) => {
    res.send("get a single task")
}
const updateTask = (req,res) => {
    res.json(req.params.id)
}
const deleteTask = (req,res) => {
    res.send("delete a task")
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}