import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Footer} from 'react-materialize'

import axios from 'axios'

export class Foot extends Component {
    constructor() {
        super()
        this.sendEmail = this.sendEmail.bind(this);
        this.borderNone = this.borderNone.bind(this);
    }

    sendEmail() {
        if (this.refs.email.checkValidity()) {
        axios.post('/api/email', { email: this.refs.email.value})
            .then((response) => {
                console.log('saved successfully')
                this.refs.banner.display = "block";
            })
            .catch((err) => {
                console.log('Not Saved Successfully')
            })
        } else {
            this.refs.email.style = 'border: 2px solid #fc7b7b'
        }
 
    }

    borderNone() {
        this.refs.email.style.border = 'none';
    }


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
                                <input ref="email" type="email" placeholder="email@email.com" onInput={this.borderNone}/> 
                                <button onClick={this.sendEmail} >Go</button>
                            </div>
                        </div>
                    </div>
               </div>
        </Footer>
      </div>
    );
  }
}


