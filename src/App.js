import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
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

	nameChangedHandler = (event, id) => {

		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({
			persons: persons

		});

	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}


  render() {

  	const style = {
  		font: 'inherit',
  		border: '1px solid blue',
  		padding: '8px',
  		cursor: 'pointer',
  		backgroundColor: 'green',
  		':hover': {
  			backgroundColor: 'lightgreen',
  			color: 'black'
  		}
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
  					key={person.id}
  					changed={(event) => this.nameChangedHandler(event, person.id) } />
  				})}
		    </div>
  		);

		style.backgroundColor = "red";
		style[':hover'] = {
			backgroundColor: 'lightgreen',
			color: 'black'
		}
  	}


	let classes = [];

	if(this.state.persons.length <= 2){
		classes.push('red');
	}
	if(this.state.persons.length <= 1){
		classes.push('bold');
	}

    return (
    <StyleRoot>
      <div className="App">
        <h1>Hi, Im A React App</h1>
        <p className={classes.join(' ')}>this is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
	     
 		{persons}

      </div>
      </StyleRoot>

    );
  //  return React.createElement("div", null, React.createElement("h1", {className: 'App'}, "Hello") );
  }
}

export default Radium(App);
