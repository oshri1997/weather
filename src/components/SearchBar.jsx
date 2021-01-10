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
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0a3a56cdf847e01bafd3230c4409e71&units=metric`
      )
      .then(({ data }) => {
        dispatch(
          setWeather({
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
    <InputConainer>
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
    </InputConainer>
  );
};

const InputConainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  position: relative;
`;
const SearchInput = styled.input`
  width: 400px;
  height: 3rem;
  background-color: none;
  border: none;
  outline: none;
  padding: 20px 10px 20px 20px;
  border-radius: 25px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  font-size: 18px;

  ::placeholder {
    color: #555;
    font-size: 18px;
  }
`;

const SearchButton = styled.button`
  height: 3rem;
  width: 8rem;
  outline: none;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  color: #fff;
  margin-left: 10px;
  background-color: rgba(69, 135, 246, 0.8);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in;
  cursor: pointer;

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
  bottom: -1.5rem;
  left: 10px;

  color: red;
`;
export default SearchBar;
