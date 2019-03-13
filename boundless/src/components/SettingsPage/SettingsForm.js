import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import * as actions from "../../actions/settingsActions";
import Dropdown from "react-dropdown";
import Select from 'react-select';

const courses = [
  {value: "CSC108", label: "CSC108"},
  {value: "CSC148", label: "CSC148"},
  {value: "CSC207", label: "CSC207"},
  {value: "CSC236", label: "CSC236"},
  {value: "CSC209", label: "CSC209"},
  {value: "CSC258", label: "CSC258"},
  {value: "CSC263", label: "CSC263"}
];

var drop = [
  {value: "Drop this course", label: "Drop this course"}
]

export class SettingsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      year: "",
      email: "",
      University: "",
      Program: "",
      mycourses: []
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
    this.props.coursesUpdate(this.state.mycourses)
    console.log("----------------");
    console.log(this.state);
  }

  createValue = (course) => {
    return 
  }

  createCompoennet = (courseID) => {
    console.log(courseID);
    
    return (
      <div>
        <text>{courseID}</text>
        <button>drop</button>
      </div>
    )
  }

  handleAdd = (e) => {
    //console.log(e);
    var newArray = this.state.mycourses; 
    if (newArray.indexOf(e.value) == -1) {
      newArray.push(e.value);   
      this.setState({mycourses: newArray});
      console.log(this.state);
    }   
   }; 

  handleDelete = (e) => {
    console.log(e);
    var newArray = this.state.mycourses;
    if (newArray.indexOf(e.value) != -1) {
      newArray.pop(newArray.indexOf(e.value));
      this.setState({mycourses: newArray});
      console.log(this.state);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="container center">
          <h5 className="grey-text text-darken-3">Settings</h5>
        </div>
        <div className="container col s8 left">
        
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
        <div className="container col s4 right">
        <Select
          placeholder="Add a new course:"
          value="Add a new course:"
          onChange={this.handleAdd}
          options={courses}
          /> 
          <h1>Your courses: 
            { this.state.mycourses.map((item) => (
              this.createCompoennet(item)
            ))}
          {/* { this.state.mycourses.map((item) => (
            <div>
              <Select
                placeholder={item}
                value={item}
                onChange={this.handleDelete}
                options={drop}
                /> 
            </div>
          ))} */}
          </h1>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(SettingsForm);
