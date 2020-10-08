import React, {Component} from 'react';
import './App.css';
import Validation from "./Validation/Validation";
import Char from "./Char/Char";


class App extends Component {

  state = {
    userName: ' '
  }

  changeInputHandler = (event) =>{
    this.setState({userName: event.target.value});
  }

  deleteCharhandler = (index) => {
    const text = this.state.userName.split('');
    text.splice(index,1);
    const updateText = text.join('');
    this.setState({userName: updateText});
  }
  render(){

    const charList = this.state.userName.split('').map( (ch, index) => {
      return <Char 
        character={ch}
        key={index}
        clicked={(event) => this.deleteCharhandler(index)} />
    })

    return (  
      <div className="App">
        <input type="text" onChange={this.changeInputHandler} value={this.state.userName} />
        <p>{this.state.userName}</p>
        <Validation inputLength={this.state.userName.length} />
        {charList}
      </div>
    );
  }
}
export default App;
