import React, { Component } from 'react';
import './App.css';


import {connect} from 'react-redux'

@connect((store) => {
  return {
    userinfo: store.reducer.userinfo,
    orderinfo: store.reducer.checkoutinfo
  }
})
export class Thankyou extends Component {
  constructor() {
    super() 
   
  }



  render() {
    let rando1 = Math.random() * 10
    let rando2 = Math.random() * 10
    let ordernumber = window.btoa(this.props.userinfo.email + Math.random() * 10).slice(rando1, rando2)

    return (
        <div className="App">
            <div className='thankyou'>
                <h1>Thank you {this.props.orderinfo.first}!</h1>
                
                <h2>Your order number is {ordernumber}</h2>

                <h3> You will receive a confirmation email shortly...</h3>
            
            </div>
        </div>
     
    
    );
  }
}


