import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    //return (
    //  <div className="App">
     //   <h1>Hi, Im A React App</h1>
     // </div>
    //);
    return React.createElement("div", null, React.createElement("h1", {className: 'App'}, "Hello") );
  }
}

export default App;
