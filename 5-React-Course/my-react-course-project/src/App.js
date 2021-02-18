// Importing two things; React as a mechanic and the Comp class
import React, { Component } from 'react';
import './App.css';

// Gets rendered by the index.js file (NOTE: the index file is js and not html, rendering one root comp nesting all else)
class App extends Component {
  // each comp has to return to-be-rendered pseudo html
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
      </div>
    );
  }
}

// ES6 feature: if you imp this file, you imp this class
export default App;
