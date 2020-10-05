import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background: black;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 10px 0;
    width: 18rem;
  }

  @media (max-width: 768px) {
    .logo {
      width: 15rem;
      margin-top: 0.3em;
      margin-right: 0.1rem;
    }
  }
`;

const Navbar = () => {
  return (
    <header>
      <Nav>
        <div className='container  mx-auto flex flex-wrap justify-between'>
          <Burger />
          <div className='z-50 text-orange-400 text-2xl'>
            <ul className='flex flex-row'>
              <li className='px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
                <a href='https://www.linkedin.com/in/adewoyin-oladipupo-usoro-267291100/'>
                  <i className='fab fa-linkedin' />
                </a>
              </li>
              <li className='px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
                <a href='https://twitter.com/woy_in'>
                  <i className='fab fa-twitter-square' />
                </a>
              </li>
              <li className='px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
                <a href='https://github.com/nucternal18'>
                  <i className='fab fa-github' />
                </a>
              </li>
              <li className='px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
                <Link to="/login">
                  <i className='far fa-user'></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </header>
  );
};

export default Navbar;
