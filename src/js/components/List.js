import React from "react";
import PropTypes from 'prop-types';

const List = ({ members, searchWord, getMember }) => {
  console.log("members inside List.js:", members)
  return (
    <div className='container'>
      <div className='card-title'>
          <h4>Members List</h4>
          {members.length>0 && <h4>Number of Members: {members.length}</h4>}
      </div>
      <ul>
        {(members)
           .filter(member => 
             member.firstName.toLowerCase().indexOf(searchWord.toLowerCase()) >=0
             ||
             member.lastName.toLowerCase().indexOf(searchWord.toLowerCase()) >=0
           )
          .map(member => (
            <li key={member.id}
              onClick={()=> getMember(member)}>
              {`${member.firstName.charAt(0).toUpperCase()}${member.firstName.slice(1)} ${member.lastName.charAt(0).toUpperCase()}${member.lastName.slice(1)}`}
            </li>
        ))}
      </ul> 
    </div>
  )
};

List.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      gender: PropTypes.string
    }).isRequired
  ).isRequired,
  searchWord: PropTypes.string,
  getMember: PropTypes.func.isRequired,
};

export default List
