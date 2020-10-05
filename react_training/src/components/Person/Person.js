import React  from 'react';
import  '../../App.css';

import './Person.css'
const person = (props) => {
    return(
        <div className='App'>          
           <p onClick={props.click}>My Name is  {props.name } My Age is {props.age} </p>
            {/* {props.children}*/}
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person