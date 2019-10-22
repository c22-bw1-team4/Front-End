import React from "react";
import Styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Authentication/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./App.css";

function App() {
  return (
    <AppContainer>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Main>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Main>
      </Switch>
    </AppContainer>
  );
}

const AppContainer = Styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

const Main = Styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
export default App;
