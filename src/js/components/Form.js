import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import validator from 'validator'

import { addFarmer } from "../actions/actions";

const Feedback = props => <p style={{ color: 'orange', fontSize: '0.8rem' }}>{props.error}</p>

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            gender: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate () {
    const errors = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    }
    
    if (this.state.firstName !== "" &&
      !validator.isLength(this.state.firstName, { min: 3, max: 15 })
    ) {
      errors.firstName = 'First name must be longer than 3 characters.'
    } 

    if (this.state.lastName !=="" &&
      !validator.isLength(this.state.lastName, { min: 3, max: 15 })
    ) {
      errors.lastName = 'Last name must be between 3 and 15 characters.'
    } 

    if (this.state.phoneNumber !=="" &&
      !validator.isLength(this.state.phoneNumber, { min: 7, max: 15 })
    ) {
      errors.phoneNumber = 'Phone number should be more than 6 characters.'
    }

    return errors
  }

  handleChange(event) {
    const { value, type, id } = event.target

    if (type === 'radio') {
        this.setState({
          gender: value
        })
    } else {
        this.setState({
          [id]: value,
        });
      }
        
  }

  handleSubmit(event) {
      event.preventDefault();
      const { firstName, lastName, phoneNumber, gender } = this.state;
      const id = uuidv1();
      const button = document.querySelector('.btn')

      this.props.addFarmer({ firstName, lastName, phoneNumber, gender, id });
      button.textContent= "Saved!"
        this.setState({ 
            firstName: "" ,
            lastName: "",
            phoneNumber: "",
            gender: ""
        });
        setInterval(() => {    
          button.textContent="Save"
        }, 2000)
  }   

  render() {
      const { firstName, lastName, phoneNumber, gender } = this.state;
      const errors = this.validate()
      
      return (
        <div className="container">
          <div className='card-title'>
            <h4>Membership Form</h4>
          </div>
          
          <form onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    className='inputs'
                    placeholder="Add Your Given Name..."
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                  />
                  {errors.firstName ? <Feedback error={errors.firstName} /> : ''}
                </div>
                <div>
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    className='inputs'
                    placeholder="Add Your Family Name..."
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={this.handleChange}
                  />
                  {errors.lastName ? <Feedback error={errors.lastName} /> : ''}
                </div>
                <div>
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    className='inputs'
                    placeholder="Add Phone Number..."
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={this.handleChange} 
                  />
                  {errors.phoneNumber ? <Feedback error={errors.phoneNumber} /> : ''}
                </div>
                <div>
                  <label htmlFor="gender">Gender: </label>
                  <div>
                    <input 
                      className="checkbox"
                      type="radio"
                      name = "gender"
                      value="Female"     
                      checked= {gender === 'Female'}
                      onChange={this.handleChange} 
                    />Female
                    <br />
                    <input 
                      className="checkbox"
                      type="radio"
                      name="gender"
                      value="Male"
                      checked= {gender === 'Male'}
                      onChange={this.handleChange} 
                    />Male
                  </div>
                </div>
              <button 
                type="submit" 
                className="btn" 
                disabled={(firstName.length>=3 && lastName.length>=3 && phoneNumber.length>6)? false : true}>
                Save
              </button>
          </form>
        </div>
      );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addFarmer: farmer => dispatch(addFarmer(farmer))
    };
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
