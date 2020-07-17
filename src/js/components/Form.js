import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from 'redux-form'
//import uuidv1 from "uuid";

//import { addFarmer } from "../actions/actions";

async function submitting(data) {
  try {
    let response = await fetch("http://localhost:3000/farmers-database", {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      responseType: 'json',
      body: JSON.stringify(data)
    });
    let responseJson = await response.json()
    return responseJson
  } catch (error) {
    console.log("error in submitting:", error)
  }
}

const renderField = (
  {
    label, 
    input, 
    placeholder, 
    type,
    className,
    meta: {touched, error}
  }
) => (
  <div>
    <label>{label}</label>
    <input {...input} 
      className={className}
      type={type}
      placeholder={placeholder}
    />
    {touched && error &&
     <span className="error">{error}</span>}
  </div>
)


  // handleChange(event) {
  //   const { value, type, id } = event.target
  //   const { updateInput } = this.props
  //   updateInput(value)
  //   // if (type === 'radio') {
  //   //     this.setState({
  //   //       this.props.gender: value
  //   //     })
  //   // } else {
  //   //   updateInput(value)
  //   // }
        
  // }

const  submit = ({firstName="", lastName="", phoneNumber="" }) =>{
  let error ={};
  let isError = false; 
  //const button = document.querySelector('.btn')

  if (firstName.trim()==="" || firstName.length < 3 || firstName.length > 13) {
    error.firstName = "Required field. From 2 to 12 letters long."
    isError = true
  }

  else if (lastName.trim()==="" || lastName.length < 3 || lastName.length > 16) {
    error.lastName = "Required field. From 2 to 15 letters long."
    isError = true
  }

  else if (phoneNumber.trim()==="" || phoneNumber.length < 6 ) {
    error.phoneNumber = "Required field. No less than 6 characters long."
    isError = true
  }

  if (isError) {
    throw new SubmissionError(error)
  } else {
    //submit form
    return submitting({firstName, lastName, phoneNumber})
      .then(data => {
        if (data.errors) {
          throw new SubmissionError({
            firstName: data.errors.firstName,
            lastName: data.errors.lastName,
            phoneNumber: data.errors.phoneNumber
          })
        } else {
          console.log("server added data", data)
        }
      })

    // button.textContent = "Saved!"
    // setInterval(() => {    
    //   button.textContent="Save"
    // }, 2000)
  }
      //event.preventDefault();
      //const { firstName, lastName, phoneNumber, gender } = values
      // const { firstName, lastName, phoneNumber, gender } = this.state;
      //const id = uuidv1();
      // 

      // this.props.addFarmer(
      //   { 
      //     firstName: firstName, 
      //     lastName: lastName, 
      //     phoneNumber: phoneNumber, 
      //     //gender: gender, 
      //   }
      // );
      // button.textContent= "Saved!"
      //   this.setState({ 
      //       firstName: "" ,
      //       lastName: "",
      //       phoneNumber: "",
      //       gender: ""
      //   });
      //   
      //console.log("VALUES: ", firstName, lastName, phoneNumber)
  }   

const FarmerForm = ({handleSubmit}) => {
      //const errors = validate()
      
      return (
        <div className="container">
          <div className='card-title'>
            <h4>Membership Form</h4>
          </div>
            <form onSubmit={handleSubmit(submit)}>
                  
                    <Field
                      label=" First Name:"
                      className='inputs'
                      name="firstName"
                      component={renderField}
                      placeholder="Add Your Given Name..."
                      type="text"
                    />
                    {/* {errors.firstName ? <Feedback error={errors.firstName} /> : ''} */}
                    <Field
                      className='inputs'
                      label="Last Name:"
                      placeholder="Add Your Family Name..."
                      name="lastName"
                      component={renderField}
                      type="text"
                    />
                    {/* {errors.lastName ? <Feedback error={errors.lastName} /> : ''} */}
                  
                    <Field
                      className='inputs'
                      label="Phone Number:"
                      placeholder="Add Phone Number..."
                      name="phoneNumber"
                      component={renderField}
                      type="text"
                    />
                    {/* {errors.phoneNumber ? <Feedback error={errors.phoneNumber} /> : ''} */}
                    {/* <Field
                        className="checkbox"
                        label="Gender:"
                        type="radio"
                        name = "gender"
                        component={renderField}
                        value="female"
                    />Female
                    <Field
                        className="checkbox"
                        type="radio"
                        name="gender"
                        component={renderField}
                        value="male"
                    />Male  */}
                <button 
                  type="submit" 
                  className="btn" 
                  // disabled={
                  //   (
                  //     (firstName && firstName.length>=3)
                  //     && 
                  //     (lastName && lastName.length>=3)
                  //     && 
                  //     (phoneNumber && phoneNumber.length>6)
                  //   )
                  //   ? false : true}
                  >
                  Save
                </button>
            </form>
        </div>
      );
  }

const mapStateToProps = state => {
  return {
    input: state.input,
    // firstName: state.input.firstName,
    // lastName: state.input.lastName, 
    // phoneNumber: state.input.phoneNumber,
    //gender: state.input.gender
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFarmer: farmer => dispatch(this.props.addFarmer(farmer)),
    //updateInput: input => dispatch(this.props.updateInput(input))
  };
};

const Form = reduxForm({
  form: 'details-form',
  onSubmit: submit
})(FarmerForm)

export default connect(mapStateToProps, mapDispatchToProps)(Form);

