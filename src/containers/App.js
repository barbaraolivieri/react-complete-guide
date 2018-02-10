import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';


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



  	let persons = null;

  	let btnClass = '';

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

  	btnClass = classes.Red;



  	}


	let assignedClasses = [];

	if(this.state.persons.length <= 2){
		assignedClasses.push( classes.red );
	}
	if(this.state.persons.length <= 1){
		assignedClasses.push( classes.bold );
	}

    return (
   
      <div className={classes.App}>
        <h1>Hi, Im A React App</h1>
        <p className={assignedClasses.join(' ')}>this is really working</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>Switch Name</button>
	    
 		{persons}

      </div>
      

    );
  //  return React.createElement("div", null, React.createElement("h1", {className: 'App'}, "Hello") );
  }
}

export default App;