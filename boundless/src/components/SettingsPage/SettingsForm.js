import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import * as actions from "../../actions/settingsActions";
import Dropdown from "react-dropdown";

export class SettingsForm extends Component {
  courses = ["CSC108", "CSC148", "CSC207", "CSC236", "CSC263", "CSC258"];

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      year: "",
      email: "",
      University: "",
      Program: ""

      //done: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.updateSettings(this.state);
    console.log("----------------");

    console.log(this.state);

    /*
    if (this.state.password == this.state.passwordConfirmation) {
      this.props.signUpUser(this.state);
    }
    
        if (this.state.done) {
          return <Redirect to="/" />;
        }
        */
  }

  render() {
    return (
      <div className="row">
        <div className="container center">
          <h5 className="grey-text text-darken-3">Settings</h5>
        </div>
        <div className="container col s8 offset-s0 left">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className="control-label">First Name</label>
              <input
                onChange={this.onChange}
                value={this.state.username}
                type="text"
                name="firstName"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="control-label">Last Name</label>
              <input
                onChange={this.onChange}
                value={this.state.lastName}
                type="text"
                name="lastName"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="control-label">Year</label>
              <input
                onChange={this.onChange}
                value={this.state.year}
                type="text"
                name="year"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="control-label">Email</label>
              <input
                onChange={this.onChange}
                value={this.state.email}
                type="text"
                name="email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="control-label">University</label>
              <input
                onChange={this.onChange}
                value={this.state.University}
                type="text"
                name="University"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="control-label">Program</label>
              <input
                onChange={this.onChange}
                value={this.state.Program}
                type="text"
                name="Program"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button
                onClick={this.onChange}
                className="btn blue lighten-1 z-depth-0"
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="container col s8 offset-s0 right" />
        <div>Courses:</div>
        <Dropdown
          options={this.courses}
          onChange={this._onSelect}
          placeholder="Select an option"
        />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(SettingsForm);
