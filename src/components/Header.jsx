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
  margin: 3rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-size: 1.2rem;
  cursor: pointer;
  color: rgba(69, 135, 246, 1);

  :hover {
    color: rgba(69, 246, 165, 1);
  }
`;

export default Header;
