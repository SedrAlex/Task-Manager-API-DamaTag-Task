const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const  cors = require('cors')
const errorHandler = require("./src/middlewares/error-handler")
const tasks = require("./src/routes/tasksRouter")
const auth = require("./src/routes/authRouter");
const { protect } = require('./src/middlewares/authentication');

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Error Handler
app.use(errorHandler)

app.use('/api/tasks',protect,tasks);
app.use("/api/auth", auth);

module.exports = app;
