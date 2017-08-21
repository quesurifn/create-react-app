import React, { Component } from 'react';
import './App.css';
import {Navbar} from 'react-materialize'


export class Header extends Component {
    constructor() {
        super()
        this.hideBanner = this.hideBanner.bind(this);
    }
    componentDidMount() {
         document.querySelector('nav').setAttribute('class', 'white')
    }

    hideBanner() {
        this.refs.banner.display = "none"
    }
  render() {
    let header = null; 
    if (document.location.pathname === '/stepone') {
        header =  <div className="flex"><div className="badge"><i className="fa fa-check" aria-hidden="true"></i></div><span>Welcome</span> <div className="line"></div><div className="badgeNoFill"> 2 </div><span>Plans &amp; Preferences</span><div className="line"></div><div className="badgeNoFill"> 2 </div><span>Checkout</span></div>
    } else if (document.location.pathname === '/steptwo') {
        header = <div className="flex"><div className="badge"><i className="fa fa-check" aria-hidden="true"></i></div><span>Welcome</span> <div className="line"></div><div className="badge"><i className="fa fa-check" aria-hidden="true"></i></div><span>Plans &amp; Preferences</span><div className="line"></div><div className="badgeNoFill">3</div><span>Checkout</span></div>
       
        
    } else if (document.location.pathname === '/stepthree') {
        header = <div className="flex"><div className="badge"><i className="fa fa-check" aria-hidden="true"></i></div><span>Welcome</span> <div className="line"></div><div className="badgeNoFill"> 2 </div><span>Plans &amp; Preferences</span><div className="line"></div><div className="badgeNoFill"><i className="fa fa-check" aria-hidden="true"></i></div><span>Checkout</span></div>
    } else {
        header =  <p>Try Food Crates New Antipasto Box Today and Save $20</p>
    }
    return (
      <div className='row'>
          <div className='col s12'>

            <Navbar ref='nav' left fixed >
                {header}
            </Navbar>

            <div className="banner" ref="banner">
                <p onClick={this.hideBanner} className="exit">X</p>
            </div> 
        </div>
      </div>
    );
  }
}