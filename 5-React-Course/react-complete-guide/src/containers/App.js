// ctrl + K + C/U --- shift + alt + F

import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  // Defining State
  state = {
    persons: [
      { id: 'ffff', name: 'Max', age: 28 },
      { id: 'dddd', name: 'Manu', age: 29 },
      { id: 'gggg', name: 'Stephanie', age: 26 }
    ],
    ohterState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] commonentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] commonentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    // Without this, used state -> quicker accessed by other call (concurrency)
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: this.state.changeCounter + 1
      }
    });
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
      <Auxiliary>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} />
        {persons}
      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);