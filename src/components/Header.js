import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-black text-white text-base font-thin font-sans p-6">
      <nav className="container  mx-auto flex flex-wrap justify-between">
        <div className="block  z-50">
          <div className="block lg:hidden  z-50">
            <button
              type="button"
              onClick={(e) => handleToggle(e)}
              className="flex items-center px-3 py-2 text-white-700 hover:text-white"
            >
              <svg
                className="fill-current h-5 w-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={
              isOpen
                ? `w-full flex-grow lg:items-center lg:w-auto z-50`
                : `hidden lg:block lg:items-center lg:w-auto z-50`
            }
          >
            <ul className="text-sm block  lg:flex lg:flex-grow">
              <li
                onClick={(e) => handleToggle(e)}
                className="block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500"
              >
                <Link to="/">HOME</Link>
              </li>
              <li
                onClick={(e) => handleToggle(e)}
                className="block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500"
              >
                <Link to="/about">ABOUT</Link>
              </li>
              <li
                onClick={(e) => handleToggle(e)}
                className="block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500"
              >
                <Link to="/portfolio">PORTFOLIO</Link>
              </li>
              <li
                onClick={(e) => handleToggle(e)}
                className="block px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500"
              >
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="z-50">
          <ul className="flex flex-row">
            <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
              <a href="https://www.linkedin.com/in/adewoyin-oladipupo-usoro-267291100/">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
              <a href="https://twitter.com/woy_in">
                <i className="fab fa-twitter-square" />
              </a>
            </li>
            <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
              <a href="https://github.com/nucternal18">
                <i className="fab fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
