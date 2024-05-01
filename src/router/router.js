
import express from 'express';
const router = express.Router();

// Import Model
import Task from '../models/taskModel.js';
import User from '../models/userModel.js';

router.get('/', async (req, res) => {
    const task = await Task.find();

    const dateFormat = task.map((item) => {
        const date = new Date(item.dueDate);
        const formattedDate = date.toLocaleDateString();
        return formattedDate;
    });

    res.render("../pages/main.ejs", {data: task, displayDate: dateFormat});
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

    let formattedDate = new Date(data.dueDate);
    formattedDate = formattedDate.toLocaleDateString();
    taskData.dueDate = formattedDate;

    const result = await taskData.save();
    
    if(!result){
        console.log("Task not added");
    } else {
        console.log("Task added");
        console.log(result)
    }
});

router.delete('/deleteTask/:id',async (req, res) => {
    const id = req.params.id;
    
    const result = await Task.findByIdAndDelete(id);

    if(result){
        console.log(`Task ${result.task} Deleted`);
    } else {
        console.log("Task not deleted");
    }
});

router.patch('/updateTask', (req, res) => {

});

// Authetication Routes
router.get('/login', (req, res) => {
    res.render("../pages/login.ejs");
});

router.get('/register', (req, res) => {
    res.render("../pages/register.ejs");
});

router.get('/logout', (req, res) => {
    res.render("../pages/main.ejs");
});

router.post('/register', (req, res) => {
    const data = req.body;
    const userData = new User({
        username: data.username,
        password: data.password
    });

    const result = userData.save();
    
    if(!result){
        console.log("User not registered");
    } else {
        console.log("User registered");
        console.log(result)
    }
});

export default router;