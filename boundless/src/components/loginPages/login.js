import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class login extends Component {
  render() {
    return (
      <div className="container center">
        <form className="white ">
          <h5 className="grey-text text-darken-3">SignIn</h5>

          <div className="input-field">
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <div className="row center">
            <div className="input-field col">
                <Link to="/home">
                <button className='btn blue lighten-1 z-depth-0'>Login</button>
                </Link>
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
    );
  }
}
