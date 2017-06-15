// code and comments from this stackoverflow: https://stackoverflow.com/questions/35676259/understanding-middleware-and-route-handler-in-express-js

//get the express module as app
var app = require('express')();

//1. when this *middleware* is called, this is printed to the console, always.
//As this is first registered middleware, it gets executed no matter what because no url match were provided. This middleware does not stop the middleware chain execution as it calls next() and executes next middleware in chain.

app.use(function(req, res, next){ 
  console.log('\n\nALLWAYS');
  next();
});

//2. when a route /a is called, a response 'a' is sent and 
//the app stops. There is no action from here on
//chain stops because this middleware does not call next()
app.get('/a', function(req, res, next){ 
     console.log('/a: route terminated'); 
     res.send('a');
});

//3. this never gets called as a consequence from above
//because (2) never calls next.  ('res.send' is like a return statement)
app.get('/a', function(req, res){
            console.log('/a: never called');
});

//4. this will be executed when GET on route /b is called
//it prints the message to the console and moves on to the next function
//question: does this execute even though route /a (2) terminates abruptly?
//app.get('/b' ... does not depend in any way on (2). as url match criteria are different in both middleware, even if /a throws an exception, /b will stay intact. but this middleware will get executed only at /b not /a. i.e. if /a calls next(), this middleware will not get executed.
app.get('/b', function(req, res, next){
  console.log('/b: route not terminated');
  next();
});

//5. question: this gets called after above (4)?
//Yes, as (4) calls next(), this middleware gets executed as this middleware does not have a url filter pattern.
app.use(function(req, res, next){ 
  console.log('SOMETIMES');
  next();
});

//6. question: when does this get executed? There is already a function to handle when GET on /b is called (4)
//As (4) calls next(), (5) gets called, again (5) calls next() hence this is called. if this was something other '/b' like '/bbx' this wouldn't get called --- hope this makes sense, url part should match.
app.get('/b', function(req, res, next){
  console.log('/b (part 2): error thrown' );
  throw new Error('b failed'); // che
});

//7. question: I am not sure when this gets called... ?
// This happens (4) calls next() -> (5) calls next() -> (6) throws exception, hence this special error handling middleware that catches error from (6) and gets executed. If (6) does not throw exception, this middleware won't get called.
//Notice next(err) this will call (10). -- as we are passing an error
app.use('/b', function(err, req, res, next){
  console.log('/b error detected and passed on');
  next(err);
});

//8. this is executed when a GET request is made on route /c. It logs to the console; throws an error.
app.get('/c', function(err, req){
  console.log('/c: error thrown');
  throw new Error('c failed');
});

//9. question: this catches the above error and just moves along?
//Yes, as this middleware calls next(), it will move to next matching middleware. so it will call (11) and not (10) because (10) is error handling middleware and needs to be called like next(err)
app.use('/c', function(err, req, res, next) {
  console.log('/c: error deteccted but not passed on');
  next();
});

//10. question: this follows the above and prints an error based on above?
//Which ever middleware from above calls next(err) will end up calling this one. ie. (7) does so.
//This also sends a 500 response?
//This just sends text as '500 - server error'
//in order to set status code you'll need to do res.status(500).send ...
app.use(function(err, req, res, next){
  console.log('unhandled error detected: ' + err.message);
  res.send('500 - server error');
  //Also set status code
  //res.status(500).send('500 - server error');
});

//11. question: this is the catch all for something that falls through and sends a 404?
//No, this does not catch error, as in (7). This route will get elected       when non of the above middleware were able to respond and terminate the chain. So this is not an error handling route, this route just sends 404 message if non of the above routes returned a response and stopped chain of execution
app.use(function(req, res){
  console.log('route not handled');
  res.send('404 - not found');
  //Also set status code
  //res.status(400).send('404 - not found');
});

//12. This app listens on the 3000 port.
app.listen(3000, function(){
            console.log('listening on 3000');
});
