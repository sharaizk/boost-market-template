import React from "react";
import {
  SidebarContainer,
  LinkContainer,
  NavLinks,
  BorderedLink,
  CoinImage,
  ButtonsContainer,
  IconWrapper,
} from "./Elements";
import { FiArrowUpRight } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { useTheme } from "styled-components";
import { coin, avatar } from "utils/assets.config";
import { VscBell } from "react-icons/vsc";
import Badge from "components/custom/Badge";
import Avatar from "components/custom/Avatar";
const Sidebar = ({ isOpen, toggle }) => {
  const theme = useTheme();
  return (
    <SidebarContainer isOpen={isOpen}>
      <LinkContainer>
        <NavLinks to="/" onClick={toggle}>
          Services
        </NavLinks>
        <NavLinks to="/" onClick={toggle}>
          Boosters
        </NavLinks>
        <NavLinks to="/" onClick={toggle}>
          Loyalty
        </NavLinks>
        <NavLinks to="/" onClick={toggle} color={theme.primary}>
          Account Shop <FiArrowUpRight color={theme.primary} />
        </NavLinks>
        <BorderedLink to="/">Dashboard</BorderedLink>
        <BorderedLink to="/" $color={"rgba(32, 35, 38,0.2)"}>
          <CoinImage src={coin} /> 245
        </BorderedLink>
        <ButtonsContainer>
          <IconWrapper>
            <IoChatbubbleOutline size={22} />
          </IconWrapper>
          <IconWrapper>
            <Badge count={2}>
              <VscBell size={22} />
            </Badge>
          </IconWrapper>
          <Avatar src={avatar} alt="avatar" />
        </ButtonsContainer>
      </LinkContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
