import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'

import {Button, Row, Col, Container} from 'react-materialize'
import {planInfo, addToCart} from './actions/action'

@connect((store) => {
  return {
    planinfo: store.reducer.planinfo,
    cart: store.reducer.cart
  }
})
export class StepTwo extends Component {
  constructor() {
    super() 
     this.stepThree = this.stepThree.bind(this)
  }
  stepThree(plan) {
    console.log(plan)
    this.props.dispatch(addToCart(plan))
    this.props.history.push('/checkout')
  }
   componentDidMount() {
      var element = document.querySelector("html"); 
      console.log(element)
      element.style.overflowX = 'scroll'
      window.scroll(0,0)
      element.style.overflowX = 'hidden'

  

    }    
 



  render() {
    return (
      <div className="App">
        <div className='stepTwo'>
          <Container className='stepTwo'>
            
            <Row>
              
              <Col s={12} m={12}>
              <h1 className='stepTwoTitle'>Select A Plan</h1>
                <div className='planCardContainer'> 
                  <div className='planCard'>
                    <div className='bgCardOne'></div>
                    <h1>Antipasto Crate</h1>
                    <h2>Serves 2 People</h2>
                      <div className='mathbox'>
                        <div className='left'>
                          <h3>$8.87</h3>
                          <span>Per Serving</span>
                          <div></div>
                        </div>
                        <div className='right'>
                          <h3>$44.35</h3>
                          <span>Per Crate</span>
                        </div>
                      </div>
                      
                    <button className='selectPlan'  onClick={this.stepThree.bind(this,  {"name":"Antipasto Crate", "price": 44.35, q: 1})} >Choose This Crate</button>
                   </div>
                  <div className='planCard'>
                    <div className='bgCardTwo'></div>
                    <h1>Antipasto Catering</h1>
                    <h2>Serves 12 - 120 people</h2>
                   
                    <div className='mathbox'>
                      <div className='left'>
                         <h3>$9.77</h3>
                          <span>Per Serving</span>
                           <div></div>
                      </div>
                      <div className='right'>
                        <h3>$189.85</h3>
                          <span>Per Crate</span>
                      </div>
                    </div>
                    <button className='selectPlan' onClick={this.stepThree.bind(this, {"name":"Antipasto Catering", "price": 189.85})} >Choose This Crate</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

        </div>
      </div>
    );
  }
}


