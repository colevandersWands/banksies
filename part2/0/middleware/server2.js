const express      = require('express');
const app         = express();


app.use(function (req, res, next) {
    res.locals.message = 'entered server.  ';
    console.log('-------------- in / ---------------');
    next();
});

app.use('/banana', function (req, res, next) {
    res.locals.message += 'banana ';
    console.log('in \/banana');
    next()
});

app.use('/apple', function (req, res, next) {
    res.locals.message += 'apple ';
    console.log('in \/apple');
    next()
});

// the star means anything.
// so a request with any first parameter will enter here
// then express will treat the next parameter as an argument available in req.params
// you decide what it's called

app.use('/*/:id', function (req, res, next) {
    res.locals.message += 'number ' + req.params.id;
    console.log('in \/\*\/id');
    next()
});

// app.use('/*/:thumb', function (req, res, next) {
//     res.locals.message += 'number ' + req.params.thumb;
//     console.log('in \/\*\/id');
//     next()
// });

app.get('/*', function (req, res, next) {
    console.log('in get');
    res.locals.message += '. sending response.'
    res.send(res.locals.message)
});

app.listen(3000, function() {
    console.log('listening on 3000');
})

