import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import banner from '../../assets/images/banner_listado.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="https://static.wixstatic.com/media/06c910_8c2e861f5650436c9c8cc821b451e5a2~mv2.png/v1/fill/w_390,h_406,al_c,q_85,usm_0.66_1.00_0.01/Funko%20Pop%20Shop%20logo.webp" alt="Logo React CoderHouse" className="logo"/>
                <div className="nav_links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><CartWidget/></li>
                    </ul>
                </div>
            </nav>
            <div className="banner">
                <img src={banner} alt="Banner"/>
            </div>
        </header>
    )
}

export default NavBar;
