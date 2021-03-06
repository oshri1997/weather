import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setWeather } from "../features/weatherSlice";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const Search = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0a3a56cdf847e01bafd3230c4409e71&units=metric`
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
        setError("");
      })
      .catch(({ response }) => {
        setError(response.data.message);
      });
    setCity("");
  };
  return (
    <>
      <FormContainer>
        <SearchInput
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Type to search"
          type="text"
        />
        <SearchButton onClick={Search} type="submit">
          Search
        </SearchButton>
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </FormContainer>
    </>
  );
};

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 1rem;
  height: 80px;
  width: 100%;

  @media screen and (max-width: 767.9px) {
    flex-direction: column;
    height: 120px;
    justify-content: space-around;
  }
`;
const SearchInput = styled.input`
  width: 40rem;
  height: 5rem;
  background-color: none;
  border: none;
  outline: none;
  padding: 20px 10px 20px 20px;
  border-radius: 25px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  font-size: 18px;

  @media screen and (max-width: 767.9px) {
    width: 75vw;
    height: 2rem;
  }

  ::placeholder {
    color: #555;
    font-size: 1.8rem;
  }
`;

const SearchButton = styled.button`
  height: 5rem;
  width: 13rem;
  outline: none;
  font-size: 1.8rem;
  border: none;
  border-radius: 20px;
  color: #fff;
  margin-left: 10px;
  background-color: rgba(69, 135, 246, 0.8);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in;
  cursor: pointer;

  @media screen and (max-width: 767.9px) {
    min-width: 25vw;
    height: 4rem;
  }

  :active {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(1px);
  }
  :hover {
    background-color: rgba(69, 135, 246, 1);
  }
`;

const ErrorMessage = styled.p`
  position: absolute;
  bottom: -2.5rem;
  left: 2rem;
  font-size: 1.6rem;
  color: red;
`;
export default SearchBar;
