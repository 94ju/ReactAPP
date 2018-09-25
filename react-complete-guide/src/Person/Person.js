import React from 'react'; 
import './person.css';

const person =(props ) =>{
    return (
        <div className="person">
            {/* <p>I am {props.name} and I am {props.age} years old {props.children}</p> */}
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old </p>
            <input onChange={props.onIn} type="text"></input>
           
        </div>
        ) 
};
export default person;