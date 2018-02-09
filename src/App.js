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
		otherState: 'some other value',
		showPersons: false
	}

	switchNameHandler = (newName) => {
		// this.state.person[0].name = "Maximilian";
		this.setState({
			persons: [
		{ name: newName, age: 28},
		{ name: 'Manu', age: 26},
		{ name: 'Barbs', age: 25}
			]

		});
	}

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
		{ name: 'Max', age: 28},
		{ name: event.target.value, age: 26},
		{ name: 'Barbs', age: 23}
			]

		});

	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}


  render() {

  	const style = {
  		backgroundColor: 'white',
  		font: 'inherit',
  		border: '1px solid blue',
  		padding: '8px',
  		cursor: 'pointer'
  	};

    return (
      <div className="App">
        <h1>Hi, Im A React App</h1>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
	      { this.state.showPersons ?
		      	<div>
			      <Person 
			      name={this.state.persons[0].name}
			       age={this.state.persons[0].age} />
			      <Person
			       name={this.state.persons[1].name}
			        age={this.state.persons[1].age}
			        click={this.switchNameHandler.bind(this, '2')}
			        changed={this.nameChangedHandler}> My Hobbies: Racing</Person>
			      <Person 
			      name={this.state.persons[2].name} 
			      age={this.state.persons[2].age} />
		      </div> : null
	  }
      </div>

    );
  //  return React.createElement("div", null, React.createElement("h1", {className: 'App'}, "Hello") );
  }
}

export default App;
