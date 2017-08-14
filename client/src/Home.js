import React, { Component } from 'react';
import './App.css';


import {connect} from 'react-redux'
import Background from './images/food.jpg'
import Logo from './images/logo.svg'

import {Button} from 'react-materialize'

export class Home extends Component {
  constructor() {
    super() 
    this.startCheckout= this.startCheckout.bind(this);
  }

  startCheckout() {
    this.props.history.push('/stepone')
  }

  render() {
    var sectionStyle = {
      width: "100%",
      height: "450px",
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    };
    return (
      <div className="App">
            <div className="hero" style={sectionStyle} >
                
              <h1>Food is better when you know where it comes from</h1>
              <Button waves='light' onClick={this.startCheckout}>Shop Plans</Button>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h3 className="subheader resfont">Dinner, the Blue Apron way</h3> 
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <img className="margin80" src="https://placehold.it/200x200" />

                     <img className="margin80" src="https://placehold.it/200x200" />
                  </div>


                  <div className="col-md-4">
                      <img className="center margin80 hideMobile" src="https://placehold.it/200x600" alt=""/>
                  </div>

                   <div className="col-md-4">
                    <img className="margin80" src="https://placehold.it/200x200" />
                     <img className="margin80" src="https://placehold.it/200x200" />
                  </div>


                </div>

                <p className="center margin40 width40">Blue Apron's uniquely integrated model means better ingredients, better pricing and a better planet for us all.</p>

                 <Button waves='light' className="margin40" onClick={this.startCheckout}>Get Cooking</Button>



                 <img className="responsive-img img-responsive margin80" src="https://placehold.it/1169x670" />


                 <h3 className="subtitle margin80 width60 center resfont">When you cook with Blue Apron, you're building a better food system</h3>
              </div>
              </div>
            </div>
    
    );
  }
}


