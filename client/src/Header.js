import React, { Component } from 'react';
import './App.css';
import {Navbar, NavItem} from 'react-materialize'


export class Header extends Component {
    constructor() {
        super()
        this.hideBanner = this.hideBanner.bind(this);
    }

    hideBanner() {
        this.refs.banner.display = "none"
    }
  render() {
  
    return (
      <div className='row'>
          <div className='col s12'>

            <Navbar brand='Blue Apron' left fixed >
                <NavItem>On The Menu</NavItem>
                <NavItem>Pricing</NavItem>
                <NavItem>Our Vision</NavItem>
                <NavItem>Wine</NavItem>
                <NavItem>Market</NavItem>
            </Navbar>

            <div className="banner" ref="banner">
                <p onClick={this.hideBanner} className="exit">X</p>
            </div> 
        </div>
      </div>
    );
  }
}