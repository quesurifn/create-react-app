import React, { Component } from 'react';
import './App.css';
import acclaimed from './images/acclaimed.png'

import {connect} from 'react-redux'
import {addToCart} from './actions/action'


import AlertContainer from 'react-alert'



@connect((store) => {
  return {
    cart: store.reducer.cart
  }
})
export class Foot extends Component {
  constructor() {
    super() 


    this.addToCartComp = this.addToCartComp.bind(this)
  }


  addToCartComp(obj) {
    this.props.dispatch(addToCart(obj))
    this.msg.show(`Added ${obj.name} To Cart!`, {
          time: 3000,
          type: 'success',
          offset: 14,
          position: 'top left',
          theme: 'dark',
          transition: 'scale'
    })
    this.props.history.push('/checkout')
  }
  


  render() {

    return (
        <footer>
            <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
            <h2 className='center footerHeader'>More Food Crates</h2>
            <div className='moreCrates margin80'>
                 <div className="col-md-3 col-sm-12 LRMargin">
                    <div className="selectionButton right width100" onClick={this.addToCartComp.bind(this, {"name":"Olive Sampler", "price": 39, q: 1})}>
                      <div className='row'>
                        <div className='col-9 flexLeft'>
                          <h5>2 Person Food Crate</h5>
                          <p>Olive Sampler</p>
                        </div>
                        <div className='col-3 vert flexPrice'>
                          <p className='gothicP'>$39</p>

                        </div>

                      </div>
                    </div>

                  </div>
                   <div className="col-md-3 col-sm-12 LRMargin">
                    <div className="selectionButton right width100" onClick={this.addToCartComp.bind(this, {"name":"Italian Cheese Collection", "price": 79, q: 1})}>
                      <div className='row'>
                        <div className='col-9 flexLeft'>
                          <h5>6 Person Food Crate</h5>
                          <p>Italian Cheese Collection</p>
                        </div>
                        <div className='col-3 vert flexPrice'>
                          <p className='gothicP'>$79</p>

                        </div>

                      </div>
                    </div>

                  </div>
                   <div className="col-md-3 col-sm-12 LRMargin">
                    <div className="selectionButton right width100" onClick={this.addToCartComp.bind(this, {"name":"Pepper Mixer", "price": 39, q: 1})}>
                      <div className='row'>
                        <div className='col-9 flexLeft'>
                          <h5>2 Person Food Crate</h5>
                          <p>Pepper Mixer</p>
                        </div>
                        <div className='col-3 vert flexPrice'>
                          <p className='gothicP'>$39</p>

                        </div>

                      </div>
                    </div>

                  </div>

              
            </div>

            <div className='acclaim'>
                  <p className='center margin80 authentic'>&#8220;Food crates actual food is outstanding! It doesn't get any more authentic than this.&#8221;</p>
                


                  <img src={acclaimed} alt="acclaimed" className='responsive-img acclaimed' />
            </div>
        
            <div className="container"> 
            <div className="row">
                <div className="col-md-3">
                    <p>Company</p>
                    <ul>
                        <li><p>About Food Crates</p></li>
                        <li><p>Jobs</p></li>
                        <li><p>Blog</p></li>
                        <li><p>Press</p></li> 
                        <li><p>Investor Relations</p></li>
                        <li><p>Management Team</p></li>
                        <li><p>In Your Community</p></li>
                    </ul>
                    </div>
       
                 <div className="col-md-3">
                    <p>Work With Food Crates</p>
                    <ul>
                        <li><p>Join The Food Crates Marketplace</p></li>
                        <li><p>Run a Groupon Deal</p></li>
                        <li><p>Learn About Groupon Merchant</p></li>
                        <li><p>Affiliate Program</p></li> 
                        <li><p>Vendor Code of Conduct</p></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p>More</p>
                    <ul>
                        <li><p>Customer Support</p></li>
                        <li><p>Refund Policies</p></li>
                        <li><p>FAQ</p></li>
                        <li><p>Coupons</p></li> 
                        <li><p>Gift Cards</p></li>
                        <li><p>Gift Shop</p></li>
                        <li><p>Students</p></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p>Follow Us</p>
                    <div className="flexCont">
                        <div className="grayBox"><i className="fa fa-facebook dark" aria-hidden="true"></i></div>
                        <div className="grayBox"><i className="fa fa-twitter dark" aria-hidden="true"></i></div>
                    </div>
                       
            

                </div>
                <p>Incredible Deals on Local Experiences</p>
                <small>Discover fun activities and huge discounts in your city with Groupon. Check out great deals on things to do from kids activities to nightlife; try out new restaurants, spas, massages and hair salons near you, or plan a trip away from home.</small>
                <div className="flexCont2">
                    <p>2017 &copy; Food Crates Inc. All Rights Reserved.</p>
                    <a>Terms Of Use</a>
                    <a>Privacy Statement</a>
                    <a>Licenses</a> 
                    <a>Responsible Disclosure</a>
                </div>
            </div>
        </div>
        </footer>

    );
  }
}


