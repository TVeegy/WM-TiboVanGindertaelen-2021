import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  // Constants
  defaultUsername = "Senku";

  // Managing State using the Class-based method (inherited properties)
  state = {
    userInfo: [
      { username: this.defaultUsername }
    ]
  }

  // Some Parameter-driven Handler using the ES6 syntax
  switchUsernameActionHandler = (newUsername) => {
    this.setState({
      output: [
        { username: newUsername }
      ]
    });
  }

  // Some Event-driven Handler using ES6 syntax
  switchUsernameActionHandler = (event) => {
    this.setState({
      output: [
        { username: event.target.value }
      ]
    });
  }

  // Call Render-method and transcode JSx to HTML into the DOM
  render() {
    return (this.provideJSx("Chrome", "Kohaku"));
  }

  // Dumb parent Provider method
  provideJSx = (firstUsername, secondUsername) => {
    return (
      <div className="App" id="rootElem">
        const inlineInputStyle = this.provideInlineInputStyle();
        <UserInput username={this.state.userInfo[0].username} changed={this.switchUsernameActionHandler} style={this.inlineInputStyle}></UserInput>
        <UserOutput username={firstUsername}></UserOutput>
        <UserOutput username={secondUsername}></UserOutput>

        <div className="App" id="rootElem">
          <ol>
            <li><del>Create TWO new components: UserInput and UserOutput</del></li>
            <li><del>UserInput should hold an input element, UserOutput two paragraphs</del></li>
            <li><del>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</del></li>
            <li><del>Pass a username (of your choice) to UserOutput via props and display it there</del></li>
            <li><del>Add state to the App component (=> the username) and pass the username to the UserOutput component</del></li>
            <li><del>Add a method to manipulate the state (=> an event-handler method)</del></li>
            <li><del>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</del></li>
            <li><del>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</del></li>
            <li><del>Add two-way-binding to your input (in UserInput) to also display the starting username</del></li>
            <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
          </ol>
        </div>
      </div>
    )
  }

  // Dumb Provider method - To be applied custom/inline Styling
  provideInlineInputStyle = () => {
    return {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
  }
}

export default App;
