import React from 'react';

const validation = (props) =>{
    let validationMessage = 'Text too long';

    if(props.inputLength <= 5 )
    {
        validationMessage = "Text too Short"
    }
    return( 
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;