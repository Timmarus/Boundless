import React from "react";
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import * as actions from "../../actions/loginActions";


const SignedOutLinks = (props) => {
    console.log("IN the signed in links");
    

  return (
    
    <ul className="right">
        <li><NavLink to='/'>Login</NavLink></li>
    </ul>
  );
};

export default connect(null,actions)(SignedOutLinks);
