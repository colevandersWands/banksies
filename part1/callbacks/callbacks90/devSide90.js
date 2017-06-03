// what if we defined the callback in place

var module = require('./moduleSide90');

module.higherOrder(4, 5, function(err, argument) {
	if(err) {
		console.log('result aint no number');
	} else {
		console.log(argument);
	};
});

module.higherOrder(4, '5', function(err, argument) {
	if(err) {
		console.log('result aint no number');
	} else {
		console.log(argument);
	};
});