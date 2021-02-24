// React Version 16.8 --> Start Functional Components!!
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonsState] = useState(
    {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value'
    }
  );

  const [otherState, setOtherState] = useState('some other calue');

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })};
    
  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name= {personState.persons[0].name} age={personState.persons[0].age}></Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
    </div>
  );
};

// ES6 Feature;
export default app;

// state = {
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Manu', age: 29 },
//     { name: 'Stephanie', age: 26 }
//   ],
//   otherState: 'some other value'
// }

// // ES6 arrow function (a property, not a function)
// switchNameHandler = () => {
//    // console.log('Was clicked!')
//    // this.state.persons[0].name = 'Maximilian'; WILL NOT WORK
//   this.setState({
//     persons: [
//       { name: 'Maximilian', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 27 }
//     ]
//   });
// }
