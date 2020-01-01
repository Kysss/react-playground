import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi I am a react app</h1>
        <p> This is a test paragraph.</p>
        <Person name="Max" age="28">My hobbies:Racing</Person>
        <Person name="YY" age="23"></Person>
      </div>
   
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hello...'));
  }
}

export default App;
