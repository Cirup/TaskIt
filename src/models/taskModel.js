import mongoose from "mongoose";

const taskModel = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    task: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ["Incomplete", "Complete"],
        default: "Incomplete"
    },
    prioritylevel: {
        type: String,
        enum: ["High", "Medium", "Low"],
    },
    desc: {
        type: String
    },
})

const Task = mongoose.model('Task', taskModel)

export default Task;