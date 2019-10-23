// @ts-nocheck
import React from "react";
import Styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Authentication/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
// import Map from "./components/Map/Map";
import Register from "./components/Register/Register";
import Maze from './components/Maze/Maze';
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
          <Route
            exact
            path="/register"
            render={props => <Register {...props} />}
          />
          <Route exact path="/login" render={props => <Login {...props} />} />
  {/*<Route exact path="/game" render={props => <Map {...props} />} />*/}
          <Route exact path="/game" component={Maze} />
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
  max-width: 1000px;
  margin: 0 auto;
`;
export default App;
