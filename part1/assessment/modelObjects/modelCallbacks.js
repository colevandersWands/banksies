// here's a model object for manipulating people
// people look like this: {name:'', id: 0000}
// make it work
var personModel = {
	DB: {},
	nextID: 0000,
	addPerson: function(newNameString, cb) {
		// code here
	},
	getPersonById: function(personId, cb) {
		// code here
	},
	getPersonByName: function(personId, cb) {
		// code here
	},
	modifyPerson: function(personId, newName, cb) {
		// code here
	},
	deletePerson: function(id, cb) {
		// code here
	},
	getAllPeople: function(cb) {
		// code here
	}
};

console.log('Should print: \"george successfully added\":');
// method call here
console.log('Should print: \"laurens successfully added\":');
// method call here
console.log('Should print: a george object:');
// method call here
console.log('Should print: a laurens object:');
// method call here
console.log('Should print: a your goats object:');
// method call here
console.log('Should print: an array of people');
// method call here
console.log('Should print: an array of peolpe without your goats');
// method call here
console.log('Should print: an array of peolpe without laurens');
// method call here
