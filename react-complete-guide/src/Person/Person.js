import React ,{Compoent} from 'react';
import './Person.css';
 

const person = (propes) => {
    return (
        <div className="Person">
        <p onClick={propes.click} > I am  {propes.name} and {propes.age} </p>
        <p onClick={propes.click}>{propes.children}</p>
       
        <input type='text' onChange={propes.changed} value={propes.name } ></input>
        </div>
    )
};
export default Radium(person);