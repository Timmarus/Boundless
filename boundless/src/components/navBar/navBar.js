import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/loginActions";
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import { updateLastSeen } from "../../actions/chatActions";
import {BrowserView,} from "react-device-detect";

const NavBar = (props) => {
  // console.log(props.profile);
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <BrowserView><Link to="/" className="brand-logo center">
            Boundless
          </Link>
        </BrowserView>
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

export default connect(mapStateToProps,{...actions, updateLastSeen})(NavBar);