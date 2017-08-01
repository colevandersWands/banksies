const routes = ["static","experiments", "sitemap", "blog"];
// deleted blog.  oops

module.exports = function(app){
    routes.map( function (ele){
        app.use(requireRoute(ele))
    })

    app.use(function(req, res, next){
        res.status(404);

        // respond with html page
        if (req.accepts('html')) {
            res.render(pathTo.view(), {view: pathTo.view("errors"), code: 404 })
            return;
        }

        // respond with json
        if (req.accepts('json')) {
            res.send({ error: 'Not found' });
            return;
        }

        // default to plain-text. send()
        res.type('txt').send('Not found');
    });
}

