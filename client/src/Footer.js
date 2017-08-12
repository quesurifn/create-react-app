import React, { Component } from 'react';
import './App.css';


import {connect} from 'react-redux'

import {Footer} from 'react-materialize'

export class Foot extends Component {
  render() {

    return (
      <div>
            <Footer copyrights="&copy; 2017 Blue Apron"
        
            links={
                <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Terms</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Google Play</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">App Store</a></li>
                </ul>
            }
            className='example'
        >
                
               <div className="row">
                    <div className="col s5">
                        <div className="email">
                            <h5 className="white-text">Get Notified</h5>
                                <div >
                                <input type="email" placeholder="email@email.com" /> 
                                <button>Go</button>
                            </div>
                        </div>
                    </div>
               </div>
        </Footer>
      </div>
    );
  }
}


