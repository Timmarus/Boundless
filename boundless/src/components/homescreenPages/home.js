import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import HomeScreen from "./HomeScreen";

class Home extends Component {
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

export default Home;
