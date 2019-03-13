import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/loginActions";
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';

const NavBar = (props) => {
  console.log(props.profile);
  
  
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo center">
            Boundless
          </Link>
          {props.auth.uid ? (<SignedInLinks />) : (<SignedOutLinks/>)}
        <Link to="/home" className="left">{props.profile.firstName}</Link>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps,actions)(NavBar);