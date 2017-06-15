const express  = require('express');
const router   = express.Router();
const path   = require("path")

const Beaver   = require("../models/beaver")

router.get('/', (req,res) => {
    res.redirect("/beavers")
})

//Locals can be shared with all the other functions of the stack including ejs files
router.use(function(req, res, next){
    res.locals.beaverParams = {
        fullName: req.body.fullName,
        email: req.body.email,
        address: req.body.address
    }
    next()
})


router.get("/*/:id", function(req, res){
    
    
})

router.use('/beavers(/:action/:id)?', function(req, res, next){
    res.locals.beaverParams.id = req.params.id
    next()
})

function beaverRender (res, view, locals){
    locals.view = path.join("..", "beavers", view)
    res.render("layouts/index.ejs", locals);
}

//new
router.get('/beavers/new', (req, res) => {
    beaverRender(res, 'create.ejs', {data: {}})
})

//show, edit & index
router.get('/beavers(/:action/:id)?', (req, res) => {
    Beaver.find(res.locals.beaverParams, function(result) {
        beaverRender(res, (req.params.action || "index") + '.ejs', {data: result})
    })
})

//create, update & delete
router.post('/beavers(/:action)(/:id)?', (req, res) => {
    Beaver[req.params.action](res.locals.beaverParams, function(){
        res.redirect('/')
    })
})

module.exports = router

