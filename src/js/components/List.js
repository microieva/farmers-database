import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { selectFarmer } from "../actions/actions";

const ConnectedList = ({ farmers, searchWord, selectFarmer }) => (
  
    <div>
      <ul>
        {farmers
          .filter(farmer => 
            farmer.name.toLowerCase().indexOf(searchWord.toLowerCase()) >=0)

          .map(farmer => (
            <li key={farmer.id}
              onClick={()=> selectFarmer(farmer)}>
              {farmer.name}
            </li>
        ))}
      </ul> 
    </div>
);


const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectFarmer: selectFarmer }, dispatch)
};

const mapStateToProps = state => {
  return { farmers: state.farmers, searchWord: state.searchWord }
};

const List = connect(mapStateToProps, matchDispatchToProps)(ConnectedList);

export default List;
