import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../images/Logo.svg";

const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <ImageLogo src={LogoImg} alt="Logo" />
      </Link>

      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorite">My Favorite</NavLink>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.header`
  width: 75%;
  height: 80px;
  margin: 0 auto 0;
  padding: 3rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 420px) {
    width: 95%;
  }
`;
const ImageLogo = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 600px) {
    width: 90%;
    height: 90%;
  }
  @media screen and (max-width: 420px) {
    width: 75%;
    height: 75%;
  }
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

  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.3rem;
    padding: 0 0.5rem;
  }

  :hover {
    color: rgba(69, 246, 165, 1);
  }
`;

export default Header;
