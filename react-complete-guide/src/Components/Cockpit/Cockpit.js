import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';


const cockpit =(props) =>{
    let assingnedClasses = [];
    // let btnClass=classes.Button;
    let btnClass=[];
    if (props.showPerson){
        //btnClass=[classes.Button ,classes.Red].join('');
        btnClass.push(classes.Button.Red);
       // assingnedClasses.push(classes.red);
    }
 
    if(props.persons.length<= 2){
      assingnedClasses.push(classes.red);
    }
    if(props.persons.length> 2){
      assingnedClasses.push(classes.bold);
    }
    return(
        <Aux>
            <p className={assingnedClasses.join('')}>check red </p>
            <button className={btnClass}
            onClick={props.check}> Search  </button>
        </Aux>

        
    );

};

export default cockpit;