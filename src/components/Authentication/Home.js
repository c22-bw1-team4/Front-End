import React from "react";
import Styled from 'styled-components';

function Home() {
  return (
    <HomePage>
      <h1>Welcome to Team 4 MUD</h1>
    </HomePage>
  );
}

const HomePage = Styled.div`
  h1 {
  margin: 140px;
  padding: 20px;
  background-color: #dfdbe5b3;

  }
`

export default Home;
