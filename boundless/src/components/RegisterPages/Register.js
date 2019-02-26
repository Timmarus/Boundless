import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import { connect } from 'react-redux';


export class Register extends Component {

  
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <RegisterForm />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps, null)(Register);
