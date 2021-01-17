import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../images/Logo.svg";

const Header = () => {
  return (
    <Nav>
      <LogoLink to="/">
        <ImageLogo src={LogoImg} alt="Logo" />
      </LogoLink>

      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorite">My Favorite</NavLink>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.header`
  width: 75vw;
  height: 80px;
  margin: 0 auto 0;
  padding: 3rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  @media screen and (min-width: 359.9px) and (max-width: 767.9px) {
    min-width: 90vw;
    justify-content: space-around;
  }
  @media screen and (max-width: 359.9px) {
    min-width: 100vw;
    justify-content: space-evenly;
  }
`;

const LogoLink = styled(Link)`
  width: 150px;

  @media screen and (max-width: 359.9px) {
    width: 100px;
  }
`;
const ImageLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const NavMenu = styled.div``;
const NavLink = styled(Link)`
  padding: 0 1rem;
  text-decoration: none;
  font-weight: 600;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  color: rgba(69, 135, 246, 1);

  @media screen and (max-width: 360px) {
    padding: 0 0.5rem;
  }

  :hover {
    color: rgba(69, 246, 165, 1);
  }
`;

export default Header;
