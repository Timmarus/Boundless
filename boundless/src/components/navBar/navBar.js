import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container center">
                <Link to='/' className="brand-logo">Boundless</Link>
                
            </div>
        </nav>   
    )
}

export default NavBar;