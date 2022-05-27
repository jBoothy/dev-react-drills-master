import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bulls from '../src/images/bulls.jpeg';

class App extends Component{
constructor(){
  super();

  // this.state={
  //   image: 'http://www.trbimg.com/img-51e06949/turbine/topic-orspt000164'
  // };
}

render(){
  return(
    <div className='parentDiv'>
      <img className='randoImage' src={bulls}/>
    </div>
  )
}
}

export default App;
