import express from 'express';
import path from 'path';
import mongoose from "mongoose";

// load environment variables
import dotenv from 'dotenv';
dotenv.config()

// Express
const app = express();
const port = process.env.PORT;


// Modules
import router from "./src/router/router.js"
const mongoURI = process.env.MONGODB_URI;

import Task from './src/models/taskModel.js'


async function startServer() {
    app.set('view engine', 'ejs');          // embedded javascript (EJS) as view engine
    app.set('views', './src/pages');        // directory for the views folder
    app.use(express.static('public'));      // looks at 'public' folder for static files
    app.use(express.json());                // parse request body as json
    app.use(router);                        // assign routes

    // connect to db
    mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.log(err);
    });

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();