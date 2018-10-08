import React ,{Component} from 'react';
import classes from './Person.css';
 
class Person extends Component{
    componentWillMount (){
        console.log('this is person.js inside componentWill mount');
      }
      componentDidMount(){
        console.log('this is person.js inside comonentDid mount');
      }
      constructor (props){
          super(props);
          
          console.log('this is from person.js',props);
      }
        render(){
          return (
              <div className={classes.Person}>
              <p onClick={this.props.click} > I am  {this.props.name} and {this.props.age} </p>
              <p onClick={this.props.click}>{this.props.children}</p>
             
              <input type='text' onChange={this.props.changed} value={this.props.name } ></input>
              </div>
          )
        }
  
  }


export default Person;