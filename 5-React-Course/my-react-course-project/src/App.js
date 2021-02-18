// Importing generally two things; the react lib and the Component class itself
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
      </div>
    );
  }
}

// ES6 Feature; when exporting this file, you'll export this class
export default App;
