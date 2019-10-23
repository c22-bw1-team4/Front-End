import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import Styled from "styled-components";
import Axios from "axios";

function Login() {
  const sendCredentials = async (username, pass) => {
    try {
      const url = "https://bw-django-game.herokuapp.com/api/login/";
      const res = await Axios.post(url, { username: username, password: pass });
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.log("err", error.message);
    }
  };
  return (
    <LoginPage>
      <h1>Login Page</h1>
      <Form sendCredentials={sendCredentials} />

      <h4>
        Don't have an account? <Link to="/register">Register Here</Link>
      </h4>
    </LoginPage>
  );
}

const LoginPage = Styled.div`
    text-align: center;
`;

export default Login;
