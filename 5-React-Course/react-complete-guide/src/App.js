// ctrl + K + C/U --- shift + alt + F
// First letter is uppercase -> no interfereance with native HTML
// React re-renders by watching props and state
// Managing state happends class-based or via hooks on the function level

// Not "Component" anymore, now a hook -> useX
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // This hook returns two items in array: current state and updateState function -> re-render
  // ArrayDestructuring -> pull elem out of array from return rightside array
  // VERY IMPORTANT: the hook REPLACES the state != MERGE of state with class-based state management
  // Solution -> multiple useState calls allowed, useState(otherState: 'value of the state')
  const [personState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  // This ES6 syntax provides correct access to the class via "this" - Normal function syntax doesn't!
  // Functions within functions!
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximillian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  return (
    // Typically one root elem (or json) per component or as return for this render function
    <div className="App">
      <h1>Test</h1>
      {/* Parentheses in the function ref would execute the function at render-runtime */}
      <button onClick={switchNameHandler}>Switch Names</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );

  // JSx Compiles f.ex. to this:
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Test'));
}

export default app;