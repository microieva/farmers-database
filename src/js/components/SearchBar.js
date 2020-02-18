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

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e){
        e.preventDefault();
        this.props.searchFarmers(this.state.searchWord);
        this.setState(()=>({searchWord:""}));
        
    }

    render() {
        return (
            <form>
                <div>
                    <input type="text"
                        className="form-control"
                        placeholder="Search Name..."      
                        onChange={e => this.props.searchFarmers(e.target.value)} />
                    <div>
                        <button
                            onClick={this.onClickHandler}>Back to List
                        </button>
                    </div>
                </div>
            </form>
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
