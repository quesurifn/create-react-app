import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

import { slide as Menu } from 'react-burger-menu'



export class SubHead extends Component {
    constructor() {
        super()
        this.state = {
            showNav: false
        }
    }
  render() {
  
    return (
        
        <div className="subhead">
            <Link to="/">Home</Link>
            <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a  className="menu-item--small" href="">Settings</a>
            </Menu>
         
        </div>

    );
  }
}