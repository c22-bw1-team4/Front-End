import React, { useState } from "react";
import Styled from "styled-components";

function LoginForm({ sendCredentials }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    sendCredentials(username, email, password);
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
          name="username"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </FormContainer>
  );
}

const FormContainer = Styled.div`
  width: 300px;
  height: 300px;
  background-color: #282c34;
  justify-content: center;
  align-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    padding-top: 40px;
    margin: 0 auto;
    input {
      padding:10px;
      margin: 10px;
      border-radius: 10px
    }
  }
`;
export default LoginForm;
