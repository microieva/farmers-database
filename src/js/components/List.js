import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { selectFarmer } from "../actions/actions";

const ConnectedList = ({ farmers, searchWord, selectFarmer}) => {
  // `${description.charAt(0).toUpperCase()} + ${description.slice(1)}`
  return (
    <div className='container'>
      <div className='card-title'>
          <h4>Members List</h4>
      </div>
      <ul>
        {farmers
          .filter(farmer => 
            farmer.firstName.toLowerCase().indexOf(searchWord.toLowerCase()) >=0
            ||
            farmer.lastName.toLowerCase().indexOf(searchWord.toLowerCase()) >=0
          )
          .map(farmer => (
            <li key={farmer.id}
              onClick={()=> selectFarmer(farmer)}>
              {`${farmer.firstName.charAt(0).toUpperCase()}${farmer.firstName.slice(1)} ${farmer.lastName.charAt(0).toUpperCase()}${farmer.lastName.slice(1)}`}
            </li>
        ))}
      </ul> 
    </div>
  )
};


const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
      selectFarmer: selectFarmer 
    }, 
    dispatch
  )
};

const mapStateToProps = state => {
  return { 
    farmers: state.farmers, 
    searchWord: state.searchWord 
  }
};

const List = connect(mapStateToProps, matchDispatchToProps)(ConnectedList);

export default List;
