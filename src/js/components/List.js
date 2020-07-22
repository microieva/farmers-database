import React from "react";

const List = ({ members, searchWord, getMember }) => {
  return (
    <div className='container'>
      <div className='card-title'>
          <h4>Members List</h4>
          <h4>Number of Members: {members.length}</h4>
      </div>
      <ul>
        {members
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

export default List
