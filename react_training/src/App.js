// =====         Using Class Components            ====

import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';
import UserInput from './components/UserInput/UserInput'
import UserOutput from './components/UserOutput/UserOutput'

class App extends Component{
  state={
    person:[
      { id:'as1' , name:'usman' , age:'23'},
      { id:'as2' , name:'Kaleem', age:'23'},
      { id:'as3' , name:'Ishaq',  age:'23'} 
    ],
    username:'Super Max',
    showPerson:false
  }
  switchNameHandler=()=>{
    this.setState({
      person:[
        {  name:'Max' , age:'23'},
        {  name:'Kaleem Ullah', age:'23'},
        {  name:'Ishaq',  age:'25'}
      ]
    }   
    )
  }

  nameChangeHandler=(event , id )=>{
    console.log("test",id)
  const personIndex=this.state.person.findIndex(p=>{
      return p.id === id
    });

    const person = {...this.state.person[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.person];

    persons[personIndex] = person;

    this.setState({person:persons } )
  }
  

  usernameChangeHandler=(event )=>{
    this.setState({
      username: event.target.value
    })
  }

  tooglePersonHandler=()=>{
      const doesshow = this.state.showPerson;
      this.setState({
        showPerson:!doesshow
      })
  }

  deletePersonHAndler = (personIndex)=>{
    // const persons = this.state.person.slice();
    const persons=[...this.state.person];
    persons.splice( personIndex , 1);
    this.setState({person:persons})
  }

  render(){    
    return( 
      <div className='App'>
      <h1>= = Person Task = =</h1>
      <button className='btn-class' onClick={this.tooglePersonHandler}>Toogle</button>

    {this.state.showPerson === true ?
      <div>
      {this.state.person.map((person,index)=>{
        return <Person 
          click={()=>{this.deletePersonHAndler(index)}}
          name={person.name}
          age={person.age} 
          key={person.id}
          changed={(event)=>this.nameChangeHandler(event,person.id)}
          />
        })}
      </div> : null}
    
          <h1>= = Task-1 = =</h1> 
        <div style={{padding:'20px 0px'}}>
            <UserInput name={this.state.username} changed={this.usernameChangeHandler} />
            <UserOutput name = {this.state.username}  />
            <UserOutput name = {this.state.username}  />
            <UserOutput name = {this.state.username}    />
         </div>
        </div>
    )
  }
}
export default App


// = = = =     Using Functional Components  = = =  = =

// import React, {useEffect, useState} from 'react';
// import './App.css';
// import Person from './components/Person/Person';

// const App=(props)=>{

//  const [personstate, setpersonstate] = useState(
//    {
//      person:[
//        {name:'usman',age:'21'},
//        {name:'kaleem',age:'22'},
//        {name:'ishaq',age:'22'}
//      ],
//      otherstate:'i am another State'
//     }
//   );

//   useEffect(() => {
//     console.log(personstate)
//   });
//   const personHandler=()=>{
//     setpersonstate({
//       person:[
//         {name:'usman Ali',age:'21'},
//         {name:'kaleem Ullah',age:'22'},
//         {name:'ishaq khan',age:'22'}
//       ],
//       otherstate:personstate.otherstate
//     })
//   }
//   return(
//     <div className='App'>
//         <Person  name={personstate.person[0].name}  age={personstate.person[0].age}  />
//         <Person  name={personstate.person[1].name}  age={personstate.person[1].age}  />
//         <Person  name={personstate.person[2].name}  age={personstate.person[2].age}  />
//         <button className='btn-class' onClick={personHandler}>Switch Names</button>
//     </div>
//   )
// }
