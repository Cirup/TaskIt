
import express from 'express';
const router = express.Router();

// Import Model
import Task from '../models/taskModel.js';
import User from '../models/userModel.js';

router.get('/', (req, res) => {
    res.render("../pages/main.ejs");
});

router.post('/addTask', async (req, res) => {
    const data = req.body;
    const taskData = new Task({
        task: data.task,
        dueDate: data.dueDate,
        status: data.status,
        prioritylevel: data.prioritylevel,
        desc: data.desc
    });

    const result = await taskData.save();
    
    if(!result){
        console.log("Task not added");
    } else {
        console.log("Task added");
        console.log(result)
    }
});

router.delete('/deleteTask', (req, res) => {

});

router.patch('/updateTask', (req, res) => {

});

export default router;