import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import Form from "../Login/Form";
import Axios from "axios";

function Register() {
  const sendCredentials = async (username, pass) => {
    try {
      console.log("Register.js", username, pass);
      const url = "http://localhost:4000/login";
      const res = await Axios.post(url, { username: username, password: pass });
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.log("err", error.message);
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
