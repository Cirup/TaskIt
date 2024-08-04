import passport from 'passport';
import express from 'express';
const router = express.Router();

// Import Model
import Task from '../models/taskModel.js';
import User from '../models/userModel.js';


// Authetication Routes

router.get('/register', (req, res) => {
    try {
        res.render("../views/register.ejs");
    } catch (error) {
        console.log(error);
    }
});

router.post('/register', async (req, res) => {

    try {
        const result = await new User({
            username: req.body.username,
            password: req.body.password,
        }).save({ validateBeforeSave: true });


        if (!result) {
            console.log("User not registered");
            res.status(501).send({ response: 'Error Registering User' });
        } else {
            console.log("User registered");
            res.status(200).redirect('/login')
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/login', (req, res) => {
    res.render("login.ejs");
});

// router.post('/login', passport.authenticate('local', { failureRedirect: '/register', successRedirect: '/' }));

router.post('/login', (req, res, next) => {
    console.log('Login attempt:', req.body);
    passport.authenticate('local', (err, user, info) => {
        console.log('Passport authenticate result:', { err, user: user ? user.username : null, info });
        if (err) {
            console.error('Error in passport.authenticate:', err);
            return next(err);
        }

        if (!user) {
            console.log('Authentication failed:', info.message);
            return res.status(401).json({ success: false, message: info.message });
        }

        req.logIn(user, (err) => {
            if (err) {
                console.error('Error in req.logIn:', err);
                return next(err);
            }

            console.log('User authenticated successfully:', user.username);
            return res.json({ success: true, redirect: '/home' });
        });
    })(req, res, next);
});

router.get("/logout", async (req, res, next) => {
    /*
    *   Logout from passport and Destroy Session for security
    */

    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.session.destroy();
        console.log("User logged out");
        res.redirect("/login");
    });

});



router.get('/', (req, res) => {
    res.redirect('/home');
})

router.get('/homepage', (req, res) => {
    res.redirect('/home');
})

router.get('/home', async (req, res, next) => {
    try {
        if (req.isAuthenticated()) {

            const username = req.session.passport.user;
            const user = await User.findById(username).exec();
            const task = await Task.find({ author: username }).exec();

            const dateFormat = task.map((item) => {
                const date = new Date(item.dueDate);
                return date.toLocaleDateString();
            });
            res.render("../views/main.ejs", { data: task, displayDate: dateFormat, datalength: task.length, name: user.username });
        } else {
            console.log("No user found");
            res.redirect('/login');
        }
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

router.get('/getTask/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const task = await Task.findById(id);

        if (task) {
            console.log(task);
            res.json(task);
        } else {
            console.log("Task not found");
        }
    } catch (err) {
        console.log(err);
    }
});


router.post('/addTask', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const data = req.body;
            const taskData = new Task({
                task: data.task,
                dueDate: data.dueDate,
                status: data.status,
                prioritylevel: data.prioritylevel,
                desc: data.desc,
                author: req.session.passport.user
            });

            let formattedDate = new Date(data.dueDate);
            formattedDate = formattedDate.toLocaleDateString();
            taskData.dueDate = formattedDate;

            const result = await taskData.save();

            if (!result) {
                console.log("Task not added");
            } else {
                console.log("Task added");
                res.status(200).send({ response: 'Task Added' });
            }
        } else {
            console.log("No user found");
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.log(error);
    }
});

router.delete('/deleteTask/:id', async (req, res) => {
    const id = req.params.id;

    const result = await Task.findByIdAndDelete(id);

    if (result) {
        console.log(`Task ${result.task} Deleted`);
        res.status(200).send({ response: 'Task Deleted' });
    } else {
        console.log("Task not deleted");
        res.status(501).send({ response: 'Error Deleting' });
    }
});

router.patch('/updateTask/:id', async (req, res) => {

    try {
        if (req.isAuthenticated()) {
            const id = req.params.id;
            const data = req.body;

            const result = await Task.findOneAndUpdate({ _id: id }, data); // or can use findByIdAndUpdate

            if (result) {
                console.log(`Task ${result.task} Updated`);
                console.log(result)
                res.status(200).send({ response: 'Task Updated' })
            } else {
                console.log("Task not updated");
                res.status(501).send({ response: 'Error Updating' })
            }
        } else {
            console.log("No user found");
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.log(error);
    }

});

router.patch('/removeComplete/:id', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const id = req.params.id;
            const data = req.body;
            const result = await Task.findOneAndUpdate({ _id: id }, data);

            if (result) {
                console.log(`Task ${result.task} Incompleted`);
                res.status(200).json(result);
            } else {
                console.log("Task not updated");
                res.status(501).send({ response: 'Error Updating' });
            }
        } else {
            console.log("No user found");
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.log(error);
    }
});


router.patch('/addComplete/:id', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const id = req.params.id;
            const data = req.body;
            const result = await Task.findOneAndUpdate({ _id: id }, data);

            if (result) {
                console.log(`Task ${result.task} Incompleted`);
                res.status(200).json(result);
            } else {
                console.log("Task not updated");
                res.status(501).send({ response: 'Error Updating' });
            }
        } else {
            console.log("No user found");
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.log(error);
    }
});


router.post('/searchTask', async (req, res) => {

    try {
        if (req.isAuthenticated()) {
            const data = req.body;
            console.log(data.searchValue)

            const task = await Task.find({ author: req.session.passport.user, task: { $regex: data.searchValue, $options: 'i' } });

            if (task) {
                res.status(200).json(task);
            } else {
                console.log('No Task Found')
            }

        }
    } catch (error) {
        console.log(error);
    }

})

// Test if there is user authenticated
// router.get('/user/auth', (req, res) => {
//     if (req.isAuthenticated) {
//         console.log(req.user);
//         console.log(req.session)
//     }
// });


// router.get('/home', async (req, res) => {

//     try {
//         if (req.isAuthenticated()) {

//             const task = await Task.find();

//             const dateFormat = task.map((item) => {
//                 const date = new Date(item.dueDate);
//                 const formattedDate = date.toLocaleDateString();
//                 return formattedDate;
//             });

//             res.render("../pages/main", { data: task, displayDate: dateFormat, datalength: task.length });
//         } else {
//             console.log("No user found");
//             res.status(404).send("User not found");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// });


// router.post('/login', async (req, res, next) => {
//     const { username, password } = req.body;
//     console.log("Data Username " + username)
//     console.log("Data Password " + password)

//     const user = await User.findOne({ username: username }).exec();

//     if (!user) {
//         console.log("User not found");
//         return res.status(404).send({ response: 'User not found' });
//     }

//     if (user.password !== password) {
//         console.log("Password Incorrect");
//         return res.status(401).send({ response: 'Password Incorrect' });
//     }

//     if (user) {
//         console.log(user)
//         res.redirect('/home');
//     }
// });



// router.get('searchTask', async(req,res)=>{
//     try {
//         if (req.isAuthenticated()) {
//             const task = req.body;

//             const dateFormat = task.map((item) => {
//                 const date = new Date(item.dueDate);
//                 return date.toLocaleDateString();
//             });
//             res.render("../views/main.ejs", { data: task, displayDate: dateFormat, datalength: task.length });
//         } else {
//             console.log("No user found");
//             res.status(404).send("User not found");
//         }
//     } catch (error) {
//         res.status(500).send("Internal Server Error");
//     }
// })

export default router;