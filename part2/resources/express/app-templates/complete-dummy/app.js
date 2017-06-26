// require modules
var express = require('express');
var body-parser = require('body-parser');

// other local variables
var app = express();
var port = 3000;

// serve public

// middlewares
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('view cache', false);

// include and use controller
var restRoutes = require('./routes/restRoutes');
app.use(restRoutes);

// error handling middleware
app.use((req, res, next) => {
  var message = 'path \'' + req.originalUrl + '\' does not exist';
  var error = {'404': message};
  res.send(error);
});

// app.listen and callback
app.listen(port, (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log('listening on port ', port);
	};
});