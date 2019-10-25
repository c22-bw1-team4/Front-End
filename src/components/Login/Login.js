import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Form from "./LoginForm";
import Styled from "styled-components";
import { axiosWithAuth } from "../../utils/AxiosWithAuth";

function Login(props) {
  const sendCredentials = async (username, email, password) => {
    try {
      let user;
      if (email !== "") {
        user = { username, email, password };
      }
      user = { username, password };
      const res = await axios.post(
        "https://bw-django-game.herokuapp.com/api/login/",
        { ...user }
      );
      if (res) {
        // axios.defaults.headers.common["Authorization"] = `Token ${res.data.key}`;
        localStorage.setItem("token", res.data.key);
        props.history.push("/game");
      } else {
        console.log("error no res!!");
      }
    } catch (error) {
      return error;
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
