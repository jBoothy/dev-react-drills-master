import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Todo"

class App extends Component{
constructor(){
  super()

  this.state={
    userInput: '',
    listOfChores: []
  }
  this.handleAddChore = this.handleAddChore.bind(this)
}

handleInputChange(input){
  this.setState({ userInput: input })
}

handleAddChore(){
  this.setState({
    listOfChores: [...this.state.listOfChores, this.state.userInput],
    userInput: ''
  })
}

render(){
  let list = this.state.listOfChores.map((element, index) => {
    return <Todo key={index} task={element} />;
  });

  return (
    <div className="App">
      <h1>My to-do list:</h1>

      <div>
        <input
          value={this.state.userInput}
          placeholder="Enter new task"
          onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleAddChore}>Add</button>
      </div>

      <br />

      {list}
    </div>
  );
}
}

export default App;
