import React from "react";

const Member = ({ selectedMember, deleteMember }) => {
  
  const { firstName, lastName, phoneNumber, gender } = selectedMember
  console.log("selectedMember:", selectedMember)
  return (
    <div className='container'>
      <div className='card-title'>
        <h4>Member Details</h4>
      </div>
      <div className='member-details'>
        <div>
          <h4>Name: </h4><p>{`${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`}</p>
        </div>
        <div>
          <h4>Phone Number:</h4><p>{phoneNumber}</p>
        </div>
        <div>
          <h4>Gender:</h4><p>{gender}</p>
        </div>
        <button onClick={() => deleteMember(selectedMember)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Member;
