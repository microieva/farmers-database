import React, { Component } from "react";
import { connect } from "react-redux";

class ConnectedMemberDetails extends Component {
    render () {
        if (!this.props.member) {
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
                <p>{`${this.props.member.firstName.charAt(0).toUpperCase()}${this.props.member.firstName.slice(1)} ${this.props.member.lastName.charAt(0).toUpperCase()}${this.props.member.lastName.slice(1)}`}</p>
                <h4>Phone Number:</h4>
                <p>{this.props.member.phoneNumber}</p>
                <h4>Gender:</h4>
                <p>{this.props.member.gender}</p>
              </div>
            </div>
        );

    }
}

const mapStateToProps = state => {
  return { member: state.selectedMember };
};

const Member = connect(mapStateToProps, null)(ConnectedMemberDetails);

export default Member;
