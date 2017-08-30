import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import './App.css';

import {connect} from 'react-redux'
import {setFaceBookToken, userInfo} from './actions/action'
import AlertContainer from 'react-alert'

import {Row, Col} from 'react-materialize'

import {Button} from 'react-materialize'
import box from './images/boxoffood.png'


import buy1 from './images/buy1.png'
import buy2 from './images/buytwo.png'

import logo from './images/food-crates-logo.png'


@connect((store) => {
  return {
    fbkey: store.reducer.fbkey,
    userinfo: store.reducer.userinfo
  }
})
export class StepOne extends Component {
  constructor() {
    super() 
 this.stepTwo = this.stepTwo.bind(this)
  }

  componentDidMount() {
      var element = document.querySelector("html"); 
      console.log(element)
      element.style.overflowX = 'scroll'
      window.scroll(0,0)
      element.style.overflowX = 'hidden'


    }    

    

    
    stepTwo(obj) {
 

        this.props.dispatch(userInfo(obj))
        this.props.history.push('/steptwo')

    }

   

  render() {
    const responseFacebook = (response) => {
      this.props.dispatch(setFaceBookToken(response))
    }


   
    
    return (

      <Row>
        <Col s={12} m={12}>
          <Row className='buy' onClick={this.stepTwo}>
  
            <img src={buy1} style={{cursor: 'pointer'}} alt='buy one' />
            <img src={buy2} style={{cursor: 'pointer'}} alt='buy two' />
          </Row>
        </Col>
      </Row>
    );
  }
}


