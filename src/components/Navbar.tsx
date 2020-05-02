import React from "react";

import { NavLink } from "react-router-dom";

import styled from "styled-components";

const StyledNavBar = styled.nav`
  height: 3rem;
  display: flex;
  align-items: center;
  background-color: transparent;
  z-index: 1;
`;

const Title = styled(NavLink)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
`;

const NavBarLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin-left: 1rem;
`;

const Navbar = () => {
  return (
    <StyledNavBar>
      <Title to="/">gitFITnerd</Title>
      <NavBarLink to="/workout">ajdlnkajds</NavBarLink>
    </StyledNavBar>
  );
};

export default Navbar;
