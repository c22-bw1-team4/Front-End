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
      const res = await axiosWithAuth().post(`/login/`, { ...user });

      console.log(res);
      axios.defaults.headers.common["Authorization"] = `Token ${res.data.key}`;
      props.history.push("/game");
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
    text-align: center
`;

export default Login;
