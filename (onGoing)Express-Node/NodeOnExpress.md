
=====================================================================
Express and MVC
=====================================================================
Express.js is probably currently the most popular Node.js framework for building web applications and APIs. It has a good history, a good community around it, lots of modules built for it, and a fairly solid reputation.


In what follows we're going to walk through how to build an Express.js application using the Model View Controller (MVC) design pattern. We'll start out with a simple application structure and then we'll move on by adding more complex concepts like authentication, dynamic routing, and reading from and writing to a database.


So our sample package.json file will look like the following…
{ 
"name": "MVC-Express-Application", 
"description": "An Express.js application using the MVC design pattern...", 
"version": "0.0.1", 
"dependencies": { 
"express": "4.4.4", 
} 
}
One item of note: the name of any given package cannot have any spaces. This is to ensure that installation of packages is easy and consistent across all environments. If people were ever wanting to install our application as a module on npm (if we ever put our application on npm) by running $ npm install MVC-Express-Application it would not work if the package was named MVC Express Application. If we ran $ npm install MVC Express Application, the CLI would get confused.
Now if we run the following from the directory where our package.json file resides…
        npm install -g http-server


App.js
        var express = require('express'); 
var http = require('http'); 
var path = require('path'); 
var app = express();


app.set('port', 3000); 


app.use(express.static(path.join(__dirname, 'static')));
http.createServer(app).listen(app.get('port'), function () { 
console.log('Express server listening on port ' + app.get('port')); 
});


Now go and run that: $ node app


=====================================================================
Templating
=====================================================================
<!DOCTYPE html> 
<html> 
<head> 
<title>Handlebars</title>
 <script src="js/jquery.js" type="text/javascript"></script> 
<script src="js/handlebars.js" type="text/javascript"></script> 
</head> 
<body>
<div class="content"></div>
<script id="artist-list-template" type="text/x-handlebars-template">
<h1>{{ title }}</h1>
<table> 
<thead> 
<tr>
<th>Name</th> 
<th>Hometown</th> 
<th>Favorite Color</th> 
</tr> 
</thead> 
<tbody>
 {{#each artists}} 
<tr> 
<td>{{ name }}</td> 
<td>{{ hometown }}</td> 
<td>{{ favoriteColor }}</td> 
</tr> {{/each}} 
</tbody>
 </table> 
</script>
<script type="text/javascript"> 
var data = { 
title: 'Artist Table', artists: [ { id: 1, name: 'Notorious BIG', birthday: 'May 21, 1972', hometown: 'Brooklyn, NY', favoriteColor: 'green' }, 
{ id: 2, name: 'Mike Jones', birthday: 'January 6, 1981', hometown: 'Houston, TX', favoriteColor: 'blue' }, 
{ id: 3, name: 'Taylor Swift', birthday: 'December 13, 1989', hometown: 'Reading, PA', favoriteColor: 'red' } 
] }
var source = jQuery('#artist-list-template').html(); 
var template = Handlebars.compile(source); 
var html = template(data); jQuery('.content').html(html);
</script> 
</body> 
</html>


***There is also support for doing "multi-level" references of you have a JSON object that is x layers deep, you can refer to the properties inside it by normal dot syntax you might be familiar with.


<div class="entry"> 
<h1>{{title}}</h1> 
<h2>By {{author.name}}</h2>
<div class="body"> 
{{body}} 
</div> 
</div>
<script type="text/javascript">
var data = { title: "A Blog Post!", 
author: { id: 42, name: "Joe Smith" }, 
body: "This is the text of the blog post" }; 
</script>


***And there is even the possibility of doing conditionals via the built-in helper methods. For example, here is an if conditional in a Handlebars template where if a property does not exist or is null in an object that is passed to the view, a different "block" of code will be rendered.




<div class="entry"> 
{{#if author}} 
<h1>{{firstName}} {{lastName}}</h1> 
{{else}}
<h1>Unknown Author</h1>
 {{/if}}
</div>
=====================================================================
Install Express-Handlbars
=====================================================================


$ npm install express-handlebars --save




App.js
        var express = require('express'); 
var http = require('http'); 
var path = require('path'); 
var handlebars = require('express-handlebars'), hbs; 
var app = express();


app.set('port', 3000); 
app.set('views', path.join(__dirname, 'views'));
hbs = handlebars.create({ defaultLayout: 'main' });


app.engine('handlebars', hbs.engine); app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'static')));


http.createServer(app).listen(app.get('port'), function () { 
console.log('Express server listening on port ' + app.get('port'));
 });


**Notice how we are using app.set(‘views', path.join(__dirname, ‘views')); to tell our handlebars engine to look for views in this directory.


