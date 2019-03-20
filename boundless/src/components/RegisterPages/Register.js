import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import { connect } from 'react-redux';


export class Register extends Component {

  
  render() {
    return (
    	<div className="card col-md-8 offset-md-2">
          <RegisterForm />
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
