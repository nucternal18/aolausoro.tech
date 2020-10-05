import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// context
import { AuthContext } from "../../context/authContext";

const RightNav = ({ open, setOpen }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout } = authContext;
  return (
    <Ul open={open} onClick={() => setOpen(!open)}>
      <li className="block px-1 py-2 m-1 ">
        <Link to="/">HOME</Link>
      </li>
      <li className="block px-1 py-2 m-1  ">
        <Link to="/about">ABOUT</Link>
      </li>
      <li className="block px-1 py-2 m-1  ">
        <Link to="/portfolio">PORTFOLIO</Link>
      </li>
      <li className="block px-1 py-2 m-1  ">
        <Link to="/contact">CONTACT</Link>
      </li>
      {isAuthenticated && (
        <li onClick={() => logout()} className="block px-1 py-2 m-1">
          Logout
        </li>
      )}
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  z-index: 40;

  li {
    padding: 18px 10px;
    color: #f6ad55;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    top: 0;
    left: 0;
    height: 100%;
    width: 70%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    opacity: 0.9;
  }
`;

export default RightNav;
