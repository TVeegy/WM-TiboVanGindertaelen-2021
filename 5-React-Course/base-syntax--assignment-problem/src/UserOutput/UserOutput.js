import React from 'react';

import '../UserIO/UserIO.css'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Your username is:</p>
            <p>{props.username}</p>
        </div>
    )
};

export default userOutput