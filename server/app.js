const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const { authentication } = require('./middleware/authentication');



// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(authentication)
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/account', require('./routes/auth'))
app.use('/products', authentication, require('./routes/product'));

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode  || 500;
    const message = err.message || "Internal Server Error"
    res.status(statusCode).send({errorMessage : message})
}

app.use(errorHandler);

module.exports = app;
