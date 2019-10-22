import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import Form from "../Login/Form";

function Register() {
  return (
    <RegisterContainer>
      <h1>Register Page</h1>
      <Form />

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
