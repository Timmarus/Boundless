import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../actions/loginActions'

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
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
    console.log(this.state);

    if(this.state.password.length < 6){
      alert("Password length must be greater than 6 characters.");
    }else if (this.state.password != this.state.passwordConfirmation){
      alert("Confirmed password does not match.");
    }else{  
      if(!this.state.email.includes("@")){
        alert("Incorrect Email.");
      }else{
        alert("Sucess");
        this.props.signUpUser(this.state);
      }
    
    }
  }

  render() {

    console.log(this.props.auth);
    if (this.props.auth.uid) return <Redirect to='/' />
    return (
      <div className="container center">
        <form onSubmit={this.onSubmit}>
          <h5 className="grey-text text-darken-3">Register</h5>

          <div className="form-group">
            <label className="control-label">First Name</label>
            <input
              onChange={this.onChange}
              value={this.state.username}
              type="text"
              name="firstName"
              className="form-control"
            />
          {this.state.firstName == ""? (<label> Require First Name </label>) : null}
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
            {this.state.lastName == ""? (<label> Require Last Name </label>) : null}
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
            {this.state.email == ""? (<label> Require Email </label>) : null}
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
            { this.state.password.length < 6?  (<label>We require more than 6 characters</label>) : null}
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
            { this.state.passwordConfirmation == this.state.password && this.state.passwordConfirmation.length > 5? null : (<label>This needs to match the given password</label>)}
          </div>

          <div className="form-group">
            <button className="btn blue lighten-1 z-depth-0">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, actions)(RegisterForm);
