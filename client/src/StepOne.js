import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';

import {connect} from 'react-redux'
import {setFaceBookToken} from './actions/action'

@connect((store) => {
  console.log('store',store)
  return {
    fbkey: store.reducer.fbkey,
    twittername: store.reducer.twittername
  }
})
export class StepOne extends Component {
  render() {
  

    const responseFacebook = (response) => {
      console.log(response);
      this.props.dispatch(setFaceBookToken(response.accessToken))
    }
    
    return (
      <div>
        
        <input ref="loginEmail" type="email" />
        <input ref="loginPassword" type="passowrd" /> 

        <hr />

        
      <FacebookLogin
        appId="269243040241559"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook} />
      </div>
    );
  }
}


