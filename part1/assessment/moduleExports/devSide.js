var module = require('./moduleSide');

for (var i = 0; i < 5; i++) {
	module.push(i);
};

console.log(module.data); // -> [0, 1, 2, 3, 4]

var spliced = module.splice(2); 

console.log(spliced); // -> [3, 4]

console.log(module.pop()); // -> [0, 1, 2, 3]

console.log(module.clear()); // -> []

for (var i = 0; i < 5; i++) {
	module.push(i);
};

console.log(module.getData()); // -> [0, 1, 2, 3, 4]

console.log(module.splice(2, 1)); // -> [3]
