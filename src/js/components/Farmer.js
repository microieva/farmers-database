import React, { Component } from "react";
import { connect } from "react-redux";

class ConnectedFarmerDetails extends Component {

    render () {
        //console.log("FarmerDetails this.props", this.props);

        if (!this.props.farmer) {
            return (<h4>Select Farmer...</h4>);
        }
        return (
            <div className="">
                <h4>Name: {this.props.farmer.name}</h4>
                <h4>Phone Number: {this.props.farmer.phoneNumber}</h4>
                <h4>Gender: {this.props.farmer.gender}</h4>
            </div>
        );

    }
}

const mapStateToProps = state => {
  return { farmer: state.selectedFarmer };
};


const Farmer = connect(mapStateToProps, null)(ConnectedFarmerDetails);

export default Farmer;
