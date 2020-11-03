// ctrl + K + C/U --- shift + alt + F

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // Defining State
  state = {
    persons: [
      { id: 'fdqf', name: 'Max', age: 28 },
      { id: 'dfQF', name: 'Manu', age: 29 },
      { id: 'FSFG', name: 'Stephanie', age: 26 }
    ],
    ohterState: 'some other value'
  }

  // Handler
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

  // Handler
  deletePersonHandler = (personIndex) => {
    // ES6 spread operator - same logic
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  // Handler
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    // Defining Variables
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    // Mapping our JS state content to Jsx DOM content
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              click={() => this.deletePersonHandler(index)}
              age={person.age}
              key={person.id} />
          })}
        </div>
      );
    }

    // Returning the to-be rendered JSx DOM content
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is Really Working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;