import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import React from 'react'


class App extends Component{
    constructor(){
        super();
        
        this.state = {
            userInput: ''
        };
    }

    handleChange(input){
        this.setState({ userInput: input})
    }

render(){
    return(
        <div className='div1'>
        <input className='userInput' onChange={(e)=>this.handleChange(e.target.value)} type='text'></input>
        <p>{this.state.userInput}</p>
        </div>
    );
}
}

export default App;
