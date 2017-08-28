import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import './App.css';

import {connect} from 'react-redux'
import {setFaceBookToken, userInfo} from './actions/action'
import AlertContainer from 'react-alert'



import {Button} from 'react-materialize'
import box from './images/boxoffood.png'

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
      <div className="container">
         <h1 className="stepOneTitle">Create an Account</h1>
        <div className="row">
         
   
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
          
          <div className="col-md-6 margin200">
              <img src={box}/> 
          </div>
          <div className="col-md-6 margin200">

            <input ref="loginEmail" type="email" placeholder="email@yourdomain.com" onChange={(e) => this.isItValid(e)} required/>
            <input ref="loginPassword" type="password" placeholder="Uppercase, Lowercase. 8 or more characters" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" onChange={(e) => this.isItValid(e)} required/> 
            <input ref="zipcode" type="text" pattern="[0-9]{5}" placeholder="ex. 60010" onChange={(e) => this.isItValid(e)} required/>
            

            <Button waves='light' className="width100" onClick={this.stepTwo} >Continue</Button>
            <hr />
              

                  <FacebookProvider appId="269243040241559">
                    <Login
                      scope="email"
                      onResponse={responseFacebook}
                      onError={(e) => console.log(e) }
                    >
                      <span className="facebookButton"  >Login via Facebook</span>
                    </Login>
                  </FacebookProvider>
               
                </div>
      
          </div>
        </div>
    );
  }
}


