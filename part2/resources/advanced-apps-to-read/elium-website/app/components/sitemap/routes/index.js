// in sitemap/routes

const router   = require('express').Router();

const paths = {
    "sitemap": "/sitemap",
}

AppRoutes.add(paths)

router.get("/sitemap", (req, res) => {
    res.sendFile(pathTo.view('sitemap', "/sitemap.xml"))
})

module.exports = router;