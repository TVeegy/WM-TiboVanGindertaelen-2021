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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              // Alternative would be to bind
              click={() => this.deletePersonHandler(index)}
              age={person.age} />
          })}
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
          {persons}
      </div>
    );
  }
}

export default App;