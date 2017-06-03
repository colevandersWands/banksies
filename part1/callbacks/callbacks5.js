// why not pass the argFunc your result?
// sort of replacing a return statement with your callback function

function higherOrder(arg1, arg2, callBack) {
	var result = 0000;
	result = arg1 + arg2;
	callBack(result);
};

function callBack(stringToPrint) {
	console.log(stringToPrint);
};

higherOrder(4, 5, callBack);