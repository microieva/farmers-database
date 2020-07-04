import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import validator from 'validator'

import { addFarmer } from "../actions/actions";

const Feedback = props => <p style={{ color: 'red' }}>{props.error}</p>

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            phoneNumber: "",
            gender: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate () {
    const errors = {
      name: '',
      phoneNumber: ''
    }
    if (
      !validator.isLength(this.state.name, { min: 3, max: 15 })
    ) {
      errors.name = 'Name must be between 2 and 15 characters'
    }
    if (
      !validator.isLength(this.state.phoneNumber, { min: 7, max: 12 })
    ) {
      errors.phoneNumber = 'Phone number should be more than 6 characters'
    }

    return errors
  }


  handleChange(event) {
    const { name, value, type, checked, id } = event.target
      if (type === 'radio') {
        this.setState({
          [name]: checked
        })
      } else {
        this.setState({
            [id]: value
        });
      }
      const button = document.querySelector('.btn')
      button.style.background = "darkgreen"
      button.textContent = "Save"
  }

  handleSubmit(event) {
      event.preventDefault();
      const { name, phoneNumber, gender } = this.state;
      const id = uuidv1();
      this.props.addFarmer({ name, phoneNumber, gender, id });
      const button = document.querySelector('.btn')
      button.textContent= "Saved!"
      this.setState({ 
          name: "" , 
          phoneNumber: "",
          gender: ""
      });
      setInterval(() => {    
        button.textContent="Save"
        button.style.background ="orange"
      }, 2000)
  }

  render() {
      const { name, phoneNumber, gender } = this.state;
      const errors = this.validate()
      return (
        <div className="container">
          <div className='card-title'>
            <h4>Membership Form</h4>
          </div>
          
          <form onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    className='inputs'
                    placeholder="Add Name..."
                    type="text"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                  {errors.name ? <Feedback error={errors.name} /> : ''}
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
                      checked={gender === 'Female'}
                      onChange={this.handleChange} 
                    />Female
                    <br />
                    <input 
                      className="checkbox"
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={gender === 'Male'}
                      onChange={this.handleChange} 
                    />Male
                  </div>
                </div>
              <button type="submit" className='btn'>
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
