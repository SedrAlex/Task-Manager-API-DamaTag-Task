const  mongoose  = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Name is required to create a task"],
    },
    description: {
      type: String,
      required: [true, "Provide a description for the task"],
    },
    done: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', TaskSchema)