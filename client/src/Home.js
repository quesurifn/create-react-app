import React, { Component } from 'react';
import './App.css';


import {connect} from 'react-redux'
import Background from './images/food.jpg'
import Slider from './Slider'
import food from './images/food.png'
import {Button} from 'react-materialize'
import order from './images/ordernow.png'
import woman from './images/woman.png'
import box from './images/box.png'

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

         <Slider
          loop={ true }
          showNav={ false }
          selected={ 0 }>



          <div style={{ background: '#21BB9A' }}>
             <div className="hero" style={sectionStyle} >
                
              <h1>Food is better when you know where it comes from</h1>
              <Button waves='light' onClick={this.startCheckout}>Shop Plans</Button>
            </div>
            

        </div>
      
          <div style={{ background: '#329ADD' }}>B</div>
          <div style={{ background: '#9A5CB9' }}>C</div>
          <div style={{ background: '#E64C3C' }}>D</div>
          <div style={{ background: '#2D3F52' }}>E</div>
        </Slider>
        <div className="row">
              <div className="col-md-12 bgToap">
        
                <h3 className="subheader resfont serif">Save $20 on your first box</h3> 

                <img className="margin40 img-responsive responsive-img" src={food} alt="fine italian food" />
                  <div className="row margin40">
                  <div className="col-md-6">
                    <div className="selectionButton right">
                      <div className='row'>
                        <div className='col-md-9 flexLeft'>
                          <h5>2 Person Food Crate</h5>
                          <p>Exotic Meats Reserve</p>
                        </div>
                        <div className='col-md-3 vert flexPrice'>
                          <p className='gothicP'>$36</p>

                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-md-6">
                    <div className="selectionButton left">
                      <div className='row'>
                        <div className='col-md-9 flexLeft'>
                          <h5>6 Person Food Crate</h5>
                          <p>Exotic Meats Reserve</p>
                        </div>
                        <div className='col-md-3 vert flexPrice'>
                          <p className='gothicP'>$79</p>

                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-md-12">
                    <p className="center margin40 font18" >Order Before Friday and get it by the weekend</p>
                  </div>
                  <div className="col-md-12">
                    <div className="greenButton center margin40"><img src={order} alt="order" className="ordernow" /></div>
                  </div>
                  <div className="col-md-6 relative margin115">
                    <img className='woman rightPercent' src={woman} alt="Fresh Delivery Woman" />
                  </div>
                  <div className="col-md-6 relative margin115">
                    <img className='box leftPercent' src={box} alt="delivery box" />
                  </div>
                </div> {/* row */}


              </div>
          

          </div>
           
              <div className="container">
                <div className="row">


                  <div className="col-md-4">
                    <img className="margin80" src="https://placehold.it/200x200" alt="placeholder" />

                     <img className="margin80" src="https://placehold.it/200x200" alt="placeholder" />
                  </div>


                  <div className="col-md-4">
                      <img className="center margin80 hideMobile" src="https://placehold.it/200x600"alt="placeholder"lt=""/>
                  </div>

                  <div className="col-md-4">
                    <img className="margin80" src="https://placehold.it/200x200" alt="placeholder" />
                    <img className="margin80" src="https://placehold.it/200x200" alt="placeholder" />
                  </div>


                </div>

                <p className="center margin40 width40">Blue Apron's uniquely integrated model means better ingredients, better pricing and a better planet for us all.</p>

                 <Button waves='light' className="margin40" onClick={this.startCheckout}>Get Cooking</Button>



                 <img className="responsive-img img-responsive margin80" src="https://placehold.it/1169x670" alt="placeholder"/>


                 <h3 className="subtitle margin80 width60 center resfont">When you cook with Blue Apron, you're building a better food system</h3>
                  <div className="row margin40">

                    <div className="col-md-3 borderRight mNoB order">
                      <p className="width50 center" >Creating Better Standards</p>
                    </div>
                    <div className="col-md-3 borderRight mBorderTop">
                      <p className="width50 center" >Regenerating Our Land</p>
                    </div>
                    <div className="col-md-3 borderRight mBorderTop">
                      <p className="width50 center" >Eliminating The Middleman</p> 
                    </div>
                    <div className="col-md-3 borderRight mBorderTop">
                      <p className="width50 center"> Reducing Food Waste</p> 
                    </div>
                      <Button waves='light' className="center margin80" onClick={this.stepTwo} >Continue</Button>
                  </div>
                  <div className="row">

                    <div className="margin100 center border full hide1200b">


                        <h2 className="font30">On The Menu This Season</h2>
          

                      <h3 className="font15 ">Chicken Ramen with Greens, Soft-Boiled Eggs &amp; Miso Broth</h3>


                      <img className="responsive-img img-responsive margin40" src="https://placehold.it/1000x670" alt="placeholder"/>


                     
                    </div>
                      <div className="center">
                        <h2 className="center font30 margin80">Our Community of Home Chefs</h2>
                        <h3 className="center font15 margin10">Our Community of Home Chefs</h3>


                        <img className="margin40 width50" src="https://image-service.blueapron.com/render/q/quality/75/src/https%3A%2F%2Fmedia.blueapron.com%2Fhome_page%2FSocialCarousel%2FBASocialImage3.jpg" alt="no" />


                        <h2 className="font30 center margin80">We can't wait to cook with you!</h2>
                        <h3 className="font15 center margin10">Have more questions?<a> Check out our FAQs.</a></h3>

                        <Button waves='light' className="center margin20" onClick={this.stepTwo} >Get Cooking</Button>
                     </div>
                  </div>
              </div>
              </div>

    
    );
  }
}


