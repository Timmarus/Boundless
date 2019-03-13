import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import SettingsForm from "./SettingsForm";

export class Settings extends Component {

  render() {

    if (!this.props.auth.uid) {
      return ( <Redirect to="/" /> )
    }

    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SettingsForm />
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

export default connect(mapStateToProps, null)(Settings);
