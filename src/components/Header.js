import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className='bg-black text-white text-base font-thin font-sans m-auto p-6'>
        <nav className="container mx-auto flex flex-row justify-between">
            <ul className="flex flex-row z-50">
                <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500"><Link to="/Home-page">HOME</Link></li>
                <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500"><Link to='/about'>ABOUT</Link></li>
                <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500"><Link to="/portfolio">PORTFOLIO</Link></li>
                <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500"><Link to="/contactForm">CONTACT</Link></li>
            </ul>
            <ul className="flex flex-row z-50">
                <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                    <a href="https://www.linkedin.com/in/adewoyin-oladipupo-usoro-267291100/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                    <a href="https://twitter.com/woy_in">
                        <i className="fab fa-twitter-square"></i>
                    </a>
                </li>
                <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                    <a href="https://github.com/nucternal18">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
