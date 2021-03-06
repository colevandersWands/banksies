const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('view cache', false)

const db = {
		0: {name:'a'}, 
		1: {name:'b'}
	};
var nextID = 2;

// step 1
app.get('/', function(req, res){
	var arrayDB = Object.values(db); 
  	res.render('index', {db: arrayDB});
});

// step 2
app.get('/person', function(req, res) {
	res.render('create');
})

app.post('/person', function(req, res) {
	var newPerson = {
		name: req.body.name
	};
	db[nextID] = newPerson;
	nextID++;
	res.redirect('/');
})


app.listen(3000, function(err){
  if(err){
    console.log(err);
  }else {
    console.log('Server is running on Port: 3000');
  }
});