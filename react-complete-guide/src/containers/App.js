import React, { Component } from 'react';
//import logo from './logo.svg';
import classes from './App.css';
import Persons from '../Components/Persons/persons';
import Cockpit from '../Components/Cockpit/Cockpit';

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
    const personIndex = this.state.Persons.findIndex(p => {
      return p.id == id;
    });
    const person = {
      ...this.state.Persons[personIndex]
    }
    person.name = event.target.value;
    const persons =[...this.state.Persons];
    Persons[personIndex]=Persons;
    this.setState({Persons:Persons});

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
    let persons = null;
    if(this.state.showPerson){
      persons =<Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.namechangeHandler}
                />    
    }  

    return (
      
      <div className={classes.App}> 
        <Cockpit 
          showPerson= {this.state.showPerson}
          persons={this.state.persons}
          check={this.tooglePersonHandler}/>
          {persons}
      </div>
     
    );
  }
}

export default App;
