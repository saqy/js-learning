import React  from 'react'
import './UserOutput.css'

const UserOutput = (props) => { 
    return(
        <div className='App show_data'>
            <p> User Name : {props.name}</p>
            <p>i m a React Learner</p>
        </div>
    )
}
export default  UserOutput