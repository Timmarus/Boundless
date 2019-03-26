import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/loginActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import Select from "react-select";

const UToronto_courses = [
  { value: "CSC108", label: "CSC108" },
  { value: "CSC148", label: "CSC148" },
  { value: "CSC207", label: "CSC207" },
  { value: "CSC236", label: "CSC236" },
  { value: "CSC209", label: "CSC209" },
  { value: "CSC258", label: "CSC258" },
  { value: "CSC263", label: "CSC263" }
];

const URyerson_courses = [
  {value: "CPS109", label:"CPS109"}
];

  const years = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5+", label: "5+" }
];
const school = [
  { value: "UToronto", label: "University of Toronto"},
  { value: "URyerson", label: "Ryerson University"},
  { value: "YorkU", label: "York University"}
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

//comment
class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",

      university: "",
      year: "",
      program: "",

      email: "",
      password: "",
      passwordConfirmation: "",

      courses: []

      //done: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log('updated state: ' + JSON.stringify(this.state));
  }

  handleSelection(type, option) {
    const selected = option.value;
    this.setState({ [type]: selected });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);

    if (this.state.password.length < 6) {
      alert("Password length must be greater than 6 characters.");
    } else if (this.state.password != this.state.passwordConfirmation) {
      alert("Confirmed password does not match.");
    } else {
      if (!this.state.email.includes("@") && this.state.email.includes(".")) {
        alert("Incorrect Email");
      } else {
        alert("Success");
        this.props.signUpUser(this.state);
      }
    }
  }


  handleAddCourse = option => {
    var updatedCourses = this.state.courses;
    
    if (updatedCourses.indexOf(option.value) == -1) {
      updatedCourses.push(option.value);
      this.setState({ courses: updatedCourses });
    } 
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
    // console.log(this.props.auth);
    if (this.props.auth.uid) return <Redirect to="/" />;
    return (
      <div className="container center">
        <div className="grey-text text-darken-3 card-header">Register</div>
        <div className="row card-body">
          <div className="col-md-6">
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
                <Select 
                  placeholder = "Select your University"
                  name = "university"
                  onChange={this.handleSelection.bind(this,"university")}
                  options={school}
                />
              </div>

              <div className="form-group">
                <label className="control-label">Year</label>
                <Select
                  placeholder="Select your Year"
                  // this.setState({ [e.target.name]: e.target.value });
                  name="year"
                  onChange={this.handleSelection.bind(this, "year")}
                  options={years}
                />
                {/* {this.state.lastName == "" ? (
              <label> Require Year</label>
            ) : null} */}
              </div>
              <div className="form-group">
                <label className="control-label">Program</label>

                <Select
                  placeholder="Select your Program"
                  value={this.state.type}
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

              <div className="Password-Form">
                <label className="Password-lbl">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  type="password"
                  name="password"
                  className="form-control"
                />
                {this.state.password.length < 6 ? (
                  <label>We require more than 6 characters</label>
                ) : null}
              </div>

              <div className="Confirm-Form">
                <label className="Confirm-lbl">Confirm Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.passwordConfirmation}
                  type="password"
                  name="passwordConfirmation"
                  className="form-control"
                />
                {this.state.passwordConfirmation == this.state.password &&
                this.state.passwordConfirmation.length > 5 ? null : (
                  <label>This needs to match the given password</label>
                )}
              </div>

              <div className="form-group">
                <button
                  onClick={this.onChange}
                  className="btn blue lighten-1 z-depth-0"
                >
                  Register
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            { this.state.university == "UToronto"  ? 
              <Select
              placeholder="Add a course:"
              value={this.state.type}
              onChange={this.handleAddCourse}     
              options={UToronto_courses}
              />
              : 
              <Select
              placeholder="Add a course:"
              value={this.state.type}
              onChange={this.handleAddCourse}     
              options={URyerson_courses}
              />
             } 
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
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(RegisterForm);
