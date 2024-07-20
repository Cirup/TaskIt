import mongoose from "mongoose";
import Task from './src/models/taskModel.js'
import User from './src/models/userModel.js'

// load environment variables
import dotenv from 'dotenv';
dotenv.config()

const mongoURI = process.env.MONGODB_URI;
// connect to db
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.log(err);
    });


const task1 = new Task({
    task: 'New Task',
    dueDate: new Date(),
    priorityLevel: "High",
    desc: "To Finish"
})

const task2 = new Task({
    task: 'Task 2',
    dueDate: new Date(),
    priorityLevel: "Low",
    desc: "Cram this shit"
})

const user1 = new User({
    username: 'Cirup',
    password: 'qwerty123',
    task: [task1._id, task2._id],
})



console.log(task1);
console.log(task2);
console.log(user1);

