import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
   return(
      <div className="App">
        <h1>Hi react </h1>
        <Person name ="Janith" age = "18"/> 
      </div>
    )
      
  }
}

export default App;
