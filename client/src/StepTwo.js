import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'

import {Button, Row, Col, Container} from 'react-materialize'
import {planInfo} from './actions/action'

@connect((store) => {
  return {
    planinfo: store.reducer.planinfo
  }
})
export class StepTwo extends Component {
  constructor() {
    super() 
     this.stepThree = this.stepThree.bind(this)
  }
  stepThree(plan) {
    console.log(plan)
    this.props.dispatch(planInfo(plan))
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
                    <h1>Couple's Plan</h1>
                    <h2>Serves 2 People</h2>
                    <div className='planPortionContainer'>
                      <div className='servings'>
                        <span>5</span>
                      </div>
                      <span className='recipes'>Recipes Per Week</span>
                      </div>
                      <div className='mathbox'>
                        <div className='left'>
                          <h3>$8.87</h3>
                          <span>Per Serving</span>
                          <div></div>
                        </div>
                        <div className='right'>
                          <h3>$44.35</h3>
                          <span>Per Week</span>
                        </div>
                      </div>
                      
                    <button className='selectPlan'  onClick={this.stepThree.bind(this,  {"plan":"Couples Plan", "price": 44.35})} >Select This Plan</button>
                   </div>
                  <div className='planCard'>
                    <div className='bgCardTwo'></div>
                    <h1>Family Plan</h1>
                    <h2>Serves 4 - 6 people</h2>
                    <div className='planPortionContainer'>
                      <div className='servings'>
                        <span>5</span>
                        
                      </div>
                      <span className='recipes'>Recipes Per Week</span>
                    </div>
                    <div className='mathbox'>
                      <div className='left'>
                         <h3>$9.77</h3>
                          <span>Per Serving</span>
                           <div></div>
                      </div>
                      <div className='right'>
                        <h3>$48.85</h3>
                          <span>Per Week</span>
                      </div>
                    </div>
                    <button className='selectPlan' onClick={this.stepThree.bind(this, {"plan":"Family Plan", "price": 48.85})} >Select This Plan</button>
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


