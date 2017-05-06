Express-Tutorial
=======================================================================
	Express is a powerful web development framework for the Node JS platform.Express comes with the rest of the Node middleware modules.These modules are Javascript components which can be used in Node based Web applications to make application layered and more modular.

=======================================================================
Express-Objects
=======================================================================
	Application Object:
		The application object is an instance of Express generally presented by the variable named app.This is the main object of our Express application and functionlity is built on top of that object.

		<code>
			var express = require("express");
			var app     = express();
		</code>	

	Request Object:
		When a Web Client makes a request, the HTTP request object is created.Inside the app the requests are presented as <i>req</i> 
		variables.Lets see the most important request methods.
		<ul>
			<li>req.params - Holds the value of all the parameters of the request object</li>
			<li>req.params(name) - Returns value ofa specific parameter from the Web URL GET params or POST params</li>
			<li>req.query - Takes values from a GET method</li>
			<li>req.body - Takes values from a POST form</li>
			<li>req.get(header) - Gets the request HTTP header</li>
			<li>req.path - The request path</li>
			<li>req.url - The request path with query parameters</li>
		</ul>

	Response Object:
		When a Web Client makes a request, the HTTP request object is created.Inside the app the requests are presented as <i>req</i> 
		variables.Lets see the most important request methods.
		<ul>
			<li>res.status(code) - The HTTP response code</li>
			<li>res.attachment(filename) - The response HTTP header Content-Disposition to attachment</li>
			<li>res.sendfile(path, [options], [callback]) - Sends file to the Client</li>
			<li>res.download(path, [filename], [callback]) - Prompts the client download</li>
			<li>res.render(view,[locals]) - Renders a view callback</li>
		</ul>

=======================================================================
Express-Concepts
=======================================================================
	Asynchronous JavaScript
		Since Node js is mainly based on Asynchronous Javascript Programming, Node's nature is Asynchronous.That means that the code is switching "layers" with callback functions.
		As Node is executed in an event loop, the end user does not face any "blocking" from the view layer.Generally the callbak function is passed as an async function to be executed.This function will return the result to the upper function when the execution of the code is completed.

=======================================================================
Middleware in Node js
=======================================================================	
	So what is a middleware?
		A middleware in a Node application context is a JavaScript function which will handle HTTP requests.It will be able to handle the request and the response object from HTTP request, perform some operation on the request, sendback the response to the client and finally pass the objects/result to the next middleware.
		<b>Middlewares are loaded in an Express application with the <i>app.use()</i> method.</b>

		example:
		<code>
			app.use(function(req, res, next){
				console.log('Request query is : ' + req.query);
				next();
			});
		</code>

=======================================================================
Express routing
=======================================================================	
	Example:

	<code>
		var express = require('express');
		var app     = express();

		app.get('/', function(req, res){
			res.send('This is the Landing page');
		});

		app.get('/about', function(req, res){
			res.send('This is the About page');
		});

		app.get('/contact', function(req, res){
			res.send('This is the Contact page');
		});


		app.listen(3030, function(error){
				if(error){
					console.log("Error, " + error);
				}
				console.log("The server is listening on port 3030");
			});
	</code>