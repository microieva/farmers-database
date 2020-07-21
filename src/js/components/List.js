import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { selectMember } from "../actions/actions";

const ConnectedList = ({ members, searchWord, selectMember }) => {
  return (
    <div className='container'>
      <div className='card-title'>
          <h4>Members List</h4>
          {members.length>0 && <h4>Number of Members: {members.length}</h4>}
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
              onClick={()=> selectMember(member)}>
              {`${member.firstName.charAt(0).toUpperCase()}${member.firstName.slice(1)} ${member.lastName.charAt(0).toUpperCase()}${member.lastName.slice(1)}`}
            </li>
        ))}
      </ul> 
    </div>
  )
};


const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
      selectMember: selectMember
    }, 
    dispatch
  )
};

const mapStateToProps = state => {
  return { 
    members: state.members, 
    searchWord: state.searchWord 
  }
};

const List = connect(mapStateToProps, matchDispatchToProps)(ConnectedList);

export default List;
