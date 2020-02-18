import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addFarmer } from "../actions/actions";


class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            phoneNumber: "",
            gender: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({
          [event.target.id]: event.target.value
      });
  }

  handleSubmit(event) {
      event.preventDefault();
      const { name, phoneNumber, gender } = this.state;
      const id = uuidv1();
      this.props.addFarmer({ name, phoneNumber, gender, id });
      this.setState({ 
          name: "" , 
          phoneNumber: "",
          gender: null
      });
  }

  render() {
      const { name, phoneNumber, gender } = this.state;

      return (
          <form onSubmit={this.handleSubmit}>
              <div className="">
                  <label htmlFor="name">Name:</label>
                  <input
                    placeholder="Add Name..."
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                  />

                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    placeholder="Add Phone Number..."
                    type="number"
                    className="form-control"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={this.handleChange} 
                  />

                  <label htmlFor="gender">Gender: </label>
                  <input 
                    type="checkbox"
                    value="Female"
                    id="female"
                    checked={gender === "Female"}
                    onChange={this.handleChange} 
                  />Female  
                  <input 
                    type="checkbox"
                    value="Male"
                    id="male"
                    checked={gender === "Male"}
                    onChange={this.handleChange} 
                  />Male
          
              </div>
              <button type="submit" className="button">
                Save
              </button>
          </form>
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
