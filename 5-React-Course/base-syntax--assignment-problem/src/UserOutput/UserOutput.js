import React from 'react';

import '../UserIO/UserIO.css'
import './UserOutput.css'

const userOutput = (props) => {
    if (props.isToBeChanged)
        return (
            <div className="UserOutput">
                <p>The changeable username is:</p>
                <p>{props.username}</p>
            </div>
        )
    else
        return (
            <div className="UserOutput">
                <p>The hardcoded username is:</p>
                <p>{props.username}</p>
            </div>
        )
};

export default userOutput