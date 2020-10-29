// ctrl + K + C/U --- shift + alt + F
// React re-rendering -> watching props or state
// State-management in two ways, prop for class-based and hooks for functional

// Importing components AND hooks
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // Hooks returns current state and setter
  // ArrayDestructuring -> Multi-Define vars on function return (Array Destructurising)
  // VERY IMPORTANT: Class-based MERGES as opposed to hook which REPLACES (losing properties!)
  // Solution -> reference/specify target prop in useState call
  const [personState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  // ES6 syntax provides correct scoping -> this-referencing possible
  // Functions nesting!
  const switchNameAndAgeHandler = () => {
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
      <button onClick={switchNameAndAgeHandler}>Switch Names</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age} />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age} 
        click={switchNameAndAgeHandler}>My Hobbies: Racing</Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age} />
    </div>
  );

  // JSx Compiles f.ex. to this:
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Test'));
}

export default app;