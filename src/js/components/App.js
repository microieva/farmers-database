import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMember, getMember, searchMembers, getList } from "../actions/actions"
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
      searchMembers,
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
        {members.length>0 ?
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
        }
        
      </div>
      <div className="flex-bottom">
        <SearchBar 
          searchMembers={searchMembers}
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
  //console.log('state from mapStateToProps', state)

  return {
      selectedMember: state.selectedMember,
      members: state.members,
      searchWord: state.searchWord,

  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
      getMember: getMember,
      addMember: addMember,
      searchMembers: searchMembers,
      getList: getList
    }, 
    dispatch
  )
};
 
export default connect(mapStateToProps, matchDispatchToProps)(App)
