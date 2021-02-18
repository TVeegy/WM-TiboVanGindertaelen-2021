import React from 'react';

const person = (props) => {
    return( 
    <div>
        {/* You can pass external content by props or children */}
        {/* Note: for each not-present child, an empty <p> gets rendered */}
        <p>I'm a {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
    </div>
    );
};

export default person;