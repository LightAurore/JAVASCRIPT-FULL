require('dotenv').config();

//! Imports
const express = require('express');
require('express-async-errors');
const session = require('express-session');
const homeRouter = require('./routes/home.router');

//! Web server
const app = express();
// - View engine
app.set('view engine', 'ejs');
app.set('views','/views');

//? middlewares
app.use(express.static('public'));

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.WEB_SESSION_SECRET
}));

app.use((req,res,next)=>{
    res.locals.session = req.session;
    next();
})

app.use(homeRouter)

//! Exports

module.exports = app;


