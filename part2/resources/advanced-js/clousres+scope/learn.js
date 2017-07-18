var variable = 'outside';

function comparisons() {
	var variable = 'inside';
	var es6 = () => {
		console.log(variable);
	};
	var es5 = function() {
		console.log(variable);
	};
	return [es5, es6];
};

var learn = comparisons();

console.log('============= es5 =============');
learn[0]();
console.log('============= es6 =============');
learn[1]();