import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart"><CartWidget/></Link></li>
                    </ul>
                </div>
                <ul className='nav'>
                    <li><NavLink to="/category/jacket">Jacket</NavLink></li>
                    <li><NavLink to="/category/jersey">Jersey</NavLink></li>
                    <li><NavLink to="/category/sneaker">Sneaker</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
