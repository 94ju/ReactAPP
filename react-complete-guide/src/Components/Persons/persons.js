import React,{Component} from 'react'
import Person from './Person/Person'


class Persons extends Component{
    componentWillMount (){
        console.log('this is persons.js inside componentWill mount');
      }
      componentDidMount(){
        console.log('this is persons.js inside comonentDid mount');
      }
      constructor (props){
          super(props);
          
          console.log('this is from persons.js constructor',props);
      }
    render(){
        console.log('this is from render from persons');
        return this.props.persons.map((person ,index) =>{ 
            return <Person
                click ={()=>this.props.clicked(index)}
                name = {person.name}
                age = {person.age}
                key ={person.id}
                change={(event)=>this.props.changed(event , person.id)} />

        }); 
    }      
}
export default Persons;

