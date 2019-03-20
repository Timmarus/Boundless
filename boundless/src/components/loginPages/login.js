import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { authenticateLogin } from "../../actions/loginActions";
import { connect } from "react-redux";

class login extends Component {
  //initial State
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    //e is the target id
    //update local state
    this.setState({
      [e.target.id]: e.target.value
    });
    // console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log("in handle submit");

    this.props.authenticateLogin(this.state);
  };

  render() {
    if (this.props.auth.uid) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="container-fluid col-md-8 offset-md-2">
        <div className="card">
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="grey-text text-darken-3 card-title">Sign In</div>
          <hr />
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} type="text" id="email" />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} type="password" id="password" />
          </div>

          <div className="row center">
            <div className="input-field col">
              <input
                className="btn blue lighten-1 z-depth-0"
                type="submit"
                value="Login"
              />
            </div>

            <div className="input-field col">
              <Link to="/register">
                <button className="btn blue lighten-1 z-depth-0">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </form>
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
  { authenticateLogin }
)(login);
