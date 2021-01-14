import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FavoriteCard from "../components/FavoriteCard";
import { selectFavorite } from "../features/favoriteSlice";
const Favorite = () => {
  const favoriteState = useSelector(selectFavorite);

  return (
    <Glass>
      <HeaderTitle>My Favorites</HeaderTitle>
      <FavoriteContainer>
        {favoriteState.length > 0 ? (
          favoriteState.map((favorite) => (
            <FavoriteCard
              key={favorite.id}
              cityName={favorite.city}
              temp={favorite.temp}
            />
          ))
        ) : (
          <NoFavorites>No Favorites</NoFavorites>
        )}
      </FavoriteContainer>
    </Glass>
  );
};

const Glass = styled.div`
  height: 745px;
  width: min(1440px, 95%);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  margin: 0 auto;
  overflow-y: auto;
  padding: 2.4rem;
`;
const HeaderTitle = styled.h1`
  padding: 2rem;
  text-align: center;
  color: #fff;
  font-size: 2.6rem;
  font-weight: 600;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.4);
`;
const FavoriteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  column-gap: 3rem;
  row-gap: 2rem;
`;
const NoFavorites = styled.h1`
  color: #fff;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.4);
`;

export default Favorite;
