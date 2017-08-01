// in static/routes

const router   = require('express').Router();

// send all requests to index.html so browserHistory in React Router works
/*router.get('/', (req, res, next) => {
        //res.render(pathTo.view('static/error'))
        next()

})*/

const paths = {
    "home": "/",
    "level1": "/curriculum1"
    // ... all routes as key/val pairs
}

var pathy = require('path');

AppRoutes.add(paths)

Object.keys(paths).forEach( (key) => {
    router.get(paths[key], (req, res) => {
        if(req.header('X-PJAX')){
            res.render(pathTo.view('static', paths[key]))
        } else {
            console.log(paths[key])
            res.render(pathTo.view(), {view: pathTo.view('static', paths[key]) })
        }
    })
})


module.exports = router;
