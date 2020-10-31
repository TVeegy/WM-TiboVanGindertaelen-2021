import React from 'react';

import '../UserIO/UserIO.css'
import './UserInput.css'

var copy = null;
var showMessage = false;

const userInput = (props) => {
    if (copy == null) copy = props.username;
    if (props.username == copy) showMessage = true;
    else showMessage = false;

    return (
        <div className="UserInput">
            <p >Rename {copy}, to for example, Chrome:</p>
            <input type="text" onChange={props.changed} value={props.username}></input>
            <p hidden={showMessage}>Thanks for Changing the username!</p>
        </div>
    )
};

export default userInput