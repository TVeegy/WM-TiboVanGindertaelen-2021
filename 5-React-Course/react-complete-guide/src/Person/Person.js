import React from 'react';

// ES6 approach - BPE
const person = (props) => {
    return (
    <div>
        <p onClick={props.click}>I'm a Person and I'm {props.name} and I'm {props.age} years old!</p>
        <p>{props.children}</p>
    </div>
    )
};

export default person