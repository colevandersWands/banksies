const express      = require('express');
const app         = express();


app.use(function (req, res, next) {
    res.locals.message = 'entered server.  ';
    console.log('-------------- in / ---------------');
});

// let's tidy this up a bit

app.use('/:fruit', function (req, res, next) {
    console.log(req.params.fruit)
    if(req.params.fruit == 'banana') {
        res.locals.message += ' banana';
    } else if (req.params.fruit == 'apple') {
        res.locals.message += ' apple';
    } else {
        res.locals.message += ' unknown fruit';
    };
    console.log('in \/:fruit');
    next()
});

app.use('/*/:id', function (req, res, next) {
    // params are by default strings
    res.locals.message += ' ' + parseInt(req.params.id);
    console.log('in \/\*\/:id');
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

