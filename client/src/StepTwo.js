import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'



import {Button} from 'react-materialize'

import Slider from './Slider'

export class StepTwo extends Component {
  constructor() {
    super() 

  }

  render() {
    return (
      <div className="App">
        <Slider
          loop={ true }
          showNav={ false }
          selected={ 2 }>
          <div style={{ background: '#21BB9A' }}>A</div>
          <div style={{ background: '#329ADD' }}>B</div>
          <div style={{ background: '#9A5CB9' }}>C</div>
          <div style={{ background: '#E64C3C' }}>D</div>
          <div style={{ background: '#2D3F52' }}>E</div>
        </Slider>
      </div>
    );
  }
}


