import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import Styled from "styled-components";

function Login() {
  return (
    <LoginPage>
      <h1>Login Page</h1>
      <Form />

      <h4>
        Don't have an account? <Link to="/register">Register Here</Link>
      </h4>
    </LoginPage>
  );
}

const LoginPage = Styled.div`
    text-align: center
`;

export default Login;
