What is Node js?
=====================================================================
According to nodejs.org site:


“Node.js is a platform built on Chrome’s JavaScript runtime for easily building fast, scalable network applications. Node.js uses
an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications
that run across distributed devices.”
According to nodejs.org site:
“Node.js is a platform built on Chrome’s JavaScript runtime for easily building fast, scalable network applications. Node.js uses
an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications
that run across distributed devices.”




=====================================================================
What type of Web Applications are we able to build using Node?
=====================================================================
We can build apps like:
• Web Applications
        • HTTP Proxy based Applications
        • SMTP Servers used for mails,also we can build other network intensive apps too.
Rememeber, the applications we will be building will be constructed in JS.
=====================================================================
Node Package Manager
=====================================================================
Node Package Manager,or also called as NPM,is a library management that lets us use different packages and versions at each project we have.
=====================================================================
Node and HTTP
=====================================================================
To get a quick handle on node.js applications, we can write a simple http server in node.js.
Procedures:
• We will create a folder named nodeapps in our machine.
• We will create a file named exampleServer.js in the folder.
And we will write the following code in the exampleServer.js file, as follows:
exampleServer.js:


        var http = require(’http’);
function dealWithWebRequest(request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello Node.js");
response.end();
}
var webserver = http.createServer(dealWithWebRequest).listen(3000,"127.0.0.1");
webserver.once(’listening’, function() {
console.log(’Server running at http://127.0.0.1:3000/’);
});


Now, go to your console and hit this: node exampleServer.js


The point now is to explain what we are doing and why.
=====================================================================
        → var http = require(’http’);
We are using the Node.js http module. We are doing a lookup for the http module in the function call. We are calling the http
module and assigning the functionality to any variable (here it is "http"). This variable further serves for functional references in next calls.
        → var webserver = http.createServer(dealWithWebRequest).listen(3000,"127.0.0.1");
http.createServer will create an http server here and will assign it to variable webserver. Also, at the end of the closure, the TCP port and server address are given. These define where the server will run. Here, the server address is 127.0.0.1 and the TCP port is 3000.
        →         function dealWithWebRequest(request, response) {
//Our code
}
This is the callback function, which is passed as argument in htttp.createServer(. . . ) module which is a normal function passing as argument in Javascript.
1. Three inner lines in the function:
→         response.writeHead(200, {’Content-Type’: ’text/plain’});
response.write(’Hello Node.js\n’);
response.end();
We are writing an HTTP header specifying the content type of the response. So, for this sample server we have set the content type as text/plain in the first line.


Next, we are writing the message with response.write and ending the HTTP server response object to render message to the browser. This means the response.end will send the message to browser and tell HTTP Protocol to end the response.
→         response.write(’Hello Node.js\n’);
response.end();
1. After completing the whole work we have the listener setup for the server
→        server.once(’listening’, function() {
console.log(’Server running at http://127.0.0.1:3000/’);
}); 
Once the server is listening on that port, the listening event is firing. We have instructed node.js to log a message in that particular listening event.
=====================================================================


Main Introduction
=====================================================================


Lately, Node js is considered one of the most hyped topics and technology on Web Development world.When we introduce Node js, sometimes we describe it as “Javascript on the Back End” or “Server Side Javascript”.
Reasons for someone to get onboard to the Node JS ship are:
        → Learning curve,can be way smaller
        → Easiness of Development
        → Node JS performance Orientation
        → Functional Code Centric


Before you proceed,keep in mind that any other full functional server can be build with node.js, like a mail server(SMTP), a server for chat applications and many others.




Theoretical Background,differences from the rest out there
=====================================================================
Node.js is a platform built on the V8 javascript engine which is based on an event driven programming model and adopts a non-blocking I/O approach.


V8 is Google’s JavaScript implementation that is used in Chrome browser as a runtime. V8 achieves a great speed of executing javascript which is almost similar to the performance of dynamic languages like Ruby or Python.
Also the closure feature of the javascript language (essentially using callback functions) makes event driven programming even easier to implement.
Node uses a single non-blocking thread with an event loop in order to serve the incoming client requests on the web. 
Javascript is designed to serve a single threaded event-loop based model in the client side. 
Additionally, it is used often to serve the dynamic nature of the client side work in different browsers.
=====================================================================
Express JS
=====================================================================
In the previous example,we didnt see Express,or what Express is.Express is a framework that works on top of NodeJS and lets us work and do things easier.So remember some things abou Express: Express, a web-application framework that runs on top of Node.js -- that are fully functioning web servers that have great communities and lots of testing behind them! You don't even have to write the web server yourself. You can just install it and be on your way!
So to summarize and be able to see the comparisons.
=====================================================================
Obligatory "Hello World" in Node.js
=====================================================================
        var http = require('http');


http.createServer(function (request, response) {
 response.writeHead(200, { 'Content-Type': 'text/plain' });
 response.end('Hello World\n');
 }).listen(1337);


console.log('Server running at http://127.0.0.1:3000/');


=====================================================================
Obligatory "Hello World" in Node.js with Express
=====================================================================
var app = require('express');


app.get('/', function (request, response) { 
response.send("Hello World"); 
});


app.listen(3000);
=====================================================================
Now that we got the main differences that make us use Express let’s see how we are able to add a route.
=====================================================================
var express = require('express');
var app = express();


app.get('/', function (request, response) { 
response.send("<h1>Our Express App,Home Page</h1>");
});


app.get('/about', function (request, response) { 
response.send("<h1>About Page</h1>"); 
});


app.listen(3000, function(err){
        if(err){
                console.log(err);
}
});
Now after you run the application: $ node app (where `app` is the name of your application), Navigate to http://localhost:3000 first and se your Home Page,then go to your URL and add this:  http://localhost:3000/about . You will then be able to see the About Page,simple as that. 


=====================================================================
So as we speak,our application although having some routing now,still it is not that interesting as it can serve static content.In order to be able to show and manipulate Dynamic content in a Node JS website, we can make use of the templating engines (like HandleBars, Pug, EJS and more).
The main idea and the concepts of all the Templating engines is the same so fear not to experiment when you make personal projects.Use whatever you need at the given time and try to see the common patterns that those technologies share.


=====================================================================
Let’s install HBS
=====================================================================
HandleBarS(hbs) is one of the popular engines,let’s see how we can add it in a project we have.


$ npm install hbs --save


var express = require('express');
var app = express();
var hbs = require(‘hbs’);


app.set('view engine', 'html'); 
app.engine('html', hbs.__express);


app.get('/', function (request, response) { 
response.send("<h1>Our Express App,Home Page</h1>");
});


app.get('/about', function (request, response) { 
response.send("<h1>About Page</h1>"); 
});


app.listen(3000, function(err){
        if(err){
                console.log(err);
}
});


!! By default, Express looks for templates in a "views" folder, so let's add a "views" directory and create an index.html file in it with the following…


<html>
 <head>
         <title>Express App</title>
 </head>
<body>
<h1>Our Express App with Templates</h1>
</body> 
</html>


And we can use the same way to add an about.html.
=====================================================================
How can we show the file we created?
=====================================================================
In our app, instead of 
        app.get('/', function (request, response) { 
response.send("<h1>Our Express App,Home Page</h1>");
});


We now use:
app.get('/', function (request, response) { 
response.render("index");
});


→ Go see the difference at your main Home page.


=====================================================================
How can we add Dynamic Content?
=====================================================================
Index.html
        <html> 
<head> 
<title>{{title}}</title> 
</head>
<body> 
<h1>{{title}}</h1>
</body> 
</html>


App.js
        var express = require('express'); 
var app = express(); 
var hbs = require('hbs');
app.set('view engine', 'html'); 
app.engine('html', hbs.__express);
app.get('/', function (request, response) { 
var welcome = 'Our Express App with Templates'; 
response.render('index', { title: welcome });
 });


app.get('/about', function (request, response) { 
response.render('about'); 
});
app.listen(3000, function(err){
        if(err){
                console.log(err);
}
});


**As you can see by doing that we are able to bind a value after we save it to a variable and then we can assign it to the other end(the template).So here, we have a variable welcome with the value of ‘Our Express App with Templates’.We pass it as an argument to the title doing this:  { title: welcome }. Now wherever our app finds the {{title}} it will give it the value of the var welcome.
Feel free to try more stuff.


var express = require('express'); 
var app = express(); 
var hbs = require('hbs');


app.set('view engine', 'html'); 
app.engine('html', hbs.__express);


app.get('/', function (request, response) {
var welcome = 'Our Express App with Templates';
var products = [ 
{"id": 1, "name": "Apple", "price": 4.99 }, 
{ "id": 2, "name": "Pear", "price": 3.99 }, 
{ "id": 3, "name": "Orange", "price": 5.99 } 
];


response.render('index', { title: welcome, products: products }); });


app.get('/about', function (request, response) { 
response.render('about'); 
});


app.listen(3000, function(err){
        if(err){
                console.log(err);
}
});


Index.html
        <html> 
<head> <title>{{title}}</title>
</head>
<body> 
<h1>{{title}}</h1>
{{#each products}}         
<p> 
<a href="/product/{{id}}">{{name}} - {{ price }}</a> 
</p> 
{{/each}}
</body> 
</html>


**Now we can see Dynamic Data if we go to our Home Page.We are able to do that because of the {{#each}} loop to iterate of the list of products that we passed in.


**Let’s create a route to create products.
=====================================================================
Create a /products/:id
=====================================================================
var express = require('express'); 
var app = express(); 
var hbs = require('hbs');


app.set('view engine', 'html'); 
app.engine('html', hbs.__express);


app.get('/', function (request, response) {
var welcome = 'Our Express App with Templates';
var products = [ 
{ "id": 1, "name": "Apple", "price": 4.99 }, 
{ "id": 2, "name": "Pear", "price": 3.99 }, 
{ "id": 3, "name": "Orange", "price": 5.99 }
 ];


response.render('index', { title: welcome, products: products }); });
app.get('/about', function (request, response) { 
response.render('about');
 });


app.get('/product/:id', function (request, response) { 
var id = request.params.id; 
response.render('product', { title: 'Product #' + id });
 });


app.listen(3000, function(err){
if(err){
        console.log(err);
}
});




**The :id part at the end indicates that it is a dynamic "id" parameter in the URL query string. As you can see, we can fetch that property out of the request by using request.params.id.**