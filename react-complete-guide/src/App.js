import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state ={
    person : [
      {name: "janith" ,age :24},
      {name: "udara" ,age :31}
    ],
    showPerson:false
  }
  switchNameHandler =(newName) => {

    this.setState({
      person : [
        {name: newName ,age :42},
        {name: "udara" ,age :31}
      ]
    })
  }
 namechangeHandler =(event) => {

    this.setState({
      person : [
        {name: event.target.value ,age :422},
        {name: "udara" ,age :31}
      ]
    })
  }
  tooglePersonHandler=()=>{
      console.log("check");
      const doesshow =this.state.showPerson;
      this.setState({showPerson: !doesshow});
  }
  render() {
    const style ={
      backgroundColor : 'white',
      font: 'inherit',
      border :'1px solid blue',
      padding : '8px',
      cursor: 'pointer'
      // boxShadow:' 0 2px 9px #ccc'
    };
   return(
      <div className="App">
        <h1>Hi react </h1>
        <button style={style} onClick={this.tooglePersonHandler}>Toogle Persons</button>
      { this.state.showPerson ===true?
         <div>
            <Person name ="aa"  age ={this.state.person[0].age}/> 
            
            <Person click={this.switchNameHandler} 
                    onIn={this.namechangeHandler}
                    name ={this.state.person[0].name} 
                    age ={this.state.person[1].age}>My Hobby</Person>
            <Person name="Aruna" age="24"></Person>
        </div>: null
      }
 
      </div>
    )
      
  }
}

export default App;
