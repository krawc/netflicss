import React, { Component } from 'react';
import logo from './images/netflicss.png';

const Header = () => {
    return ( 
        <div className="Header">
            <img src={logo} className="logo-image"/>
            <ul className="menu">
                <li>Home</li>
                <li>Movies</li>
                <li>TV Shows</li>
                <li>Recently Added</li>
                <li>My List</li>
            </ul>
        </div>
    );
}
 
export default Header;