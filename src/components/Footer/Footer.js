import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content" id="footer">
                <h3>React Coderhouse</h3>
                <ul className="icons">
                    <li><a href="https://github.com/ramatc/react_coderhouse" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/ramiro-tanquias/" target="_blank" rel="noreferrer"><i
                                className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="mailto:rtanquiascornejo@gmail.com"><i className="fas fa-envelope"></i></a></li>
                </ul>
            </div>

            <div className="footer-bottom">
                <p>
                    Copyright &copy; 2021 React Coderhouse. Designed by
                    <a href="http://www.linkedin.com/in/ramiro-tanquias/" target="_blank"
                        rel="noopener noreferrer"><span> Ramiro
                            Tanquias</span>
                    </a>
                </p>
            </div>  
        </footer>
    )
}

export default Footer
