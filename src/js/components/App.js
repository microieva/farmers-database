import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMember, addMember } from '../actions/actions';
import List from "./List";
import MemberForm from "./Form";
import Member from "./Member";
import SearchBar from "./SearchBar";


class App extends Component {
  render() {
    const { 
      selectedMember, 
      members, 
      searchWord,
      getMember,
      addMember,
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
          <MemberForm 
            addMember={addMember}
          />
          <List 
            members={members} 
            searchWord={searchWord} 
            getMember={getMember}
          /> 
        </div>
        <div className="flex-bottom">
          <SearchBar searchWord={searchWord}/>
          {!selectedMember
          ?
          <div className='container'>
            <div className='card-title'>
              <h4>Select A Member...</h4>
            </div>
          </div>
          :
          <Member selectedMember={selectedMember}/>
          }
          
        </div>
      </div>
    )
  } 
};

const mapStateToProps = state => {
  //console.log('state from mapStateToProps', state)

  return {
      members: state.members,
      searchWord: state.searchWord,
      selectedMember: state.selectedMember,
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
      getMember: getMember,
      addMember: addMember
    }, 
    dispatch
  )
};

export default connect(mapStateToProps, matchDispatchToProps)(App)
