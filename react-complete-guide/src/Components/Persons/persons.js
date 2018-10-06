import React from 'react'
import Person from './Person/Person'
const persons = (propes) => propes.persons.map((person ,index) =>{
    return  <Person
        click ={()=>propes.clicked(index)}
        name = {person.name}
        age = {person.age}
        key ={person.id}
        change={(event)=>propes.changed(event , person.id)}
    />
 });
export default persons;