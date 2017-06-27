advanced js:
    skip prototype inheritance
    classes
    super/extends
    closures(simple) + bind
pre-react:
    promises
    babel
    lodash
    moduling
react:
    the series
    sort out these two: 
        the bind thing (when relevant)
        the parenthesis in brackets thing

react:
	0 - classes and babel
		see jasper in classes
	1 - render html. 
		stateless components
		0 - pure es6 function.  return html -> div, a, ... 
		1 - class extends
		2 - render variables
		we may have eslint problems here
		explain when 0 vs 1.  0 if only props, one off returns from a function
		stateless when ever possible
	2 - single component state - simple buttons
		initialize state in constructor
		method to increment/decrement
		include method in button
		inside curly braces no '()'
	3 - properties
		reuse first stateless (purely es6 guy)
		include number 1's in number 2's
	4 - pause in moving forward - complexify
		illustrate react only returning one thing
		file he sent me
		combining states and props
	5 - styling
		styled-components.com good 
		good video
		site has good docs and tuts
	6 - server calls
		0 - http.get
		1 - fetch
		data only comes on buttons
		home page, button to navigate to data display
	7 - lifecycle
		data on page load
	--------------------------------------------------------  end react, enter practices
	8 - concerns
		data and display components
		just a convention

extra stuff:
	* prettier.js - strong and opinioned linty stuff. everyone's files are the same
	* webstorm will adjust files to match dependencies when things are shifted
	* setState - to overcome all children being rerendered when parent state updated

other thoughts:
    from sketch to components
    how much time to spend on preact?

    




import React from 'react';
 
export default class App extends React.Component {
    constructor() {
        super();
        this.increaseNumber = this.increaseNumber.bind(this);
        this.state = {
            number: 0
        };
    }
    increaseNumber() {
        this.setState({
            number: this.state.number + 1
        });
    }
  render() {
    return (
      <div>
                <p>The number is {this.state.number}</p>
                <button onClick={this.increaseNumber} />
                <MyComponent name="Jasper" />
                <IncreaseButton incrementation={10} />
      </div>
    )
  }
}
 
const MyComponent = (props) => {
    return (
        <div>
            Hello {props.name}
        </div>
    );
};
 
class IncreaseButton extends React.Component {
  constructor() {
    super();
        this.increaseNumber = this.increaseNumber.bind(this);
    this.state = {
        value: 0
        };
  }
    increaseNumber() {
        this.setState({
            value: this.value.number + this.props.incrementation
        });
    }
  render() {
    return (
        <div>
                <div>Current Value: {this.state.value}</div>
                <button onClick={this.increaseNumber} />
            </div>
        );
  }
}


