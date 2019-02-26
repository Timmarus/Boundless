import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo center">Boundless</Link>
                <NavLink to='/home' className="left">Home</NavLink>
            </div>
        </nav>   
    )
}

export default NavBar;