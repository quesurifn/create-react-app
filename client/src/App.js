import React, { Component } from 'react';
import './App.css';


import {connect} from 'react-redux'


@connect((store) => {
  console.log('store',store)
  return {

  }
})
export class App extends Component {



  render() {
  
    return (
      <div className="App">
         
      
        </div>
    );
  }
}


