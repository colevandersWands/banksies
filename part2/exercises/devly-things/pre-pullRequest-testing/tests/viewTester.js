var express = require('express');
var app     = express();

app.set('view engine', 'ejs')
app.set('view cache', false)

var testUser = {
	id: 0,
	firstName: 'firstName',
	lastName: 'lastName',
	email: 'email'
}

var arrayTester = [testUser]

app.get('/show', function(req, res){
  res.render('show', {user: testUser});
});

app.get('/index', function(req, res){
  res.render('show', {DB: arrayTester});
});

app.get('/update', function(req, res){
  res.render('show', {user: testUser});
});

app.get('/delete', function(req, res){
  res.render('show', {user: testUser});
});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.get('/home', function(req, res){
  res.render('home');
});

app.listen(7357, function(err){
  if(err){
    console.log(err);
  }else {
    console.log('Server is running on Port: 3000');
  }
});
