// a simple terminal-based 'single-page' MVC app built with classes
// added a controller since the last file

/*
VIEW: displays data in a friendly way, used by a CONTROLLER object
   properties:
     template: a template string for embedding data strings
   methods:
     constructor:
       args: a string template
       returns: a 'view' object
       behavior: sets a new 'view' objects 'template' and returns it
     render: 
       args: a string 
       returns: undefined
       behavior: concatinates arg with the template string, and logs it    
*/
class View {
  constructor(template) {
    this.template = template;
  }

  render(value) {
    var compiled = this.template + value;
    console.log(compiled);
  }
}

/*
BROWSERVIEW: extends VIEW to be front-end compatible
  properties:
    template: *super*
  methods:
    constructor:
      *super*
    render:
      args: an array of strings
      returns: html text with arg strings embedded
      behavior: produces a popup
*/
class Model {
  constructor() {
    this.db = {};
    this.nextId = 0;
  }

  // pushes something that looks like this: {key: value}
  addOne(key, val) {
  	this.db[key] = {};
  	this.db[key].val = {};
  	this.db[key].val =  val;
  	this.db[key]._id = this.nextId;
  	this.nextId ++;
  }

  getOne(key) {
  	return this.db[key];
  }

  getAll() {
  	var values = [];
  	for (var key in this.db) {
  		values.push(this.db[key].val)
  	}
    return values;
  }

  update(key, newValue) {
  	this.db[key].val = newValue;
  }

  remove(key) {
  	delete this.db[key];
  }
}

/*
CONTROLLER: moderates the view and model classes
  properties:
    model: a model instance
    view: a view instance
  methods:
    getOne: 
      args: key to be retrieved
      returns: nothing
      behavior: accesses the key's value from model and displays it with view
    getAll:
      args: nope
      returns: nope
      behavior: retrieves all values from model and displays them with the view
    update:
      args: key to update and new value
      returns: nope
      behavior: updates the selected item then displays all
    post:
      args: new key, new value
      returns: nope
      behavior: adds the new db element then displays the database
    remove: 
      args: the key to be removed
      returns: nope
      behavior: removes the selected item and displays the new database
*/
class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	getOne(key) {
		var value = this.model.db[key].val;
		this.view.render(value)
	}

	getAll() {
		this.view.render(this.model.getAll());
	}

	update(key, valueNew) {
		this.model.update(key, valueNew);
		this.view.render(this.model.getAll());
	}

	post(key, value) {
		console.log(this.model);
		this.model.addOne(key, value);
		console.log(this.model);
		this.getAll();
	}

	remove(key) {
		this.model.remove(key);
		this.getAll();
	}
}

//-----------------------------

var mod = new Model();
var vie = new View('yo there ');
var con = new Controller(mod, vie)


con.post('robert', 'fletcher');
con.post('pedro', 'favorite');
con.getOne('robert');
con.remove('robert');
con.update('pedro', 'cole');
console.log(con.model.db);

