// ctrl + K + C/U --- shift + alt + F

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // Defining State
  state = {
    persons: [
      { id: 'ffff', name: 'Max', age: 28 },
      { id: 'dddd', name: 'Manu', age: 29 },
      { id: 'gggg', name: 'Stephanie', age: 26 }
    ],
    ohterState: 'some other value'
  }

  // Handler
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Modern approach
    const person = { ...this.state.persons[personIndex] };

    // Alt approach
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons]; // Remember Slice
    persons[personIndex] = person;

    this.setState({ persons: persons }); //
  }

  // Handler
  deletePersonHandler = (personIndex) => {
    // ES6 spread operator - same logic
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
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