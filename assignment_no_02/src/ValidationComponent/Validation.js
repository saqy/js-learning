import React from 'react'

const Validation = (props) =>{
    
    let validationmsg='Text long Enough';

    if(props.input<=5){
        validationmsg='Text too Short'
    }

    return (
        <div>
        <p>{validationmsg}</p>      
  
        </div>
    )
}

export default Validation;