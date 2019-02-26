import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import * as actions from "../../actions/loginActions";

const SignedInLinks = (props) => {
    console.log("IN the signed in links");
    

  return (
    
    <ul className="right">
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/settings'>Settings</NavLink></li>
        <li><NavLink to='/biography'>Bio</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        
    </ul> 
  );
};

export default connect(null,actions)(SignedInLinks);
