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
        <div className="card col-md-8 offset-md-2">
            <BioPage />
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
  
  export default connect(mapStateToProps, null)(Bio);
  