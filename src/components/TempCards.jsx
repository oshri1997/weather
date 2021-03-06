import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { selectWeather } from "../features/weatherSlice";
import ReactLoading from "react-loading";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favoriteSlice";
import { selectFavorite } from "../features/favoriteSlice";

const TempCards = () => {
  const weatherState = useSelector(selectWeather);
  const favoriteState = useSelector(selectFavorite);
  const dispatch = useDispatch();
  const [display, isDisplay] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!weatherState.city) {
      const Delay = () => {
        setTimeout(() => {
          isDisplay(true);
        }, 1000);
      };
      Delay();
    } else {
      isDisplay(true);
    }
  }, []);

  useEffect(() => {
    const result = favoriteState.find((fav) => fav.id === weatherState.id);
    if (result) {
      setIsFavorite(true);
    } else setIsFavorite(false);
  }, [favoriteState, weatherState]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(weatherState.id));
      setIsFavorite(!isFavorite);
    } else {
      dispatch(addFavorite(weatherState));
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <Card>
      {display ? (
        <Content>
          {isFavorite ? (
            <FavoriteIconOn onClick={toggleFavorite} />
          ) : (
            <FavoriteIconOff onClick={toggleFavorite} />
          )}
          <CityName>{weatherState.city}</CityName>
          <Temp> {Math.floor(weatherState.temp)}°</Temp>
          <Description>{weatherState.description}</Description>
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
  height: 45rem;
  width: 55rem;
  max-width: 80vw;
  background: linear-gradient(
    to bottom right,
    rgba(69, 246, 165, 1),
    rgba(69, 135, 246, 1)
  );
  border-radius: 15px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  border: 1px solid #fff;
  position: relative;
`;
const FavoriteIconOff = styled(AiOutlineStar)`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  font-size: 3.4rem;
  color: #fff;
  cursor: pointer;
`;
const FavoriteIconOn = styled(AiFillStar)`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  font-size: 3.4rem;
  color: #fff;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 35rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;
const CityName = styled.h1`
  font-size: 5rem;
  color: #fff;
  white-space: nowrap;
`;
const Temp = styled.h1`
  font-size: 8rem;
  color: #fff;
`;
const Description = styled.h1`
  font-size: 4.5rem;
  color: #fff;
  white-space: nowrap;
  display: inline-block;
`;

export default TempCards;
