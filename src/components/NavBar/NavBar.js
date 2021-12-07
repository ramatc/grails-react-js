import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import banner from '../../assets/images/banner_listado.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="../../assets/images/react-logo.png" alt="Logo React CoderHouse" className="logo"/>
                <div className="nav_links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><CartWidget/></li>
                    </ul>
                </div>
            </nav>
            <img src={banner} alt="Banner" className="banner"/>
        </header>
    )
}

export default NavBar;
