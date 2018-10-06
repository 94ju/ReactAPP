import React, { Component } from 'react';
//import logo from './logo.svg';
import classes from './App.css';
import Persons from '../Components/Persons/persons';

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
    let persons = null;
    let btnClass = '';
    if(this.state.showPerson){
      persons =(      
         <div>
           <Persons>
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.namechangeHandler}
               
           </Persons>    
        </div>);    
        btnClass = classes.Red;      
    }  

    return (
      
      <div className={classes.App}> 
       {/* <p className={assingnedClasses.join('')}>check red </p>
        <button className={btnClass}
        onClick={this.tooglePersonHandler}> Search  </button> */}
        {persons}
      </div>
     
    );
  }
}

export default App;
