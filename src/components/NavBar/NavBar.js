import { Link, NavLink } from 'react-router-dom'
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import banner from '../../assets/images/banner_listado.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                    <img src="https://static.wixstatic.com/media/06c910_8c2e861f5650436c9c8cc821b451e5a2~mv2.png/v1/fill/w_390,h_406,al_c,q_85,usm_0.66_1.00_0.01/Funko%20Pop%20Shop%20logo.webp" alt="Logo React CoderHouse" className="logo"/>
                </Link>
                <div className="nav_links">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/category/funko">Funko POP</NavLink></li>
                        <li><NavLink to="/category/comics">Comics</NavLink></li>
                        <li><NavLink to="/cart"><CartWidget/></NavLink></li>
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
