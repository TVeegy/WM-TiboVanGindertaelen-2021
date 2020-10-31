import React from 'react';

import '../UserIO/UserIO.css'
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="UserInput">
            <p >Please mr. {props.username}, rename yourself!</p>
            <input type="text" onChange={props.changed} value={props.username}></input>
        </div>
    )
};

export default userInput