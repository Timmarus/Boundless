import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/loginActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect, Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { Button } from "reactstrap";
import Home from "../homescreenPages/HomeScreen";
import Select from "react-select";

const UToronto_courses = [
  { value: "CSC104", label: "CSC104" },
  { value: "CSC108", label: "CSC108" },
  { value: "CSC148", label: "CSC148" },
  { value: "CSC199", label: "CSC199" },
  { value: "CSC207", label: "CSC207" },
  { value: "CSC236", label: "CSC236" },
  { value: "CSC209", label: "CSC209" },
  { value: "CSC258", label: "CSC258" },
  { value: "CSC263", label: "CSC263" },
  { value: "CSC290", label: "CSC290" },
  { value: "CSC299", label: "CSC299" },
  { value: "CSC300", label: "CSC300" },
  { value: "CSC301", label: "CSC301" },
  { value: "CSC309", label: "CSC309" },
  { value: "CSC310", label: "CSC310" },
  { value: "CSC318", label: "CSC318" },
  { value: "CSC320", label: "CSC320" },
  { value: "CSC321", label: "CSC321" },
  { value: "CSC322", label: "CSC322" },
  { value: "CSC324", label: "CSC324" },
  { value: "CSC333", label: "CSC333" },
  { value: "CSC338", label: "CSC338" },
  { value: "CSC343", label: "CSC343" },
  { value: "CSC347", label: "CSC347" },
  { value: "CSC358", label: "CSC358" },
  { value: "CSC363", label: "CSC363" },
  { value: "CSC369", label: "CSC369" },
  { value: "CSC373", label: "CSC373" },
  { value: "CSC384", label: "CSC384" },
  { value: "CSC398", label: "CSC398" },
  { value: "CSC399", label: "CSC399" },
  { value: "CSC404", label: "CSC404" },
  { value: "CSC409", label: "CSC409" },
  { value: "CSC411", label: "CSC411" },
  { value: "CSC420", label: "CSC420" },
  { value: "CSC422", label: "CSC422" },
  { value: "CSC423", label: "CSC423" },
  { value: "CSC427", label: "CSC427" },
  { value: "CSC428", label: "CSC428" },
  { value: "CSC448", label: "CSC448" },
  { value: "CSC454", label: "CSC454" },
  { value: "CSC458", label: "CSC458" },
  { value: "CSC469", label: "CSC469" },
  { value: "CSC488", label: "CSC488" },
  { value: "CSC490", label: "CSC490" },
  { value: "CSC492", label: "CSC492" },
  { value: "CSC493", label: "CSC493" },
  { value: "CSC498", label: "CSC498" },
  { value: "CSC499", label: "CSC499" }
];

const URyerson_courses = [
  { value: "CPS109", label: "CPS109" },
  { value: "CPS209", label: "CPS209" },
  { value: "CPS213", label: "CPS213" },
  { value: "CPS305", label: "CPS305" },
  { value: "CPS310", label: "CPS310" },
  { value: "CPS393", label: "CPS393" },
  { value: "CPS406", label: "CPS406" },
  { value: "CPS412", label: "CPS412" },
  { value: "CPS420", label: "CPS420" },
  { value: "CPS506", label: "CPS506" },
  { value: "CPS510", label: "CPS510" },
  { value: "CPS590", label: "CPS590" },
  { value: "CPS616", label: "CPS616" },
  { value: "CPS633", label: "CPS633" },
  { value: "CPS706", label: "CPS706" },
  { value: "CPS721", label: "CPS721" }
];

  const years = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5+", label: "5+" }
];
const school = [
  { value: "UToronto", label: "University of Toronto" },
  { value: "URyerson", label: "Ryerson University" },
  { value: "YorkU", label: "York University" }
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
        this.props.signUpUser(this.state);
      }
    }
    this.renderHome()
  }

  renderHome() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
      </BrowserRouter>
    );
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
