import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { authenticateLogin } from "../../actions/loginActions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

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
      <div className="container-fluid col-md-4 offset-md-4">
        <div className="card">
          <div className="grey-text text-darken-3 card-header">Sign In</div>
          <form className="white card-body" onSubmit={this.handleSubmit}>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input onChange={this.handleChange} type="text" id="email" />
            </div>

            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleChange}
                type="password"
                id="password"
              />
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
          <div className="social-container">
            <a
              href="https://www.facebook.com/Boundless-2863536913871436"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
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
  { authenticateLogin }
)(login);
