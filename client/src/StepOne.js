import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import './App.css';

import {connect} from 'react-redux'
import {setFaceBookToken, userInfo} from './actions/action'
import AlertContainer from 'react-alert'

import {Row, Col} from 'react-materialize'

import {Button} from 'react-materialize'
import box from './images/boxoffood.png'

import meatplatter from './images/meatplatter.jpg'

@connect((store) => {
  return {
    fbkey: store.reducer.fbkey,
    userinfo: store.reducer.userinfo
  }
})
export class StepOne extends Component {
  constructor() {
    super() 
    this.isItValid = this.isItValid.bind(this)
    this.stepTwo = this.stepTwo.bind(this)
  }

  componentDidMount() {
      var element = document.querySelector("html"); 
      console.log(element)
      element.style.overflowX = 'scroll'
      window.scroll(0,0)
      element.style.overflowX = 'hidden'

    }    

    

    isItValid(e) {
      const el = e.target 
      if(!el.checkValidity()) {
        el.style.borderBottom = '2px solid red';
      } else {
        el.style.borderBottom = '2px solid green';
      }
    }
    
    
    stepTwo() {
      if(this.refs.loginEmail.checkValidity() && this.refs.loginPassword.checkValidity() && this.refs.zipcode.checkValidity()) {
       
        let obj = {
          email: this.refs.loginEmail.value,
          password: this.refs.loginPassword.value,
          zipcode: this.refs.zipcode.value
        }

        this.props.dispatch(userInfo(obj))
        this.props.history.push('/steptwo')

      } else {
      
        this.msg.show('Please double check your email, password and zipcode.', {
          time: 3000,
          type: 'error',
          offset: 14,
          position: 'top left',
          theme: 'dark',
          transition: 'scale'
        })
      }
    }

   

  render() {
    const responseFacebook = (response) => {
      this.props.dispatch(setFaceBookToken(response))
    }


   
    
    return (

      <Row>
        <Col s={12} m={12}>
          <Row> 
            <Col s={6} m={6}>
              <img src={meatplatter} alt='Exotic Meats' />
            </Col>

            <Col s={6} m={6} className='buy'>
              <h1></h1>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}


