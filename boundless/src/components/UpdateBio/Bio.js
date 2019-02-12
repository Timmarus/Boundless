import React , { Component } from "react";
import { Redirect } from "react-router-dom";
import BioPage from "./BioPage";

export class Bio extends Component {
    render() {
      return (
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <BioPage />
          </div>
        </div>
      );
    }
  }
  
  export default Bio;
  