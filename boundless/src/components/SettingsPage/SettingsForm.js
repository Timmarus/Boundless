import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import * as actions from "../../actions/settingsActions";
import Dropdown from "react-dropdown";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

//Comment
const courses = [
  { value: "CSC108", label: "CSC108" },
  { value: "CSC148", label: "CSC148" },
  { value: "CSC207", label: "CSC207" },
  { value: "CSC236", label: "CSC236" },
  { value: "CSC209", label: "CSC209" },
  { value: "CSC258", label: "CSC258" },
  { value: "CSC263", label: "CSC263" }
];

const years = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5+", label: "5+" }
];

const programs = [
  { value: "Computer Science", label: "Computer Science" },
  { value: "Statisticss", label: "Statistics" },
  { value: "Mathematics", label: "Mathematics" },
  { value: "Chemistry", label: "Chemistry" },
  { value: "Physics", label: "Physics" },
  { value: "Commerce", label: "Commerce" },
  { value: "Business", label: "Business" },
  { value: "Anthropology", label: "Anthropology" }
];

export class SettingsForm extends Component {
  constructor(props) {
    super(props);

    // get current values and prepopulate fields
    var {
      firstName,
      lastName,
      email,
      year,
      university,
      program,
      courses
    } = this.props.profile;

    console.log("profile: " + JSON.stringify(this.props.profile));

    this.state = {
      firstName: firstName,
      lastName: lastName,
      year: year,
      email: email,
      university: university,
      year: year,
      program: program,
      courses: courses
    };
    console.log(this.state);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleSelection(type, option) {
    const selected = option.value;
    this.setState({ [type]: selected });

    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("onSubmit" + JSON.stringify(this.state));

    // extract only what we want from state into a
    // new immutable object, don't pass all of state in

    const updatedInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      year: this.state.year,
      email: this.state.email,
      university: this.state.university,
      year: this.state.year,
      program: this.state.program,
      courses: this.state.courses
    };

    this.props.updateProfile(updatedInfo);

    // console.log("---------------- updateSettings()");
    // console.log(this.state);
  }

  handleAddCourse = option => {
    var updatedCourses = this.state.courses;
    updatedCourses.push(option.value);
    this.setState({ courses: updatedCourses });
    console.log(this.state);
  };

  handleDelete = option => {
    var updatedCourses = this.state.courses;
    var indexToRemove = updatedCourses.indexOf(option);

    updatedCourses.splice(indexToRemove, 1);
    this.setState({ courses: updatedCourses });
    console.log(this.state);
  };

  render() {
    // console.log('Current Profile: ' + JSON.stringify(this.props.profile))
    // console.log('Current Profile Auth: ' + JSON.stringify(this.props.auth))

    return (
      <div className="card col-md-8 offset-md-2">
        <div className="grey-text text-darken-3 card-header">Settings</div>
        <div class="row card-body">
          <div className="col-md-8">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label className="control-label">First Name</label>
                <input
                  onChange={this.onChange}
                  value={this.state.firstName}
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
                <label className="control-label">University</label>
                <input
                  onChange={this.onChange}
                  value={this.state.university}
                  type="text"
                  name="university"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="control-label">Year</label>
                <Select
                  placeholder={this.state.year || "Select your Year"}
                  value={this.state.year}
                  // this.setState({ [e.target.name]: e.target.value });
                  name="year"
                  onChange={this.handleSelection.bind(this, "year")}
                  options={years}
                />
              </div>

              <div className="form-group">
                <label className="control-label">Program</label>

                <Select
                  placeholder={this.state.program || "Select your Program"}
                  value={this.state.program}
                  // this.setState({ [e.target.name]: e.target.value });
                  name="program"
                  onChange={this.handleSelection.bind(this, "program")}
                  options={programs}
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
                <button
                  onClick={this.onChange}
                  className="btn btn-success lighten-1 z-depth-0"
                >
                  Update
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-4">
            <Select
              placeholder="Add a course:"
              value={this.state.type}
              onChange={this.handleAddCourse}
              options={courses}
            />
            <table>
              {this.state.courses.map(option => (
                <tr>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-success">{option}</button>
                      <button
                        className="btn btn-danger"
                        onClick={this.handleDelete.bind(this, option)}
                      >
                        <FontAwesomeIcon icon="trash" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
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

export default connect(
  mapStateToProps,
  actions
)(SettingsForm);
