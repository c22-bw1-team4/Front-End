import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);
  
  return (
    <Nav>
      <h1>
        <Link to="/">MUD CLIENT</Link>
      </h1>
      <ul>
        <li>
          {loggedIn === false ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link to="/login" onClick={()=> localStorage.clear()}>Logout</Link>
          )}
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
    font-size: 18px;
    h1, a {
      margin:0;
      font-size: 24px;
      padding: 10px;
      color: #ffffff;
      text-decoration: none
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
