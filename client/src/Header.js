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

            <Navbar left fixed >
                <p>Try Food Crates New Antipasto Box Today and Save $20</p>
            </Navbar>

            <div className="banner" ref="banner">
                <p onClick={this.hideBanner} className="exit">X</p>
            </div> 
        </div>
      </div>
    );
  }
}