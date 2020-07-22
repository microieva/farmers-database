import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addMember, getMember, searchMembers } from "../actions/actions"
import List from "./List";
import Form from "./Form";
import Member from "./Member";
import SearchBar from "./SearchBar";

class App extends Component {
  render () {
    const {
      addMember,
      getMember,
      searchMembers,
      members,
      selectedMember,

    } = this.props

    return (
      <div className="wrapper">
      <div className="header">
        <div>
          <h2>Members Database</h2>
        </div>
      </div>
      <div className="flex-top">
        <Form/>
        {members.length>0 ?
        <List 
          getMember={getMember}
          members={members}
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
        <SearchBar/>
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
  }
}
 
export default connect(mapStateToProps, {addMember, searchMembers, getMember})(App)
