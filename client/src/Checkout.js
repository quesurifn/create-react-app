import React, { Component } from 'react';
import './App.css';
import './card.css'


import {connect} from 'react-redux';

import {Button, Col, Row} from 'react-materialize';
import CardReactFormContainer from 'card-react';
import {checkoutInfo} from './actions/action'

@connect((store) => {
  return {
	checkoutinfo: store.reducer.checkoutinfo,
	planinfo: store.reducer.planinfo,
	cart: store.reducer.cart
  }
})
export class Checkout extends Component {
  constructor() {
    super() 

	this.checkout= this.checkout.bind(this);
	this.computeTax= this.computeTax.bind(this);
	this.hideAlert = this.hideAlert.bind(this);
	this.state = {
		billing: false,
		selectedShipping: '$0.00', 
		tax: false,
		taxAmount: '$0.00',
		total: 0
	}
  }

  componentDidMount() {
	  var element = document.querySelector("html"); 
      console.log(element)
      element.style.overflowX = 'scroll'
      window.scroll(0,0)
	  element.style.overflowX = 'hidden'
  }

  computeTax() {
	  if (this.refs.state.value === 'IL') {
		  if(this.props.planinfo.price !== undefined) {

				console.log(this.props.planinfo.price)
				let tax = parseFloat((this.props.planinfo.price * 0.0625).toFixed(2))
				console.log(tax)
				let total = this.state.total.replace('$', '')
				total = parseFloat(total) + tax
				total = total.toFixed(2)
				this.setState({taxAmount: '$'+tax, total: '$'+total} )
		  } else {
				this.refs.message.innerHTML = 'Please add something to your cart.'
				this.refs.alert.style.display = 'block';
		  }

	  } 
  }
  hideAlert() {
	  this.refs.alert.style.display ='none'
  }
  checkout() {
		if(this.props.planinfo !== undefined || this.props.cart.length !== 0) {
					if (this.refs.email.checkValidity() && this.refs.phone.checkValidity() && this.refs.first.checkValidity() && this.refs.last.checkValidity() &&
					this.refs.address.checkValidity() && this.refs.city.checkValidity() && this.refs.state.checkValidity() && this.refs.zip.checkValidity() && document.getElementById('ccname').checkValidity() &&
					document.getElementById('ccmmdd').checkValidity() && document.getElementById('cccvc').checkValidity() && document.getElementById('ccnumber').checkValidity()) {
						
		let orderObj = {
			email: this.refs.email.value,
			phone: this.refs.phone.value, 
			first: this.refs.first.value, 
			last: this.refs.last.value, 
			address: this.refs.address.value, 
			city: this.refs.city.value, 
			zip: this.refs.zip.value, 
			ccname: document.getElementById('ccname').value,
			cccvc: document.getElementById('cccvc').value,
			ccmmdd: document.getElementById('ccmmdd').value,
			ccname: document.getElementById('ccname').value
		}

		this.props.dispatch(checkoutInfo(orderObj))
		this.props.history.push('/thankyou')

	} else {
		console.log(this.refs.alert)
		
		if (!this.refs.email.checkValidity()) {
			this.refs.email.style.outline = '1px solid #ff2a4a4'
		
			console.log('email')
			this.refs.message.innerHTML = 'Please Check your billing information.'
			this.refs.alert.style.display = 'block';
		} else if (!this.refs.phone.checkValidity()) {
			this.refs.phone.style.outline = '1px solid #ff2a4a4'
			
			console.log('phone')
			this.refs.alert.style.display = 'block';
			this.refs.message.innerHTML = 'Please Check your billing information.'
		} else if (!this.refs.first.checkValidity()) {
			this.refs.first.style.outline = '1px solid #ff2a4a4'
		
			console.log('first')
			this.refs.message.innerHTML = 'Please Check your billing information.'
			this.refs.alert.style.display = 'block';
		} else if (!this.refs.last.checkValidity()) {
			this.refs.last.style.outline = '1px solid #ff2a4a4'
			
			console.log('last')
			this.refs.message.innerHTML = 'Please Check your billing information.'
			this.refs.alert.style.display = 'block';
		} else if (!this.refs.address.checkValidity()) {
			this.refs.address.style.outline = '1px solid #ff2a4a4'
			
			console.log('address')
			this.refs.message.innerHTML = 'Please Check your billing information.'
			this.refs.alert.style.display = 'block';
		} else if (!this.refs.city.checkValidity()) {
			this.refs.city.style.outline = '1px solid #ff2a4a4'
			
			console.log('city')
			this.refs.message.innerHTML = 'Please Check your billing information.'
			this.refs.alert.style.display = 'block';
		} else if (!this.refs.state.checkValidity()) {
			this.refs.state.style.outline = '1px solid #ff2a4a4'
			
			console.log('state')
			this.refs.message.innerHTML = 'Please Check your billing information.'
			this.refs.alert.style.display = 'block';
		} else if (!this.refs.zip.checkValidity()) {
			this.refs.zip.style.outline =  '1px solid #ff2a414'
			
			console.log('zip')
			this.refs.message.innerHTML = 'Please Check your billing information.'
			this.refs.alert.style.display = 'block';
		} else if (!this.refs.CCname.checkValidity()) {
			this.refs.CCname.style.outline = '1px solid #ff2a4a4'
			
			console.log('ccname')
			this.refs.message.innerHTML = 'Please Check your billing information.'
			this.refs.alert.style.display = 'block';
		} else if (!this.refs.CCnumber.checkValidity()) {
			this.refs.CCnumber.style.outline = '1px solid #ff2a4a4'
			
			console.log('ccnumber')
			this.refs.message.innerHTML = 'Please Check your billing information.'
			this.refs.alert.style.display = 'block';
		} else if (!this.refs.CCmmdd.checkValidity()) {
			this.refs.CCmmdd.style.outline = '1px solid #ff2a4a4'
			
			console.log('ccmmdd')
			this.refs.message.innerHTML = 'Please Check your billing information.'
			this.refs.alert.style.display = 'block';
		} else if (!this.refs.CCcvc.checkValidity()) {
			this.refs.CCcvc.style.outline = '1px solid #ff2a4a4'
			
			console.log('ccvc')
			this.refs.message.innerHTML = 'Please Check your billing information.'
			this.refs.alert.style.display = 'block';
		} else {
			console.log('some sort of error happened')
		}
	
	}
	} else {
		this.refs.message.innerHTML = 'Please add something to your cart.'
	    this.refs.alert.style.display = 'block';
	}
  }




