import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class BioPage extends Component {
  constructor(props) {
    super(props);

    //Load in the data from the database
    this.state = {
      username: "Temp",
      email: "Temp@temp.com",
      password: "Temp",
      passwordConfirmation: "Temp"
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    //we need to find the person in the database and change their name
    console.log(this.state);
    //they can leave the box empty the feault
  }

  render() {
    //We need to load in the current values of the username or leave them blank and then change them.
    return (
      <div>
      <div className="grey-text text-darken-3 card-header">Update Bio</div>
      <form className="card-body" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            type="text"
            name="username"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            type="text"
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            type="password"
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Confirm Password</label>
          <input
            value={this.state.passwordConfirmation}
            type="password"
            name="passwordConfirmation"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn blue lighten-1 z-depth-0">Update</button>
        </div>
      </form>
      </div>
    );
  }
}
export default BioPage;
