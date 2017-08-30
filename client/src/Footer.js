import React, { Component } from 'react';
import './App.css';
import acclaimed from './images/acclaimed.png'

import {connect} from 'react-redux'
import {addToCart} from './actions/action'
import { withRouter } from 'react-router';

import AlertContainer from 'react-alert'


@withRouter
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
  componentDidMount() {
    console.log(this.props)
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
  
  }
  


  render() {

    return (
        <footer>
            <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
            <h2 className='center footerHeader'>Seasonal Food Crates</h2>
            <div className='moreCrates margin80'>
                 <div className="col-md-3 col-sm-12 LRMargin">
                    <div className="selectionButton right width100" onClick={this.addToCartComp.bind(this, {"name":"Kosher Box", "price": 149, q: 1})}>
                      <div className='row'>
                        <div className='col-9 flexLeft'>
                          <h5>Kosher Box</h5>
                          <p>Certified Locally</p>
                        </div>
                        <div className='col-3 vert flexPrice'>
                          <p className='gothicP'>$149</p>

                        </div>

                      </div>
                    </div>

                  </div>
                   <div className="col-md-3 col-sm-12 LRMargin">
                    <div className="selectionButton right width100" onClick={this.addToCartComp.bind(this, {"name":"Organic Baby Food", "price": 79, q: 1})}>
                      <div className='row'>
                        <div className='col-9 flexLeft'>
                          <h5>Organic Baby Food</h5>
                          <p>All ages</p>
                        </div>
                        <div className='col-3 vert flexPrice'>
                          <p className='gothicP'>$79</p>

                        </div>

                      </div>
                    </div>

                  </div>
                   <div className="col-md-3 col-sm-12 LRMargin">
                    <div className="selectionButton right width100" onClick={this.addToCartComp.bind(this, {"name":"Thanksgiving Crate", "price": 39, q: 1})}>
                      <div className='row'>
                        <div className='col-9 flexLeft'>
                          <h5>Thanksgiving Crate</h5>
                          <p>Feeds family of 5 </p>
                        </div>
                        <div className='col-3 vert flexPrice'>
                          <p className='gothicP'>$179</p>

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

                    </ul>
                    </div>
       
                 <div className="col-md-3">
                    <p>Work With Food Crates</p>
                    <ul>
                        <li><p>Join The Food Crates Marketplace</p></li>
                        <li><p>Run a Groupon Deal</p></li>
                        <li><p>Learn About Groupon Merchant</p></li>
                        <li><p>Affiliate Program</p></li> 
                      
                    </ul>
                </div>
                <div className="col-md-3">
                    <p>More</p>
                    <ul>
                        <li><p>Customer Support</p></li>
                        <li><p>Refund Policies</p></li>
                        <li><p>FAQ</p></li>
                        <li><p>Coupons</p></li> 
            
                    </ul>
                </div>
                <div className="col-md-3">
                    <p>Follow Us</p>
                    <div className="flexCont">
                        <div className="grayBox"><i className="fa fa-facebook dark" aria-hidden="true"></i></div>
                        <div className="grayBox"><i className="fa fa-twitter dark" aria-hidden="true"></i></div>
                    </div>
                       
            

                </div>
                
            </div>
        </div>
        </footer>

    );
  }
}


