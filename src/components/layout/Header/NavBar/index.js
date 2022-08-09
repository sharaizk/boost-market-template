import React from "react";
import {
  NavBarContainer,
  Brand,
  Logo,
  BrandTitle,
  LinksContainer,
  BtnContainer,
  NavSection,
} from "./Elements";
import { brandLogo } from "utils/assets.config";
const NavBar = () => {
  return (
    <NavBarContainer>
      <Brand>
        <Logo src={brandLogo} alt="logo" />
        <BrandTitle>
          <span>BOOST</span>
          <br />
          <p>MARKET</p>
        </BrandTitle>
      </Brand>
      <NavSection>
        <LinksContainer>S</LinksContainer>
        <BtnContainer>S</BtnContainer>
      </NavSection>
    </NavBarContainer>
  );
};

export default NavBar;
