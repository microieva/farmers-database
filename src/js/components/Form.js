import React from "react";
import { Field, reduxForm } from 'redux-form'
//import uuidv1 from "uuid";

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
    {touched && error && <span className="error">{error}</span>}
  </div>
)

const  validate = ({firstName="", lastName="", phoneNumber="", gender="" }) =>{
  let errors ={}; 
  //const button = document.querySelector('.btn')

  if (firstName.trim()==="" || firstName.length < 3 || firstName.length > 13) {
    errors.firstName = "Required field. From 2 to 12 letters long."
  }

  else if (lastName.trim()==="" || lastName.length < 3 || lastName.length > 16) {
    errors.lastName = "Required field. From 2 to 15 letters long."
  }

  else if (phoneNumber.trim()==="" || phoneNumber.length < 6 ) {
    errors.phoneNumber = "Required field. No less than 6 characters long."
  }
    //to localSt
      

    // button.textContent = "Saved!"
    // setInterval(() => {    
    //   button.textContent="Save"
    // }, 2000) 
  return errors    
}  

const MemberForm = (
  {
    handleSubmit, 
    fields: {firstName, lastName, phoneNumber, gender}, 
    addMember
  }
) => {
      
      return (
        <div className="container">
          <div className='card-title'>
            <h4>Membership Form</h4>
          </div>
            <form onSubmit={handleSubmit(addMember)}>
              <Field
                label=" First Name:"
                className='inputs'
                name="firstName"
                component={renderField}
                placeholder="Add Your Given Name..."
                type="text"
                {...firstName}
              />
              <Field
                className='inputs'
                label="Last Name:"
                placeholder="Add Your Family Name..."
                name="lastName"
                component={renderField}
                type="text"
                {...lastName}
              />
              <Field
                className='inputs'
                label="Phone Number:"
                placeholder="Add Phone Number..."
                name="phoneNumber"
                component={renderField}
                type="text"
                {...phoneNumber}
              />
              <label>Gender:</label>
              <div>
                <label style={{fontWeight: 'normal'}}><Field
                  className="checkbox"
                  type="radio"
                  name = "gender"
                  component='input'
                  value="Female"
                  {...gender}/>Female</label>
                <label style={{fontWeight: 'normal'}}><Field
                  className="checkbox"
                  type="radio"
                  name="gender"
                  component='input'
                  value="Male"
                  {...gender}/>Male</label>
              </div>
              <button 
                type="submit" 
                className="btn" 
              >
                Save
              </button>
            </form>
        </div>
      );
  }

export default reduxForm({
  form: 'member',
  fields: ["firstName", "lastName", "phoneNumber", "gender"],
  validate,
})(MemberForm)