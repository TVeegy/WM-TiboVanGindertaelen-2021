// ctrl + K + C/U --- shift + alt + F
// React re-rendering -> watching props or state

import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    ohterState: 'some other value'
  }

  // ES6 syntax provides correct scoping -> this-referencing possible
  // Functions nesting!
  switchNameAndAgeHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Maximillian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  render () {
    return (
      // Typically one root elem (or json) per component or as return for this render function
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is Really Working!</p>
        <button onClick={this.switchNameAndAgeHandler}>Switch Names</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameAndAgeHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;