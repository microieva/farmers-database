import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchList } from '../actions/actions'

class SearchBar extends Component {
  onChange = e => {
    e.preventDefault();
    this.props.searchList(e.target.value)
  }
  onClick = e => {
    e.preventDefault();
    this.props.searchList(this.state.searchWord);
    this.setState({searchWord:""});      
  }
  render () {
    return (
      <div className='container'>
        <div className='card-title'>
          <h4>Search Members</h4>
        </div>
        <form>
          <div>
            <input type="text"
              className="inputs"
              placeholder="Search By Name..." 
              name="searchWord"   
              onChange={this.onChange} />
          </div>
          <button
            onClick={this.onClick}>Full List
          </button> 
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchWord: state.searchWord
});

export default connect(mapStateToProps, { searchList })(SearchBar);

