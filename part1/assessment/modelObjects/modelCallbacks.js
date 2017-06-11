// here's a model object for manipulating people
// people look like this: {name:'', id: 0000}
// make it work
var personModel = {
	DB: {},
	nextID: 0000,
	addPerson: function(newNameString) {
		var message = '';
		// code here
		return message;
	},
	getPersonById: function(personId) {
		var message = '';
		var person = {};
		// code here
		return [message, person];
	},
	getPersonByName: function(personId) {
		var message = '';
		var person = {};
		// code here
		return [message, person];
	},
	modifyPerson: function(personId, newName) {
		var message = '';
		// code here
		return message;
	},
	deletePerson: function(id) {
		var message = '';
		// code here
		return message;
	},
	getAllPeople: function() {
		var message = '';
		var people = [];	
		// code here
		return [message, people];
	}
};

console.log('Should print: \"george successfully added\":');
console.log('---- ', 'your code here');
console.log('Should print: \"laurens successfully added\":');
console.log('---- ', 'your code here');
console.log('Should print: a george object:');
console.log('---- ', 'your code here');
console.log('Should print: a laurens object:');
console.log('---- ', 'your code here');
console.log('Should print: a your goats object:');
console.log('---- ', 'your code here');
console.log('Should print: an array of people');
console.log('---- ', 'your code here');
console.log('Should print: an array of peolpe without your goats');
console.log('---- ', 'your code here');
console.log('Should print: an array of peolpe without laurens');
console.log('---- ', 'your code here');
