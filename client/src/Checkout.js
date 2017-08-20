import React, { Component } from 'react';
import './App.css';
import './card.css'


import {connect} from 'react-redux';

import {Button, Col, Row} from 'react-materialize';
import CardReactFormContainer from 'card-react';
import {checkoutInfo} from './actions/action'

@connect((store) => {
  return {
    checkoutinfo: store.reducer.checkoutinfo
  }
})
export class Checkout extends Component {
  constructor() {
    super() 

	this.checkout= this.checkout.bind(this);
	this.state = {
		billing: false
	}
  }

  checkout() {
	if (this.refs.email.checkValidity() && this.refs.phone.checkValidity() && this.refs.first.checkValidity() && this.refs.last.checkValidity() &&
	this.refs.address.checkValidity() && this.refs.city.checkValidity() && this.refs.state.checkValidity() && this.refs.zip.checkValidity() && 
	this.refs.CCname.checkValidity() && this.refs.CCnumber.checkValidity() && this.refs.CCmmdd.checkValidity() && this.refs.CCcvc.checkValidity()) {
		
		let orderObj = {
			email: this.refs.email.value,
			phone: this.refs.phone.value, 
			fist: this.refs.first.value, 
			last: this.refs.last.value, 
			address: this.refs.address.value, 
			city: this.refs.city.value, 
			zip: this.refs.zip.value, 
			ccname: this.refs.CCname.value,
			cccvc: this.refs.CCcvc.value,
			ccmmdd: this.refs.CCmmdd.value,
			cccvc: this.refs.CCcvc.value
		}

		this.props.dispatch(checkoutInfo(orderObj))
		this.props.history.push('/thankyou')

	} else {
		
		if (!this.refs.email.checkValidity()) {
			this.refs.email.style.outline = '1px solid #ff2a4a4'
			if ( window.innerWidth < 500) {
				location.hash = 'email'

			}
		} else if (!this.refs.phone.checkValidity()) {
			this.refs.phone.style.outline = '1px solid #ff2a4a4'
			if ( window.innerWidth < 500) {
				location.hash = 'phone'
			}
		} else if (!this.refs.first.checkValidity()) {
			this.refs.first.style.outline = '1px solid #ff2a4a4'
			if ( window.innerWidth < 500) {
				location.hash = 'first'
			}
		} else if (!this.refs.last.checkValidity()) {
			this.refs.last.style.outline = '1px solid #ff2a4a4'
			if ( window.innerWidth < 500) {
				location.hash = 'last'
			}
		} else if (!this.refs.address.checkValidity()) {
			this.refs.address.style.outline = '1px solid #ff2a4a4'
			if ( window.innerWidth < 500) {
				location.hash = 'address'
			}
		} else if (!this.refs.city.checkValidity()) {
			this.refs.city.style.outline = '1px solid #ff2a4a4'
			if ( window.innerWidth < 500) {
				location.hash = 'city'
			}
		} else if (!this.refs.state.checkValidity()) {
			this.refs.state.style.outline = '1px solid #ff2a4a4'
			if ( window.innerWidth < 500) {
				location.hash = 'state'
			}
		} else if (!this.refs.zip.checkValidity()) {
			this.refs.zip.style.outline =  '1px solid #ff2a414'
			if ( window.innerWidth < 500) {
				location.hash = 'zip'
			}
		} else if (!this.refs.CCname.checkValidity()) {
			this.refs.CCname.style.outline = '1px solid #ff2a4a4'
			if ( window.innerWidth < 500) {
				location.hash = 'ccname'
			}
		} else if (!this.refs.CCnumber.checkValidity()) {
			this.refs.CCnumber.style.outline = '1px solid #ff2a4a4'
			if ( window.innerWidth < 500) {
				location.hash = 'ccnumber'
			}
		} else if (!this.refs.CCmmdd.checkValidity()) {
			this.refs.CCmmdd.style.outline = '1px solid #ff2a4a4'
			if ( window.innerWidth < 500) {
				location.hash = 'ccmmdd'
			}
		} else if (!this.refs.CCcvc.checkValidity()) {
			this.refs.CCcvc.style.outline = '1px solid #ff2a4a4'
			if ( window.innerWidth < 500) {
				location.hash = 'cccvc'
			}
		} else {
			console.log('some sort of error happened')
		}
	}
  }




