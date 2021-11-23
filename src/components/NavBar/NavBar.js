import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <img src="" alt="Logo React CoderHouse"/>
            <div className="nav_links">
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/"><li>About us</li></a>
                    <a href="/"><li>Contact</li></a>
                    <a href="/"><li><i class="fas fa-shopping-cart"></i></li></a>
                </ul>
            </div>
        </header>
    )
}

export default NavBar;
