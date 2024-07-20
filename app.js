import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from "mongoose";
import session from 'express-session';
import connectMongoDBSession from 'connect-mongodb-session';
import passport from 'passport';
import "./src/config/local-strategy.js";

// load environment variables
import dotenv from 'dotenv';
dotenv.config()

// Express
const app = express();
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Modules
import router from "./src/router/router.js"
const mongoURI = process.env.MONGODB_URI;

// Connect session to MongoDB
const MongoDBStore = connectMongoDBSession(session);
mongoose.connect(mongoURI).then(() => console.log("Session connected to MongoDB!"));

const store = new MongoDBStore({
    uri: 'mongodb://127.0.0.1:27017/TaskIt',
    collection: 'mySessions'
});

// Connect to the database
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.log(err);
    });



async function startServer() {
    app.set('view engine', 'ejs');          // embedded javascript (EJS) as view engine
    app.set('views', path.join(__dirname, 'src/pages'));
    app.use(express.static(path.join(__dirname, 'public')));
    // assign routes
    app.set('trust proxy', 1) // trust first proxy

    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
        }
    }))

    // Session Setup
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.json());                // parse request body as json

    app.use(router);

    // Start Server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();