import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import react_logo from '../../assets/images/react-logo.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <img src={react_logo} alt="Logo React CoderHouse" className="logo"/>
            <div className="nav_links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-us">About us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/cart"><CartWidget/></a></li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar;
