// 	big leap:  closures  
// 	
//	'context' describles how one variable name can have several meanings depending on where it is used.
// 	closures are when a function 'remembers' the context where it was created, even after it has left.
//  you can think of it a little like a function having default arguments


// your current orientation
// 0 = north
var orientation = 0;

// cardinal directions do not change
// they are not defined in a closure

var cardinals = ['north', 'east', 'south', 'west'];
var north = function() {console.log(cardinals[0]);};
var south = function() {console.log(cardinals[1]);};
var east = function() {console.log(cardinals[2]);};
var west = function() {console.log(cardinals[3]);};

// relative directions change
// they are redefined with closure
var right = function() {};
var left = function() {};
var straight = function() {};
var back = function() {};

// turn - changes which way is straight
//		turned: 'l' is left, 'r' is right
//		numberOf: number of 90 degree turns in that direction
//		orientation: player's current orientation
//		returns a new orientation and closes over relative directions
var turn = function(turned, numberOf, oldOrient) {
	var newOrient;
	var message = '';
	// determine new direction
	if (turned == 'l') {
		newOrient = oldOrient - numberOf;
		message = '\nturning left ' + numberOf + ' times';
	} else if (turned == 'r') {
		newOrient = oldOrient + numberOf;
		message = '\nturning right ' + numberOf + ' times';
	} else {
		newOrient = oldOrient;
	}

	// if they didn't turn,  set the message accordingly
	if ( (newOrient%4) == (oldOrient%4) ) {
		if (turned == 'l' || turned == 'r') {
			message = '\ntools turn straight';
		} else {
			message = '\n' + turned
		}
	}


	newOrient = newOrient%4

	// *********************************    //
	// locally defining s,r,l,b
	var s = cardinals[(0 + newOrient)%4];
	var r = cardinals[(1 + newOrient)%4];
	var l = cardinals[(2 + newOrient)%4];
	var b = cardinals[(3 + newOrient)%4];
	// closing functions over the scope inside 'turn'
	straight = function () {console.log('straight: ' + s)};
	right = function () {console.log('right: ' + r)};
	left = function () {console.log('left: ' + l)};
	back = function () {console.log('back: ' + b)};
	// *******************************   //

	return [message, newOrient];
}; 

// ------------------------------------------------------ //


// turn is not a pure function - it reassignes the relative printers to closed functions
// orientation needs to be reassigned at every turn

var orientation = 0;
var returned;
returned = turn(4, 9, orientation);
console.log(returned[0])
straight();
right();
back();
left();
returned = turn('r', 4, returned[1]);
console.log(returned[0])
straight();
right();
back();
left();
returned = turn('r', 3, returned[1]);
console.log(returned[0])
straight();
right();
back();
left();
returned = turn('r', 2, returned[1]);
console.log(returned[0])
straight();
right();
back();
left();
returned = turn('l', 1, returned[1]);
console.log(returned[0])
straight();
right();
back();
left();
returned = turn('foot', 6, returned[1]);
console.log(returned[0])
straight();
right();
back();
left();








