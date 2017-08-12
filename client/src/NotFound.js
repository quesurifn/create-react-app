import React, { Component } from 'react';
import './App.css';


import {connect} from 'react-redux'


@connect((store) => {
  console.log('store',store)
  return {

  }
})
export class NotFound extends Component {



  render() {
  
    return (
      <div className="App">
         <h1>Not Found</h1>
      </div>   
    );
  }
}


