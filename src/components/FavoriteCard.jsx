import React from "react";
import styled from "styled-components";
const FavoriteCard = ({ cityName, temp }) => {
  return (
    <Card>
      <City>{cityName}</City>
      <Temp>{Math.floor(temp)}°</Temp>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 220px;
  height: 250px;
  background: linear-gradient(
    to bottom right,
    rgba(69, 246, 165, 0.6),
    rgba(69, 135, 246, 0.6)
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  padding: 1.6rem;

  @media screen and (max-width: 359.9px) {
    width: 50vw;
    height: 230px;
  }
`;
const City = styled.h2`
  color: #fff;
  font-size: 2.4rem;
  white-space: nowrap;
  text-shadow: 2.4px 2px rgba(0, 0, 0, 0.7);
`;
const Temp = styled.h4`
  color: #fff;
  font-size: 4rem;
  text-shadow: 2.4px 2px rgba(0, 0, 0, 0.7);
`;

export default FavoriteCard;