  render() {
	  let standard = '$8.98'
	  let expedited = '$12.98'

    return (
        <div className="App"> 
			
			<div className="toapColor">
				<h1 className='checkoutTitle'>Checkout</h1>
				<Row >
					
					<Col s={12} m={3}>

						<div className='checkoutCard one'>
							<div className='inlineTitle'>
								<div className='checkoutBadge'>
									<span>1</span>
								</div>
								<span className='span2'>CUSTOMER INFO</span>
							</div>
							<form>
								<div className="form-container"> 
									<input ref='email' className="form-text" type="email" id='email' placeholder="Enter email" required />
								</div>
								<div className="form-container"> 
									<input ref="phone" className="form-text" type="tel" id='phone' pattern="\d{3}[\-]\d{3}[\-]\d{4}" placeholder="847-222-5555" required />
								</div>
								<hr />

								<h3 className='shippingTitle'>Shipping Address</h3>
								<div className='form-inline'>
									<div className="form-container"> 
										<input ref='first' id='first' className="form-text" type="text" placeholder="First Name" pattern="[a-zA-Z]" required />
									</div>
									<div className="form-container"> 
										<input ref='last' id='last' className="form-text" type="text" placeholder="Last Name" pattern="[a-zA-Z]" required />
									</div>
								</div>
								<div className="form-container"> 
									<input ref='address' id='address' className="form-text" type="text" placeholder="Address" required />
								</div>
								<div className="form-container"> 
									<input ref='address2' className="form-text" type="text" placeholder="Address 2" />
								</div>
								<div className='form-inline'>
									<div className="form-container"> 
										<input ref='city' id='city' className="form-text" type="text" placeholder="City"  pattern="[a-zA-z]{2,}"  required />
									</div>
									<select name="state" ref='state' id='state' required>
										<option value="">Select State</option>
										<option value="AL">Alabama</option>
										<option value="AK">Alaska</option>
										<option value="AZ">Arizona</option>
										<option value="AR">Arkansas</option>
										<option value="CA">California</option>
										<option value="CO">Colorado</option>
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="DC">District of Columbia</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="HI">Hawaii</option>
										<option value="ID">Idaho</option>
										<option value="IL">Illinois</option>
										<option value="IN">Indiana</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="ME">Maine</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NV">Nevada</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NM">New Mexico</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="ND">North Dakota</option>
										<option value="OH">Ohio</option>
										<option value="OK">Oklahoma</option>
										<option value="OR">Oregon</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="SD">South Dakota</option>
										<option value="TN">Tennessee</option>
										<option value="TX">Texas</option>
										<option value="UT">Utah</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WA">Washington</option>
										<option value="WV">West Virginia</option>
										<option value="WI">Wisconsin</option>
										<option value="WY">Wyoming</option>
									</select>
								</div>
								<div className="form-container"> 
									<input ref='zip' id='zip' className="form-text" type="text" placeholder="Zip Code" pattern='[0-9]{5}' required />
								</div>
								<div className='billingCheckbox'>
									<label>
										<input type='checkbox' />
										Is your billing address different?
									</label>
									
								</div>
							</form>

						</div>
					</Col>


					<Col s={12} m={3}>
						<div className='checkoutCard two'>
							<div className='inlineTitle'>
								<div className='checkoutBadge'>
									<span>2</span>
								</div>
								<span className='span2'>SHIPPING &amp; PAYMENT</span>
							</div>
							<div className='shipping'> 
								<label>
									<input type='radio' name='shipping'/>
									Standard: {standard}
								</label>
								<label>
									<input type='radio' name='shipping'/>
									Expedited: {expedited}
								</label>
							</div>
							<hr />
							<div className='cardContainer'>
								<div id="card-wrapper"></div>
									<CardReactFormContainer
					// the id of the container element where you want to render the card element.
					// the card component can be rendered anywhere (doesn't have to be in ReactCardFormContainer).
					container="card-wrapper" // required
					
					// an object contain the form inputs names.
					// every input must have a unique name prop.
					formInputsNames={
						{
						number: 'CCnumber', // optional — default "number"
						expiry: 'CCexpiry',// optional — default "expiry"
						cvc: 'CCcvc', // optional — default "cvc"
						name: 'CCname' // optional - default "name"
						}
					}
					
					// initial values to render in the card element
					initialValues= {
						{
						number: '4242424242424242', // optional — default •••• •••• •••• ••••
						cvc: '123', // optional — default •••
						expiry: '16/12', // optional — default ••/••
						name: 'Random Name' // optional — default FULL NAME
						}
					}
					
					// the class name attribute to add to the input field and the corresponding part of the card element,
					// when the input is valid/invalid.
					classes={
						{
						valid: 'valid-input', // optional — default 'jp-card-valid'
						invalid: 'invalid-input' // optional — default 'jp-card-invalid'
						}
					}
					
					// specify whether you want to format the form inputs or not
					formatting={true} // optional - default true
					>
					
					<form>
						<div className="form-container"> 
							<input ref='CCname' id='ccname' placeholder="Full name" type="text" name="CCname" required/>
						</div>
						<div className="form-container"> 
							<input ref='CCnumber' id='ccnumber' placeholder="Card number" type="text" name="CCnumber" required/>
						</div>
						<div className='form-inline'>
							<div className="form-container"> 
								<input ref='CCmmdd' id='ccmmdd' placeholder="MM/YY" type="text" name="CCexpiry" required/>
							</div>
							<div className="form-container"> 
								<input ref='CCcvc' id='cccvc' placeholder="CVC" type="text" name="CCcvc" required/>
							</div>
						</div>
					</form>
				</CardReactFormContainer>
					
							</div>
						</div>
					</Col>


					<Col s={12} m={3}>
						<div className='checkoutCard three'>
							<div className='inlineTitle'>
								<div className='checkoutBadge'>
									<span>3</span>
								</div>
								<span className='span2'>CONFIRM</span>
							</div>
							<div className='checkoutContainer'>
								<div className="shopify-buy__cart-items">
									<div className="shopify-buy__cart-item itemContainer">	
										<div className='someContainer'>
											<div className="shopify-buy__cart-item__image itemImage" alt="Product"></div>
												<span className="shopify-buy__cart-item__title" ></span>
											
												<span className="shopify-buy__cart-item__price"></span>
											
											</div>
										</div>
									</div>
									<div className='totalBox'>
								
											<div  className='totalNames' >
												<div className='shipping'>Shipping:</div>
												<div className='tax'>Tax:</div>
												<div className='total'>Total:</div>
											</div>
											<div className='totals'>
												<div className='shipping'>$SELECTED SHIPPING</div>
												<div className='tax'>$TAX</div>
												<div className='total'>$TOTAL</div>
											</div>
											
								
											<button className='placeorder' onClick={this.checkout}>PLACE ORDER</button>
									</div>
									
								</div>
								
							</div>
								
					</Col>

				</Row>
			</div>
    	</div>
     
    
    );
  }
}


