const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))
//app.use(express.static('public/person'))
app.use(bodyParser.json())


MongoClient.connect('mongodb://Nicolas:foobar@ds033996.mlab.com:33996/nico-mongodb', (err, database) => {
	if (err) return console.log(err)
  	db = database
})

app.get('/', (req,res) => {
    res.redirect("/persons")  
})


app.get('/persons', (req,res) => {
	db.collection('persons').find().toArray((err, result) =>{
	if (err) return console.log(err)
	res.render('index.ejs', {persons: result})	
	})
})

app.get('/persons/new', (req, res) => {
	console.log('rendering create form')
	res.render('new.ejs')
})

app.get('/persons/show/:id', (req, res) => {
	var id = require('mongodb').ObjectID(req.params.id);
	db.collection('persons').findOne({_id: id}, (err, result) => {
		if (err) return console.log(err);
		// var path = '/details/'+result.fullName;
		// console.log(path)
		// app.set(path, __dirname + '/details.ejs');
		// console.log('');
		res.render('show.ejs', {personinfo: result});
	})
})

app.get('/persons/edit/:id', (req, res) => {
	var id = require('mongodb').ObjectID(req.params.id);
	db.collection('persons').findOne({_id: id}, (err, result) => {
		if (err) return console.log(err);
		// var path = '/details/'+result.fullName;
		// console.log(path)
		// app.set(path, __dirname + '/details.ejs');
		// console.log('');
		res.render('edit.ejs', {personinfo: result});
	})
})

app.post('/persons/create', (req, res) => {
	console.log('Saving to db')
	db.collection('persons').save(req.body, (err, result) =>{
		if (err) return console.log(err)
		console.log('Person saved to database')
		res.redirect('/')
	})
})

app.post('/persons/update/:id', (req, res) => {
	console.log('Saving Changes');
	var id = require('mongodb').ObjectID(req.params.id);
	console.log(id);
	db.collection('persons').findOneAndUpdate(
		{_id: id},
		{$set:{
			fullName: req.body.fullName,
			email: req.body.email,
			address: req.body.address
		}}
		,
		(err, result) => {
			if (err) return res.send(err)
			res.redirect('/')
		}
	)
})

app.post('/persons/delete/:id', (req, res) => {
	var id = require('mongodb').ObjectID(req.params.id);
	db.collection('persons').findOneAndDelete(
      {_id: id},
      (err, result) => {
        if (err) return res.send(500, err)
          res.redirect('/')
      }
    )
})

app.listen(3000, function() {
  	console.log('listening on 3000');
})