import React, { useEffect } from "react";
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
import { updateFavorite } from "./features/favoriteSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const localFavorites = JSON.parse(localStorage.getItem("Favorites"));
    if (localFavorites) {
      localFavorites.map(async (localFavorite) => {
        await axios
          .get(
            `http://api.openweathermap.org/data/2.5/weather?q=${localFavorite.city}&appid=b0a3a56cdf847e01bafd3230c4409e71&units=metric`
          )
          .then(({ data }) => {
            dispatch(
              updateFavorite({
                id: localFavorite.id,
                city: localFavorite.city,
                temp: data.main.temp,
                description: data.weather[0].description,
              })
            );
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }, [dispatch]);

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
  min-height: 100vh;
  background: linear-gradient(
    to bottom right,
    rgba(69, 135, 246, 0.8),
    rgba(69, 246, 165, 0.8)
  );
  position: relative;
`;

export default App;
