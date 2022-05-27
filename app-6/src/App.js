import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
constructor(){
  super()

  this.state={
    userInput: '',
    listOfChores: []
  }
}

handleChange(input){
  this.setState({ userInput: input })
}

pushChores(userInput){
  let listOfChores = []
  for(let i=0;i<userInput;i++){
    listOfChores.push(userInput[i])
  }
  return listOfChores
}

render(){
  return(
    <div className='App'>
      <h2>The Honey-do List</h2>
      <input className='inputLine' onChange={(e)=>handleChange(e.target.value)}></input>
      <button className='submitBtn' onClick={()=>this.state.userInput}>SUBMIT THAT ISH</button>
      <span className='resultsBox'>Stuff you now have to do: {JSON.stringify(this.state.listOfChores, null, 10)}</span>
    </div>
  );
}
}

export default App;
