import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/loginActions";

const NavBar = props => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container center">
        <Link to="/" className="brand-logo">
          Boundless
        </Link>
        <Link to="/home" className="right">
          Home
        </Link>
        <Link to="/settings" className="left">
          Settings
        </Link>

        {props.auth.uid ? (
          <a onClick={props.signOut} className="left">
            Log Out
          </a>
        ) : null}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(NavBar);
