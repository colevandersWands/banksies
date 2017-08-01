const router   = require('express').Router();

// send all requests to index.html so browserHistory in React Router works
/*router.get('/', (req, res, next) => {
        //res.render(pathTo.view('static/error'))
        next()

})*/



const paths = {
    "experiments_forms": "/experiments/forms",
    "experiments_full": "/experiments/full",
    "experiments_blog": "/experiments/blog",
    "experiments_blogChild": "/experiments/blogChild"
}

AppRoutes.add(paths)

Object.keys(paths).forEach( (key) => {
    router.get(paths[key], (req, res) => {
        res.render(pathTo.view(key.split("_")[0], "/"+key.split("_")[1]))
    })
})


module.exports = router;