import { Link, NavLink } from 'react-router-dom'
import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <nav>
                <div className='navbar'>
                    <Link to="/">
                            <img src="https://photos.tf1.fr/450/225/logo-programme-the-sneakers-215942-b304c8-0@1x.png" alt="Logo React CoderHouse" className="logo"/>
                    </Link>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/cart"><CartWidget/></NavLink></li>
                    </ul>
                </div>
                <ul className='nav'>
                    <li><NavLink to="/category/jacket">Jacket</NavLink></li>
                    <li><NavLink to="/category/jersey">Jersey</NavLink></li>
                    <li><NavLink to="/category/sneaker">Sneaker</NavLink></li>
                </ul>
            </nav>
            {/* <div className="banner">
                <img src={banner} alt="Banner"/>
            </div> */}
        </header>
    )
}

export default NavBar;
