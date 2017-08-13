import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';

import {connect} from 'react-redux'
import {setFaceBookToken} from './actions/action'

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
      this.isItValid = this.isItValid.bind(this);
  }
    

    isItValid(el) {
      console.log(this)

    }

  render() {
    const responseFacebook = (response) => {
      console.log(response);
      this.props.dispatch(setFaceBookToken(response.accessToken))
    }


   
    
    return (
      <div className="container">
        <div className="row"> 
          
          <div className="margin80">
          
          
          <div className="col s6">
              <img src={box}/> 
          </div>
          <div className="col s6 stepOne">

            <input ref="loginEmail" type="email" placeholder="dasda" required/>
            <input ref="loginPassword" type="password" placeholder="Uppercase, Lowercase. 6 or more characters" required/> 
            <input ref="zipcode" type="text" pattern="[0-9]{5}" placeholder="ex. 60010" required/>
            

            <Button waves='light' onClick={this.isItValid(this)}>Continue</Button>
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


