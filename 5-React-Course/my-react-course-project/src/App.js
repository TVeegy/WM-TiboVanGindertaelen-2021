// Importing generally two things; the react lib and the Component class itself
import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <Person></Person>
      </div>
    );
  }
}

// ES6 Feature;
export default App;
