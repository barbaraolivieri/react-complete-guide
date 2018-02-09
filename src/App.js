import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

	state = {
		persons: [
		{ name: 'Max', age: 28},
		{ name: 'Manu', age: 26},
		{ name: 'Barbs', age: 23}

		],
		otherState: 'some other value'
	}

	switchNameHandler = () => {
		// this.state.person[0].name = "Maximilian";
		this.setState({
			persons: [
		{ name: 'Maximilian', age: 28},
		{ name: 'Manu', age: 26},
		{ name: 'Barbs', age: 25}
			]

		});
	}

  render() {
    return (
      <div className="App">
        <h1>Hi, Im A React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>

    );
  //  return React.createElement("div", null, React.createElement("h1", {className: 'App'}, "Hello") );
  }
}

export default App;
