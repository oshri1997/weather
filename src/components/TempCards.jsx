import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectWeather } from "../features/weatherSlice";
import ReactLoading from "react-loading";

const TempCards = () => {
  const state = useSelector(selectWeather);
  const [display, isDisplay] = useState(false);
  const { weather } = state;

  useEffect(() => {
    const displayAfterTwoSec = () => {
      setTimeout(() => {
        isDisplay(true);
      }, 1000);
    };
    displayAfterTwoSec();
  }, []);

  return (
    <Card>
      {display ? (
        <Content>
          <CityName>{weather.city}</CityName>
          <Temp> {Math.floor(weather.temp)}°</Temp>
          <Description>{weather.description}</Description>
        </Content>
      ) : (
        <ReactLoading type="bubbles" color="#fff" height={150} width={150} />
      )}
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
  width: 400px;
  background: linear-gradient(
    to bottom right,
    rgba(69, 246, 165, 1),
    rgba(69, 135, 246, 1)
  );
  border-radius: 15px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
  border: 1px solid #fff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;
const CityName = styled.h1`
  font-size: 50px;
  color: #fff;
  white-space: nowrap;
`;
const Temp = styled.h1`
  font-size: 80px;
  color: #fff;
`;
const Description = styled.h1`
  font-size: 45px;
  color: #fff;
  white-space: nowrap;
  display: inline-block;
`;

export default TempCards;
