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
      componentWillReceiveProps(nextProps){
            console.log('this is from persons.js will receive update',nextProps);
      }
      shouldComponentUpdate(nextProps,nextState){
          console.log('this is inside persons.js update',nextProps,nextState);
          return nextProps.persons !== this.props.persons || 
          nextProps.changed !== this.props.changed ||
          nextProps.clicked !== this.props.clicked;
        //   return true;
      }
      componentWillUpdate(nextProps,nextState){
          console.log('this is inside persons.js will update',nextProps,nextState);
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

