import React, { Component } from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering');
        return
        <Auxiliary>
            < p key="i1" onClick={this.props.click} >
                I'm a Person and I'm {this.props.name} and I'm {this.props.age} years old!
                </p>,
            < p key="i2" > {this.props.children}</p >,
            <input
                key="i3"
                type="text"
                onChange={this.props.changed}
                value={this.props.name}>

            </input>
        </Auxiliary>
    }
}

export default Person;