***With Express Handlebars we can use a "layout" which will serve as a common container for our views. Some more info on using layouts can be found here. So we need to create a directory called "layouts" inside of our views directory. After we do this, we can put a Main.handlebars file in our layouts directory that will serve as our layout…


Main.handlebars
<!DOCTYPE html> 
<html> 
<head> 
<meta charset="utf-8"> 
<title>MVC Express Application</title> 
</head> 
<body>
{{{body}}}
</body> 
</html>


Index.handlebars
<p>Welcome to the homepage</p>


Other.handlebars
<p>Welcome to other. This is a different route using a different view...</p>
Router
=====================================================================
Once we put all of the items that we want into our app.js file and have our views set. We are going to want to create a router.js file. A lot of MVC application frameworks such as Laravel (PHP), ASP.NET MVC (.NET/C#) or Django (Python) have a router file, where you can set certain routes and tell the application which code to run depending the route that the user goes to. 
So for example, if in our application we wanted to have a list of all books we might have a route that looks like the following…


app.get('/books', function (request, response) { 
console.log('List of all books');
 });


**
The callback function that we pass into our router will run whenever a user goes to that particular route (/books). Of course, we are going to be a lot more sophisticated with the functions we have running (we are going to call our controllers from here), but this is just a simple illustration to show how routers work.
Note the request and response arguments we are passing into our function. These two items are very important in Express,js and will contain a lot of useful information about the request sent by the client and the response that we are going to use to send data back to the client from our server.
**


And if we wanted to set a "details view" for each book depending on the book id our route would looks like the following…
app.get('/books/:id', function (request, response) { 
console.log('Book details from book id ' + request.params.id);
});
Now if we were to go to the route "/books/4″ we'd go to this route with the id 4. The id value will be available to us on the request object.
Setting up a bunch of different routes is all well and good for GET requests, but we're going to also want to have a place for the client to send data to us -- either via form submissions or AJAX requests or some other means. Fortunately, we can also easily create a POST route to receive data from the client and process it.
app.post('/books/add', function (request, response) { 
console.log('Post route to handle the addition of a new book'); 
});
Express.js also has functions for PUT and DELETE requests.
So now that we have a basic overview of routing, let's create a router.js file and put it in the main directory. In this file, add the following…




// Routes
module.exports = function (app) {
// Main Routes
app.get('/', function (request, response) {


});
app.get('/other', function (request, response) {


});
};


As we can see here we have created 2 routes. 
One main route: / and one 
route: /other.
We also have to update our app.js and send the app object to the router. In app.js pass the app object we have been adding things to the router like so…


// send app to router 
→ require('./router')(app);


We have seen in the router that we can send in a callback and have it be available to us whenever a user navigates to a particular route. It's fine to do things this way, but as the number of routes we create grows, our router.js file is going to get pretty big. So to add a little bit of organization to our application, it's probably a good idea to separate these callback functions out into separate controllers because we are using the Model View Controller (MVC) design pattern to create our application.


→ Controllers ← 
Let's call our controller "HomeController". 
Create a directory called controllers and in that directory create a file called 
→ HomeController.js In HomeController, add the following…
exports.Index = function (request, response) { 
response.render('home/Index'); 
};
exports.Other = function (request, response) { 
response.render('home/Other'); 
};


We have added 2 controllers, one for each route in our router file. Notice the response.render function and what we are passing into it. Here we are telling express to use the views in the views/home directory and use the particular view found in there. So for the / route we are using the "Index.handlebars" view and for the /other route we are using the "Other.handlebars" view Both of these will use the Main.handlebars file as a layout, because this is what we specified in our app.js file.
So let's update the router.js file to use our newly created controllers. Note that we need to add a reference to our controller at the beginning of our file.


var HomeController = require('./controllers/HomeController');
// Routes 
module.exports = function (app) {
// Main Routes
app.get('/', HomeController.Index); 
app.get('/other', HomeController.Other);
};


***Recall that we had created 2 different views earlier Index.handlebars and Other.handlebars. Now if we were to run our app with $ node app and if we navigate to localhost:3000 and localhost:3000/other we can see the different views being used for our different routes.


=====================================================================