import React, { Component } from "react";
import { Link } from "react-router-dom";
import { authenticateLogin } from '../../actions/loginActions';
import { connect } from 'react-redux';

class login extends Component {

  //initial State
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    //e is the target id
    //update local state
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state);
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.authenticateLogin(this.state);
  }


  render() {
    
    return (
      <div className="container center">
        <form className="white" onSubmit={this.handleSubmit} >
          <h5 className="grey-text text-darken-3">SignIn</h5>

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
              <Link to="/home">
                <button className="btn blue lighten-1 z-depth-0">Login</button>
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

export default connect(null, { authenticateLogin })(login);

