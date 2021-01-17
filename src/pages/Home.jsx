import React, { useEffect } from "react";
import styled from "styled-components";

import SearchBar from "../components/SearchBar";
import TempCards from "../components/TempCards";
import axios from "axios";
import { setWeather } from "../features/weatherSlice";
import { useDispatch } from "react-redux";
import { selectWeather } from "../features/weatherSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const weatherState = useSelector(selectWeather);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!weatherState.city) {
      const fetchData = async () => {
        await axios
          .get(
            "https://api.openweathermap.org/data/2.5/weather?q=tel-aviv&appid=b0a3a56cdf847e01bafd3230c4409e71&units=metric"
          )
          .then(({ data }) => {
            dispatch(
              setWeather({
                _id: data.id,
                city: data.name,
                temp: data.main.temp,
                description: data.weather[0].description,
              })
            );
          });
      };
      fetchData();
    }
  }, [dispatch, weatherState]);
  return (
    <>
      <Glass>
        <SearchBar />
        <CardContainer>
          <TempCards />
        </CardContainer>
      </Glass>
    </>
  );
};

const Glass = styled.div`
  margin: 2rem auto 0;
  min-height: 75vh;
  width: min(1440px, 90%);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  z-index: 20;
`;

const CardContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
`;

export default Home;
