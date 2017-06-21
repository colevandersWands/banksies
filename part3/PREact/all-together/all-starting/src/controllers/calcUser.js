class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	doMath(id, arg1, arg2) {
		this.model.get(id, (err, op) => {
			if(err) {
				console.log(err)
			} else {
				this.view.render(op.operation(arg1, arg2));
			}
		})
	}

}

module.exports = Controller;