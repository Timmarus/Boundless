import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import HomeScreen from "./HomeScreen";

export class home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <HomeScreen />
        </div>
      </div>
    );
  }
}

export default home;
