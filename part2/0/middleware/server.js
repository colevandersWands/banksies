const express      = require('express');
const app         = express();


app.use('/*/:id', function (req, res, next) {
    console.log(req.params.id, req.params.id>0)
    if(req.params.id>0){
        res.locals.id = req.params.id
    } else {
        res.locals.id = 0
    }
    next()
});

app.get('/bananas/:id', function (req, res, next) {
    res.send('you are seeing a banana with id=' + res.locals.id)
});

app.get('/apples/:id', function (req, res, next) {
    res.send('you are seeing an apple with id=' + res.locals.id)
});

app.listen(3000, function() {
    console.log('listening on 3000');
})

