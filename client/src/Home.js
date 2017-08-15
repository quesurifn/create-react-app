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
                  <div className="row margin40">

                    <div className="col-md-3 borderRight">
                      <p className="width50 center" >Creating Better Standards</p>
                    </div>
                    <div className="col-md-3 borderRight">
                      <p className="width50 center" >Regenerating Our Land</p>
                    </div>
                    <div className="col-md-3 borderRight">
                      <p className="width50 center" >Eliminating The Middleman</p> 
                    </div>
                    <div className="col-md-3 borderRight">
                      <p className="width50 center"> Reducing Food Waste</p> 
                    </div>
                      <Button waves='light' className="center margin80" onClick={this.stepTwo} >Continue</Button>
                  </div>
                  <div className="row">

                    <div className="margin100 center border full hide1200b">

                      <div className="lines">
                        <div className="line hide1200"></div>
                        <h2 className="font30">On The Menu This Season</h2>
                        <div className="line hide1200"></div>
                      </div>
                      <h3 className="font15 bottom70">Chicken Ramen with Greens, Soft-Boiled Eggs &amp; Miso Broth</h3>


                      <img className="responsive-img img-responsive bottom45" src="https://placehold.it/1000x670" />


                     
                    </div>
                      <div className="center">
                        <h2 className="center font30 margin80">Our Community of Home Chefs</h2>
                        <h3 className="center font15 margin5">Our Community of Home Chefs</h3>


                        <img className="margin40 width50" src="https://image-service.blueapron.com/render/q/quality/75/src/https%3A%2F%2Fmedia.blueapron.com%2Fhome_page%2FSocialCarousel%2FBASocialImage3.jpg" alt="no" />


                        <h2 className="font30 center margin80">We can't wait to cook with you!</h2>
                        <h3 className="font15 center">Have more questions?<a> Check out our FAQs.</a></h3>

                        <Button waves='light' className="center margin20" onClick={this.stepTwo} >Get Cooking</Button>
                     </div>
                  </div>
              </div>
              </div>
            </div>
    
    );
  }
}


