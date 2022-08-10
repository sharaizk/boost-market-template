import React from "react";
import {
  NavBarContainer,
  Brand,
  Logo,
  BrandTitle,
  LinksContainer,
  BtnContainer,
  NavSection,
  StyledLink,
  BorderedLink,
  CoinImage,
  IconWrapper,
} from "./Elements";
import { brandLogo } from "utils/assets.config";
import { useTheme } from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";
import { coin, avatar } from "utils/assets.config";
import Avatar from "components/custom/Avatar";
import Badge from "components/custom/Badge";
const NavBar = () => {
  const theme = useTheme();
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
        <LinksContainer>
          <StyledLink to="/" $color={theme.secondary}>
            Services
          </StyledLink>
          <StyledLink to="/" $color={theme.secondary}>
            Boosters
          </StyledLink>
          <StyledLink to="/" $color={theme.secondary}>
            Loyalty
          </StyledLink>
          <StyledLink to="/" $color={theme.primary}>
            Account Shop
            <FiArrowUpRight />
          </StyledLink>
        </LinksContainer>
        <BtnContainer>
          <BorderedLink to="/" $color={theme.primary}>
            Dashboard
          </BorderedLink>
          <BorderedLink to="/" $color={"rgba(32, 35, 38,0.2)"}>
            <CoinImage src={coin} /> 245
          </BorderedLink>
          <IconWrapper>
            <IoChatbubbleOutline size={22} />
          </IconWrapper>
          <IconWrapper>
            <Badge count={2}>
              <VscBell size={22} />
            </Badge>
          </IconWrapper>
          <Avatar src={avatar} alt="avatar" />
        </BtnContainer>
      </NavSection>
    </NavBarContainer>
  );
};

export default NavBar;
