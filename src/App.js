// @ts-nocheck
import React from "react";
import Styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Authentication/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
// import Map from "./components/Map/Map";
import Register from "./components/Register/Register";
import Maze from "./components/Maze/Maze";
import "./App.css";
import Team from "./components/Team/Team";

function App() {
  return (
    <AppContainer>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Main>
          <Route exact path="/">
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
          <Route exact path="/team" component={Team} />
        </Main>
      </Switch>
    </AppContainer>
  );
}

const AppContainer = Styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  background-color: #DFDBE5;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%238a809a' fill-opacity='0.4'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6 12h6v6h-6v-6zm24 24h6v6h-6v-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
height: 50vh
`;

const Main = Styled.div`
  /* width: 1000px; */
  max-width: 1200px;
  margin: 0 auto;

`;
export default App;
