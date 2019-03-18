import React , { Component } from "react";
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import BioPage from "./BioPage";

export class Bio extends Component {
    render() {
      if (!this.props.auth.uid) {
        return (
          <Redirect to="/" />
        )
      }
      return (
            <BioPage />
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
    };
  };
  
  export default connect(mapStateToProps, null)(Bio);
  