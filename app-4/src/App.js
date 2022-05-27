import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state={
      usernameInput: '',
      passwordInput: ''
    };
  }

  unInput(input){
    this.setState({ usernameInput: input })
  }

  passInput(pass){
    this.setState({ passwordInput: pass})
  }

  alert(){
    window.alert('Username: ' + this.state.usernameInput + ', Password: ' + {})
  }
  render(){
    return(
      <div className='App-header'>
      <h4>Submit Username and Password</h4>
        <input className='username' type='text' onChange={(e)=>this.unInput(e.target.value)}></input>
        <input className='password' type='password' onChange={(e)=>this.passInput(e.target.value)}></input>
        <button className='submitButton' onClick={()=>window.alert('Username: '+this.state.usernameInput+', Password: '+this.state.passwordInput)}>Submit</button>
      </div>
    );
  }
}


export default App;
