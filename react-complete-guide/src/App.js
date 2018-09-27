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
      namechangeHandler =(event) => {
          this.setState({
            person : [
              {name: event.target.value ,age :422},
              {name: "udara" ,age :31}
            ]
          })
      }
      deletePersonHandler =(personIndex) =>{
            const person =this.state.person;
            person.splice(personIndex);
            this.setState({person:person})
      }
      tooglePersonHandler=()=>{
            const doesshow =this.state.showPerson;
            this.setState({showPerson: !doesshow});
      }
      render() {
          const style ={
            backgroundColor : 'red',
            font: 'inherit',
            border :'1px solid blue',
            padding : '8px',
            cursor: 'pointer'
          };
          let person = null;
          if(this.state.showPerson){
                person =(    
                <div>
                  {
                    this.state.person.map((persons,index)=>{
                    return <Person
                    click = {()=>this.deletePersonHandler(index)}
                    name={persons.name}
                    age={persons.age}/>
                  })}
                  {/* <Person name ="aa"  age ={this.state.person[0].age}/> 
                  
                  <Person click={this.switchNameHandler} 
                          onIn={this.namechangeHandler}
                          name ={this.state.person[0].name} 
                          age ={this.state.person[1].age}>My Hobby</Person>
                  <Person name="Aruna" age="24"></Person> */}
                </div>)
                style.backgroundColor='red';
          }
          return(
              <div className="App">
                <h1>Hi react </h1>
                <button style={style} onClick={this.tooglePersonHandler}>Toogle Persons</button>
                { 
                  person 
                }
        
              </div>
          )
      
      }
}

export default App;
