import React, { Component } from "react";
import { connect } from "react-redux";

class ConnectedFarmerDetails extends Component {
    render () {
        if (!this.props.farmer) {
            return (
              <div className='container'>
                <div className='card-title'>
                  <h4>Select A Member...</h4>
                </div>
              </div>);
        }
        return (
            <div className='container'>
              <div className='card-title'>
                <h4>Member Details</h4>
              </div>
              <div className='member-details'>
                <h4>Name: </h4>
                <p>{this.props.farmer.name}</p>
                <h4>Phone Number:</h4>
                <p>{this.props.farmer.phoneNumber}</p>
                <h4>Gender:</h4>
                <p>{this.props.farmer.gender}</p>
              </div>
            </div>
        );

    }
}

const mapStateToProps = state => {
  return { farmer: state.selectedFarmer };
};

const Farmer = connect(mapStateToProps, null)(ConnectedFarmerDetails);

export default Farmer;
