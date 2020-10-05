import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char'
class App extends Component{
  state={
    userInput:''
  }

  inputChangeHandler =(event)=>{
    this.setState({
      userInput:event.target.value
    })
  }
  delCharHandler = ( index ) => {
    const txt=this.state.userInput.split('');
    txt.splice(index,1);
    const updatedText=txt.join('');
    this.setState({userInput:updatedText})
  }

  render(){
    let CharList = this.state.userInput.split('').map((ch,index)=>{
        return <Char
          char={ch}
          key={index}
          click={()=>{
            this.delCharHandler(index)
          }}
          />
    })
  return(    
    <div className='App'>
    <input 
      type='text' 
      onChange={this.inputChangeHandler}
      value={this.state.userInput}
    />
    <p>{this.state.userInput}</p>
    <Validation  input = {this.state.userInput.length}/>
    {
      CharList
    }
    </div>
  )

}

}

export default App;
