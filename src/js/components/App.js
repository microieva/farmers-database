import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMember, getMember, searchList, getList } from "../actions/actions"
import List from "./List";
import Form from "./Form";
import Member from "./Member";
import SearchBar from "./SearchBar";

class App extends Component {
  render () {
    const {
      addMember,
      getMember,
      getList,
      searchList,
      members,
      selectedMember,
      searchWord

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
        {/* {members && members.length ?
          <List 
            getMember={getMember}
            members={members}
            searchWord={searchWord}
          />
          :
          <div className='container'>
            <div className='card-title'>
            <h4>Members List</h4>
            </div>
          </div>
        } */}
        
      </div>
      <div className="flex-bottom">
        <SearchBar 
          searchList={searchList}
          searchWord={searchWord}
          members={members}
          getList={getList}
        />
        {!selectedMember ? 
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
}

const mapStateToProps = state => {
  return {
      selectedMember: state.main.selectedMember,
      members: state.main.members,
      searchWord: state.searchWord,

  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
      getMember: getMember,
      addMember: addMember,
      searchList: searchList,
      getList: getList
    }, 
    dispatch
  )
};
 
export default connect(mapStateToProps, matchDispatchToProps)(App)
