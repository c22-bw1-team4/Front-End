import React, { useState } from "react";
import Styled from "styled-components";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = name => e => {
    if (name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, "\n", password);
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={handleChange("username")}
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange("password")}
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
export default Form;
