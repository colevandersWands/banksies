// this file is the head of app.html, all of controller.js and initialize.js

// app.html require statements (head of the html doc)
// (node is replacing the browser's js runtime)
var controller = require('./controller');
var model = require('./model');

// these requires are new for using express
// import and initialize express
var express = require('express')
var app = express()
// Body parser for forms
var bodyParser= require('body-parser')

app.use(staticFile('tictactoe.css'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// this function is the 
app.use('/:box', function(req, res){

});

// classic callback.  don't initalize things until the port is awake
app.listen(3001, function() {
    console.log("litening in port 3001");
    controller.setModel(model);
})


