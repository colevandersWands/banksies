const express      = require('express');
const app         = express();

//arguments can be passed in using 'params'

app.use(function (req, res, next) {
    res.locals.message = 'entered server.  ';
    console.log('in /');
    next();
});

app.use('/banana/:id', function (req, res, next) {
    res.locals.message += 'banana number ';
    res.locals.message += req.params.id;
    console.log('in \/tim');
    next()
});

app.use('/apple/:id', function (req, res, next) {
    res.locals.message += 'apple number ';
    res.locals.message += req.params.id;
    next()
});

app.get('/*', function (req, res, next) {
    console.log('in get');
    res.locals.message += '. sending response.'
    res.send(res.locals.message)
});

app.listen(3000, function() {
    console.log('listening on 3000');
})

