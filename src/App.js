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

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
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

  	let persons = null;

  	if(this.state.showPersons) {
  		persons = (
  			<div>
  				{this.state.persons.map((person,index) => {
  					return <Person 
  					click={ () => this.deletePersonHandler(index)}
  					name={person.name} 
  					age={person.age} 
  					/>
  				})}
		      </div>
  		);

  	}

    return (
      <div className="App">
        <h1>Hi, Im A React App</h1>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
	     
 		{persons}

      </div>

    );
  //  return React.createElement("div", null, React.createElement("h1", {className: 'App'}, "Hello") );
  }
}

export default App;
