import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav>
      <h1>
        <Link to="/">MUD CLIENT</Link>
      </h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul>
    </Nav>
  );
}
const Nav = Styled.div`
    display: flex;
    justify-content: space-around
    align-content: center;
    width: 100%;
    margin: 0 auto;
    background-color: #282c34;
    color: white;
    font-size: 18px;
    h1 {
        margin:0;
        font-size: 24px;
        padding: 10px
    };
    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
        margin: 0;
        padding: 10px
        li {
            padding:0px 10px
        }
    }
`;

export default Navbar;
