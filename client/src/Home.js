import React, { Component } from 'react';
import './App.css';
import './css/gallery.css'


import {connect} from 'react-redux'
import Background from './images/food.jpg'
import Slider from './Slider'
import food from './images/food.png'
import {Button} from 'react-materialize'
import order from './images/ordernow.png'
import woman from './images/woman.png'
import box from './images/box.png'
import crate from './images/foodcrates.png'
import salami from './images/salami.png'
import parma from './images/parma.png'
import reggiano from './images/reggiano.png'
import padano from './images/padano.png'
import sanmarzano from './images/sanmarzano.png'
import meat from './images/meatbg.png'
import left from './images/tileone.png'
import right from './images/tile2.png'
import meatbg from './images/meatbg.png'


import heroLogo from './images/antipasto-box-logo.png'
import hero2Logo from './images/slider2-text1.png'
import slide2text from './images/slider2-text2.png'
import slide2text3 from './images/slide2-text3.png'

import {Row, Col} from 'react-materialize'




export class Home extends Component {
  constructor() {
    super() 
    this.startCheckout= this.startCheckout.bind(this);
  }
   componentDidMount() {
       console.log('fired')
       window.scrollTop = 0;
    }    

  startCheckout() {
    this.props.history.push('/stepone')
  }

  render() {
   
    return (
      <div className="App">
        
            <div className="gallery items-2">
                <div id="antipasto" className="control-operator"></div>
                <div id="real" className="control-operator"></div>
             

                <figure className="item slideOne">
                  <img src={heroLogo} alt='Hero Logo' />
           
                </figure>

                <figure className="item slideTwo">
                  <img src={hero2Logo} alt='Hero 2 logo' />
                  <img src={slide2text} alt='Hero 2 text 2' />
                  <img src={slide2text3} alt='Hero 2 text 3' />
                </figure>

              

                <div className="controls">
                  <a href="#antipasto" className="control-button">•</a>
                  <a href="#real" className="control-button">•</a>
                </div>
              </div>
       
      
        


      
       
  
        <div className="row">
              <div className="col-12 bgToap paddingBottom80">
        
                <h3 className="subheader resfont serif">Save $20 on your first box</h3> 

                <img className="margin40 img-responsive responsive-img" src={food} alt="fine italian food" />
                  <div className="row margin40">
                  <div className="col-6 padright5">
                    <div className="selectionButton right">
                      <div className='row'>
                        <div className='col-9 flexLeft'>
                          <h5>2 Person Food Crate</h5>
                          <p>Exotic Meats Reserve</p>
                        </div>
                        <div className='col-3 col-3 vert flexPrice'>
                          <p className='gothicP'>$36</p>
        
                        </div>

                      </div>
                    </div>

                  </div>

                  <div className="col-6 padleft5">
                    <div className="selectionButton left">
                      <div className='row'>
                        <div className='col-9 flexLeft'>
                          <h5>6 Person Food Crate</h5>
                          <p>Exotic Meats Reserve</p>
                        </div>
                        <div className='col-3 vert flexPrice'>
                          <p className='gothicP'>$79</p>

                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-md-12">
                    <p className="center margin40 font18" >Order Before Friday and get it by the weekend</p>
                  </div>
                  <div className="col-md-12">
                    <div className="greenButton center margin40"><img src={order} alt="order" className="ordernow" onClick={this.startCheckout}/></div>
                  </div>
                  <div className="col-md-6 relative margin115">
                    <img className='woman rightPercent' src={woman} alt="Fresh Delivery Woman" />
                  </div>
                  <div className="col-md-6 relative margin115">
                    <img className='box leftPercent' src={box} alt="delivery box" />
                  </div>
                </div> {/* row */}


              </div>
              <div className='col-md-12 bgWhite margin200'>
                <div className='row bottom80'>
                  <div className='col-md-6 paddingLeft offered flexCenter'>

                    <p>Order hyper authentic fine foods from all over the world.</p>
                    <div className="greenButton"><img src={order} alt="order" className="ordernow"onClick={this.startCheckout} /></div>
                    <div className='row margin40'>
                      <div className='col-md-3 meatCont'>
                        <img className="meat" src={salami} alt="salami" />
                      </div>
                      <div className='col-md-3 meatCont'>
                        <img className="meat" src={parma} alt='parma' />
                      </div>  
                      <div className='col-md-3 meatCont'>
                        <img className="meat"  src={reggiano} alt='reggiano' />
                      </div>
                      <div className='col-md-3 meatCont'>
                        <img className="meat" src={padano} alt='padano' />
                      </div>
                      <div className='col-md-3 meatCont'>
                        <img className="meat" src={sanmarzano} alt='sanmarzano' />
                      </div>

                    </div>



                  </div>
                  <div className='col-md-6 paddingRight offered flexCenter'>

                    <img src={crate} className='crate' alt='food crate' />
                  </div>
             
          

          </div>
           

                <div className="row">
                  <div className='col-12'>
                    <img className="onehundred" src={meatbg} alt='meatbg' />
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-12 bgToap plans'>
                    <h2 className="center margin80 width40">Exotic Offerings From Premium Brands</h2>
                    <div className='row margin80'>
                      <div className='col-md-6 bottom40mobile'>

                        <img src={left} className='responsive-img width70 right' alt ='left' /> 


                      </div>
                      <div className='col-md-6'>

                        <img src={right}  className='responsive-img width70' alt ='left' /> 

                        
                      </div>
                    </div>
                  </div>
            

                </div>
                

               
                </div>
                  </div>
              </div>
     
    
    );
  }
}


