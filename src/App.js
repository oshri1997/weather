import React from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import Favorite from "./pages/Favorite";
import styled from "styled-components";
import LogoImg from "./images/Logo.svg";

function App() {
  return (
    <Router>
      <>
        <Container>
          <LogoContainer>
            <ImageContiner>
              <Link to="/">
                <ImageLogo src={LogoImg} alt="Logo" />
              </Link>
            </ImageContiner>
          </LogoContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorite" component={Favorite} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </>
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
const LogoContainer = styled.div`
  width: 75%;
  margin: 3rem auto 0;
`;
const ImageContiner = styled.div`
  width: 12rem;
  height: auto;
`;
const ImageLogo = styled.img`
  width: 100%;
  height: 100%;
`;

export default App;
