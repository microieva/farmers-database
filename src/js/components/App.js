import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  addMember, 
  getMember, 
  searchList, 
  getList, 
  deleteMember 
} from "../actions";

import List from "./List";
import Form from "./Form";
import Member from "./Member";
import SearchBar from "./SearchBar";

class App extends Component {
  render () {
    const {
      addMember,
      getMember,
      members,
      selectedMember,
      searchWord,
      searchList,
      getList,
      deleteMember
    } = this.props

    return (
      <div className="wrapper">
      <div className="header">
        <div>
          <h2>Members Database</h2>
        </div>
      </div>
      <div className="flex-top">
        <Form addMember={addMember}/>
        <List 
          getMember={getMember}
          members={members}
          searchWord={searchWord}
          />
      </div>
      <div className="flex-bottom">
        <SearchBar 
          searchWord={searchWord}
          searchList={searchList}
          getList={getList}
          members={members}
        />
        {!selectedMember ? 
          <div className='container'>
            <div className='card-title'>
              <h4>Select A Member...</h4>
            </div>
          </div>
          :
          <Member 
            selectedMember={selectedMember}
            deleteMember={deleteMember}
          />
        }  
      </div>
    </div>
    )
  }  
}

const mapStateToProps = state => {
  return {
      selectedMember: state.main.selectedMember,
      members: state.main.members,
      searchWord: state.main.searchWord,
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
      getMember: getMember,
      addMember: addMember,
      searchList: searchList,
      getList: getList,
      deleteMember: deleteMember
    }, 
    dispatch
  )
};
 
export default connect(mapStateToProps, matchDispatchToProps)(App)
