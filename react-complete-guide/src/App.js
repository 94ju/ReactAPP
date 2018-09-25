import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    person : [
      {name: "janith" ,age :24},
      {name: "udara" ,age :31}
    ]
  }
  switchNameHandler =() => {

    this.setState({
      person : [
        {name: "Anil Herath" ,age :42},
        {name: "udara" ,age :31}
      ]
    })
  }
  render() {
   return(
      <div className="App">
        <h1>Hi react </h1>
        <button onClick={this.switchNameHandler}>Switch Button</button>
        <Person name ={this.state.person[0].name}  age ={this.state.person[0].age}/> 
        <Person click={this.switchNameHandler} name ={this.state.person[0].name}  age ={this.state.person[1].age}>My Hobby</Person>
      </div>
    )
      
  }
}

export default App;
