import React, { Component } from 'react';
import './App.css';
import {Navbar, NavItem} from 'react-materialize'


export class Header extends Component {
  render() {
  
    return (
      <div className='row'>
          <div className='col s12'>

            <Navbar brand='' left fixed >
                <NavItem>On The Menu</NavItem>
                <NavItem>Pricing</NavItem>
                <NavItem>Our Vision</NavItem>
                <NavItem>Wine</NavItem>
                <NavItem>Market</NavItem>
            </Navbar>
        </div>
      </div>
    );
  }
}