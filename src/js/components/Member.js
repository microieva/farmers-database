import React from "react";

const Member = ({ selectedMember }) => {
  const { firstName, lastName, phoneNumber, gender } = selectedMember

  return (
    <div className='container'>
      <div className='card-title'>
        <h4>Member Details</h4>
      </div>
      <div className='member-details'>
        <h4>Name: </h4>
        <p>{`${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`}</p>
        <h4>Phone Number:</h4>
        <p>{phoneNumber}</p>
        <h4>Gender:</h4>
        <p>{gender}</p>
      </div>
    </div>
  );
}

export default Member;
