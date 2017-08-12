import React, { Component } from 'react';
import './App.css';


import {connect} from 'react-redux'
import Background from './images/food.jpg'

import {Button} from 'react-materialize'

@connect((store) => {
  console.log('store',store)
  return {

  }
})
export class Home extends Component {
  render() {
    var sectionStyle = {
      width: "100%",
      height: "450px",
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    };
  
    return (
      <div className="App">
        <div className="hero" style={sectionStyle} >
            
          <h1>Food is better when you know where it comes from</h1>
          <Button waves='light'>Shop Plans</Button>
        </div>
      
      </div>
    );
  }
}


