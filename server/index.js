// import express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');

require('dotenv').config({path: 'variables.env'});




//config express
const app = express();

//enable pug
app.set('view engine', 'pug');

//Add views
app.set('views', path.join(__dirname, './views'));

//Load static folder public
app.use(express.static('public'));

//Validate if we are in development or production
const config = configs[app.get('env')];

//Create var for web
app.locals.title = config.webname;

//Show actual year and generate the route
app.use((req, res, next) => {
    const date = new Date();
    res.locals.today = date.getFullYear();
    res.locals.route = req.path;
    return next();
})

//execute bodyparser
app.use(bodyParser.urlencoded({extended: true}));

//load routes
app.use('/', routes());

//port and host for the app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;


app.listen(port, host, () => {
    console.log('The server is on');
});