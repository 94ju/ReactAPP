import React from 'react';
import classes from './Cockpit.css'

const cockpit =(propes) =>{
    let assingnedClasses = [];
    if(propes.persons.length<= 2){
      assingnedClasses.push(classes.red);
    }
    if(propes.persons.length> 2){
      assingnedClasses.push(classes.bold);
    }
    return(
        <div className={classes.Cockpit}>
            <p className={assingnedClasses.join('')}>check red </p>
            <button className={btnClass}
            onClick={this.tooglePersonHandler}> Search  </button>
        </div>

        
    );

};

export default cockpit;