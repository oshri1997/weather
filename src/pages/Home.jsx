import React, { useEffect } from "react";
import styled from "styled-components";

import BubbleOne from "../images/BubbleOne.svg";
import BubbleTwo from "../images/BubbleTwo.svg";
import SearchBar from "../components/SearchBar";
import TempCards from "../components/TempCards";
import axios from "axios";
import { setWeather } from "../features/weatherSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=tel-aviv&appid=b0a3a56cdf847e01bafd3230c4409e71&units=metric"
        )
        .then(({ data }) => {
          dispatch(
            setWeather({
              city: data.name,
              temp: data.main.temp,
              description: data.weather[0].description,
            })
          );
        });
    };
    fetchData();
  }, [dispatch]);
  return (
    <>
      <BubbleTop src={BubbleOne} alt="Bubble" />
      <BubbleBottom src={BubbleTwo} alt="Bubble" />
      <GlassContainer>
        <Glass>
          <SearchBar />
          <CardContainer>
            <TempCards />
          </CardContainer>
        </Glass>
      </GlassContainer>
    </>
  );
};

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
const BubbleTop = styled.img`
  position: absolute;
  top: -150px;
  right: -180px;
  height: auto;
  width: 45rem;
`;
const BubbleBottom = styled.img`
  position: absolute;
  bottom: -200px;
  left: 20px;
  height: auto;
  width: 30rem;
`;

const GlassContainer = styled.div`
  margin-top: 1.2rem;
  width: 100vw;
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Glass = styled.div`
  height: 745px;
  width: min(1440px, 95%);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

const CardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export default Home;