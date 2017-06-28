var express = require('express');
var router = express.Router();

var model = require('../controllers/model');

router.get('/', (req, res) => {
	res.send(model.word);
});

module.exports = router;