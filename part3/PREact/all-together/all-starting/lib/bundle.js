'use strict';

var constructorModule = require('model-constructor');
var BrowserView = require('./views/browserView');
var View = require('./views/view');
var Controller = require('./controllers/controller');
var BrowserController = require('./controllers/browserController');

var operationSchema = {
	name: {
		type: 'string',
		fallback: 'akermann'
	},
	args: {
		type: 'number',
		fallback: 2
	},
	operation: {
		type: 'function',
		fallback: 'A(x, y)'
	}
};
var operationsModel = new constructorModule(operationSchema);
var brvw = new BrowserView('yo there ');
var brcn = new BrowserController(operationsModel, brvw);

// wrap them in an onclick function
var runnin = function runnin() {
	brcn.browse(document.getElementById("first").value, document.getElementById("second").value, document.getElementById("third").value);
};
//# sourceMappingURL=bundle.js.map
