// ctrl + K + C/U --- shift + alt + F
// React re-rendering -> watching props or state

import React, { Component } from 'react';
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
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      otherStaet: 'some value',
      showPersons: false
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
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

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameAndAgeHandler.bind(this, 'Maximillian!')}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      // Typically one root elem (or json) per component or as return for this render function
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is Really Working!</p>
        <button
          style={style}
          // Function call: onClick={() => this.togglePersonsHandler}>Switch Names</button>
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {/* Ternary expression, no block statements allowed. Use of === */}
        { this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameAndAgeHandler.bind(this, 'Maximillian!')}
              changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null}
      </div>
    );
  }
}

export default App;