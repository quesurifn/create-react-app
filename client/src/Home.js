import React, { Component } from 'react';
import './App.css';


import {connect} from 'react-redux'
import Background from './images/food.jpg'
import Logo from './images/logo.svg'

import {Button} from 'react-materialize'

export class Home extends Component {
  constructor() {
    super() 
    this.startCheckout= this.startCheckout.bind(this);
  }

  startCheckout() {
    this.props.history.push('/stepone')
  }

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
          <Button waves='light' onClick={this.startCheckout}>Shop Plans</Button>
        </div>
      
      </div>
    );
  }
}


