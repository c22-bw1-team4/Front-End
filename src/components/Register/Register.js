import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import Form from "./RegisterForm";
import axios from "axios";
import { axiosWithAuth } from "../../utils/AxiosWithAuth";

function Register(props) {
  const sendCredentials = async (username, email, password1, password2) => {
    try {
      let user;
      if (email !== "") {
        user = { username, email, password1, password2 };
      }
      user = { username, password1, password2 };
      const res = await axiosWithAuth().post(`/registration/`, { ...user });
      axios.defaults.headers.common["Authorization"] = `Token ${res.data.key}`;
      props.history.push("/game");
    } catch (error) {
      return error;
    }
  };
  return (
    <RegisterContainer>
      <h1>Register Page</h1>
      <Form sendCredentials={sendCredentials} />

      <h4>
        Already have an account? <Link to="/login">Login Here</Link>
      </h4>
    </RegisterContainer>
  );
}

const RegisterContainer = Styled.div`
  text-align: center
`;

export default Register;
