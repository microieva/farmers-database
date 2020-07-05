import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchFarmers } from "../actions/actions";
//import PropTypes from "prop-types";


class SearchBar extends Component {
    constructor () {
        super();
        this.state = {
            searchWord: ""
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        e.preventDefault();
        this.props.searchFarmers(this.state.searchWord);
        this.setState({searchWord:""});
        
    }

    render() {
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
                        onChange={e => this.props.searchFarmers(e.target.value)} />
                </div>
                <button
                  onClick={this.onClick}>Full List
                </button>    
            </form>
          </div>
        )
    }
}

const mapStateToProps= state => {
    return { searchWord: state.searchWord }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({searchFarmers: searchFarmers}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
