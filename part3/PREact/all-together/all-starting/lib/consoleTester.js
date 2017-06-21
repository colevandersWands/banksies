'use strict';

var constructorModule = require('model-constructor');
//var BrowserView = require('./views/browserView');
var View = require('./views/view');
var Controller = require('./controllers/controller');
//var BrowserController = require('./controllers/browserController');

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
var vw = new View('yo there ');
var cn = new Controller(operationsModel, vw);

cn.post({ key: 'value' });
cn.getOne(0);
cn.getAll();
cn.update(0, 'key', 'newValue');
cn.delete(0);
//# sourceMappingURL=consoleTester.js.map
