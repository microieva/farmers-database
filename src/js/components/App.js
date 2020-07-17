import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFarmer, addFarmer, updateInput } from '../actions/actions';
//import List from "./List";
import FarmerForm from "./Form";
import Farmer from "./Farmer";
import SearchBar from "./SearchBar";


class App extends Component {
  render() {
    const { 
      // input: {
      //   firstName,
      //   lastName,
      //   phoneNumber,
      // },
      //gender,
      input,
      selectedFarmer, 
      //farmers, 
      searchWord,
      //getFarmer,
      addFarmer,
    } = this.props

    //console.log("props from App.js", this.props)

    return (
      <div className="wrapper">
        <div className="header">
          <div>
            <h2>Member Database</h2>
          </div>
        </div>
        <div className="flex-top">
          <FarmerForm 
            // firstName={firstName}
            // lastName={lastName}
            // phoneNumber={phoneNumber}
            // gender={gender}
            input={input}
            addFarmer={addFarmer}
          />
          {/* <List 
            //farmers={farmers} 
            searchWord={searchWord} 
            getFarmer={getFarmer}
          /> */}
        </div>
        <div className="flex-bottom">
          <SearchBar searchWord={searchWord}/>
          {!selectedFarmer
          ?
          <div className='container'>
            <div className='card-title'>
              <h4>Select A Member...</h4>
            </div>
          </div>
          :
          <Farmer selectedFarmer={selectedFarmer}/>
          }
          
        </div>
      </div>
    )
  } 
};

const mapStateToProps = state => {
  //console.log('state from mapStateToProps', state)

  return {
      input: state.input,
      // firstName: state.input.firstName,
      // lastName: state.input.lastName,
      // phoneNumber: state.input.phoneNumber,
      //gender: state.gender,
      farmers: state.farmers,
      searchWord: state.searchWord,
      selectedFarmer: state.selectedFarmer,
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
      getFarmer: getFarmer,
      addFarmer: addFarmer,
      updateInput: updateInput
    }, 
    dispatch
  )
};

// get Farmer ---> action destructured inside matchDispatchToProps
export default connect(mapStateToProps, matchDispatchToProps)(App)
