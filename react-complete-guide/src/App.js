import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons :[
      {id :'1', name : 'Janith' ,age :'24'},
      {id :'2', name : 'kamal', age:'13'},
      {id :'3', name : 'kamala', age:'3'}
    ],
    showPerson : false
  }
  switchNameHandler = (name) =>{
    console.log("checked");
    this.setState ({
      persons :[
        {name : name ,age :'24'},
        {name : 'kamal', age:'13'},
        {name : name, age:'3'}
      ]
    })
  }
  namechangeHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons =[...this.state.persons];
    persons[personIndex]=persons;
    this.setState({persons:persons});

    this.setState ({
      persons :[
        {name : 'Udara' ,age :'24'},
        {name : event.target.value , age:'13'},
        {name : 'Herath', age:'3'}
      ]
    })
  }
  tooglePersonHandler = () =>{
        showPerson : true
        const deskshow =this.state.showPerson;
        this.setState({showPerson:!deskshow});
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex , 1);
    this.setState({persons:persons});
  }
  render() {
     const style ={
        backgroundColour :'green',
        font : 'ingerit',
        border : '1px solid blue',
        padding : '8px'
    }
    let persons = null;
    if(this.state.showPerson){
      persons =(      
         <div>
           {this.state.persons.map((person ,index) => {
             return  <Person 
              click ={()=>this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key ={person.id}
              change={(event)=>this.namechangeHandler(event , person.id)}
              />
           })}
    
        </div>)
    }
    return (
      <div className="App"> 
        <button
        style = {style}
        onClick={this.tooglePersonHandler}> Search  </button>
        {persons}
      </div>
    );
  }
}

export default App;
