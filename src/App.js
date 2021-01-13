import React from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Favorite from "./pages/Favorite";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorite" component={Favorite} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  );
}

const Container = styled.section`
  height: 100vh;
  background: linear-gradient(
    to bottom right,
    rgba(69, 135, 246, 0.8),
    rgba(69, 246, 165, 0.8)
  );
  position: relative;
  overflow: hidden;
`;

export default App;
