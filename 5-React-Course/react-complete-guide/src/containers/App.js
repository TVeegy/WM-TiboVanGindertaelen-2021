// ctrl + K + C/U --- shift + alt + F

import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // state init allowed, mordern syntax is under this
    // this.state = and not setState as there is no state to merge with
  }
  
  // Defining State
  state = {
    persons: [
      { id: 'ffff', name: 'Max', age: 28 },
      { id: 'dddd', name: 'Manu', age: 29 },
      { id: 'gggg', name: 'Stephanie', age: 26 }
    ],
    ohterState: 'some other value'
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] commonentWillMount');
  }
  
  componentDidMount() {
    console.log('[App.js] commonentDidMount');
  }

  // Handler
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  // Handler
  deletePersonHandler = (personIndex) => {
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
    console.log('[App.js] render');
    let persons = null;

    // Mapping our JS state content to Jsx DOM content
    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
    }

    // Returning the to-be rendered JSx DOM content
    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;