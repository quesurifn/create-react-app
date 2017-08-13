import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';

import {connect} from 'react-redux'
import {setFaceBookToken} from './actions/action'
import AlertContainer from 'react-alert'


import {Button} from 'react-materialize'
import box from './images/boxoffood.png'

@connect((store) => {
  console.log('store',store)
  return {
    fbkey: store.reducer.fbkey,
    twittername: store.reducer.twittername
  }
})
export class StepOne extends Component {
  
  constructor() {
    super() 
      const alertOptions = {
    offset: 14,
    position: 'top left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }
      this.isItValid = this.isItValid.bind(this);
      this.stepTwo = this.stepTwo.bind(this)
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
      console.log(response);
      this.props.dispatch(setFaceBookToken(response))
    }

   
    
    return (
      <div className="container">
        <div className="row"> 
          <div className="margin80 stepOne">
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
          
          <div className="col s6">
              <img src={box}/> 
          </div>
          <div className="col s6 stepOne">

            <input ref="loginEmail" type="email" placeholder="email@yourdomain.com" onChange={(e) => this.isItValid(e)} required/>
            <input ref="loginPassword" type="password" placeholder="Uppercase, Lowercase. 8 or more characters" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" onChange={(e) => this.isItValid(e)} required/> 
            <input ref="zipcode" type="text" pattern="[0-9]{5}" placeholder="ex. 60010" onChange={(e) => this.isItValid(e)} required/>
            

            <Button waves='light' onClick={this.stepTwo} >Continue</Button>
            <hr />

            
            <FacebookLogin
              appId="269243040241559"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook} />
            </div>
            </div>
          </div>
        </div>
    );
  }
}


