const express      = require('express');
const app         = express();

// you can define functions that are executed when a request comes through
// you can think of these 'app.use' calls as being a series of if statements
// node and express will compile these into a server app

// if url exists, use this function
// see what happens if you comment out 'next()'
app.use(function (req, res, next) {
    res.locals.message = 'entered server.  ';
    console.log('in /');
    next();
});

// use this function always and no matter what. (without route specified)
// app.use(function (req, res, next) {
//     res.locals.message = 'entered server.  ';
//     console.log('in /');
//     next();
// });
// if first url extension is banana, use this function
app.use('/banana', function (req, res, next) {
    res.locals.message += 'banana ';
    console.log('in \/banana');
    next();
});

app.use('/*', function (req, res, next) {
    res.locals.message += '* ';
    next()
})

// if first url extension is apple, use this function
app.use('/apple', function (req, res, next) {
    res.locals.message += 'apple';
    next();
});



// if request is of type 'get', use this.
// (they all are for now, more on this later)
app.get('/*', function (req, res, next) {
    console.log('in get');
    res.locals.message += '. sending response.'
    res.send(res.locals.message)
});

// after compiling the app, start the server
// starting the server on port 3000
app.listen(3000, function() {
    console.log('listening on 3000');
})