  render() {
	  let standard = '$8.98'
	  let expedited = '$12.98'
	  
	  let plan;
	  let items;


	  try {

		if (this.props.planinfo !== '' && this.props.planinfo !== undefined) {
			let info = this.props.planinfo
			plan = <p><b>{info.plan}</b> <i>5 meals weekly</i> <b>${info.price}</b></p>
		} else {
			plan = <p>No plans selected today</p>
		}

		if (this.props.cart.length !== 0) {
			items = this.props.cart.map(e =>{
				return <li><p><b>{e.name}</b> <i>Feeds 6</i> <b>${e.price}</b>  #{e.q}</p></li>
			})
			console.log(items)
		} else {
			items = <p>No items selected today</p>
		}


	  } catch (e) {
		  console.log(e)
	  }

	  let total;
	  if (this.props.cart.length !== 0 && this.props.planinfo != undefined && this.props.planinfo !== '') {
		 let cartSum = this.props.cart.reduce((a, b) => a.price + b.price)
		 console.log(cartSum)
	  }

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
									<input ref="phone" className="form-text" type="tel" id='phone' placeholder="847-222-5555" required />
								</div>
								<hr />

								<h3 className='shippingTitle'>Shipping Address</h3>
								<div className='form-inline'>
									<div className="form-container"> 
										<input ref='first' id='first' className="form-text" type="text" placeholder="First Name" required />
									</div>
									<div className="form-container"> 
										<input ref='last' id='last' className="form-text" type="text" placeholder="Last Name"  required />
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
									<select name="state" ref='state' id='state' onChange={this.computeTax} required>
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
							<div className="alert" ref='alert'>
								<span className="closebtn" onClick={this.hideAlert}>&times;</span> 
								<div ref='message'></div>
							</div>
							<div className='inlineTitle'>
								<div className='checkoutBadge'>
									<span>2</span>
								</div>
								<span className='span2'>PAYMENT</span>
						
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
							<input ref='ccname' id='ccname' placeholder="Full name" type="text" name="CCname" required/>
						</div>
						<div className="form-container"> 
							<input ref='ccnumber' id='ccnumber' placeholder="Card number" type="text" name="CCnumber" required/>
						</div>
						<div className='form-inline'>
							<div className="form-container"> 
								<input ref='ccmmdd' id='ccmmdd' placeholder="MM/YY" type="text" name="CCexpiry" required/>
							</div>
							<div className="form-container"> 
								<input ref='cccvc' id='cccvc' placeholder="CVC" type="text" name="CCcvc" required/>
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
								<h2>Plan Selection</h2>

								
									{plan}



								<h2>A la cart</h2>

								<ul>
									
									{items}
	



								</ul>
							</div>
									<div className='totalBox'>
								
											<div  className='totalNames' >
												<div className='shipping'>Shipping:</div>
												<div className='tax'>Tax:</div>
												<div className='total'>Total Due Today:</div>
											</div>
											<div className='totals'>
												<div className='shipping'>Included</div>
												<div className='tax'>{this.state.taxAmount}</div>
												<div className='total'>{this.state.total}</div>
											</div>
											
								
											<button className='placeorder' onClick={this.checkout}>PLACE ORDER</button>
									</div>
									
								</div>
								
					
								
					</Col>

				</Row>
			</div>
    	</div>
     
    
    );
  }
}


