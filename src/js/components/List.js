import React from "react";
import { connect } from "react-redux";
//import { bindActionCreators } from 'redux';

const List = ({ farmers, searchWord, getFarmer }) => {
  return (
    <div className='container'>
      <div className='card-title'>
          <h4>Members List</h4>
          {farmers.length>0 && <h4>Number of Members: {farmers.length}</h4>}
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
              onClick={()=> getFarmer(farmer)}>
              {`${farmer.firstName.charAt(0).toUpperCase()}${farmer.firstName.slice(1)} ${farmer.lastName.charAt(0).toUpperCase()}${farmer.lastName.slice(1)}`}
            </li>
        ))}
      </ul> 
    </div>
  )
};


// const matchDispatchToProps = dispatch => {
//   return bindActionCreators(
//     { 
//       getFarmer: this.props.getFarmer,
//     }, 
//     dispatch
//   )
// };

const mapStateToProps = state => {
  return { 
    farmers: state.farmers, 
    searchWord: state.searchWord 
  }
};

export default connect(mapStateToProps, null)(List);

