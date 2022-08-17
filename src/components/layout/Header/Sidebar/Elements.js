import styled from "styled-components";
// import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
  display: none;
  @media screen and (max-width: 870px) {
    position: fixed;
    z-index: 999;
    width: 70%;
    height: 100%;
    background: ${(props) => props.theme.tertiary};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 0%;
    right: 0%;
    transition: 0.3s ease;
    opacity: 100%;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    right: ${({ isOpen }) => (isOpen ? "30%" : "100%")};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 60%;
  width: 100%;
`;

export const NavLinks = styled(NavLink)`
  color: ${(props) => props.color || props.theme.secondary};

  display: flex;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.05s ease-in;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 0.9rem;
  letter-spacing: 1px;
  position: relative;
  transition: 0.3s;
  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 35%;
    z-index: -1;
    opacity: 0;
    border-radius: 10px;
    background-color: ${(props) => props.theme.primary};
    transition: 0.3s;
  }
  &:hover {
    &::after {
      width: 20%;
      opacity: 1;
    }
  }
  &.active {
    border-bottom: 3px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
  }
  & svg {
    stroke-width: 3;
  }
`;

export const BorderedLink = styled(NavLink)`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  font-size: 0.9rem;
  color: ${(props) => props.theme.secondary};
  font-weight: 600;
  border: 1px solid ${(props) => props.$color};
  border-radius: 1.2rem;
  padding: 1.5% 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  margin-right: 1rem;
  margin-top: 2vh;
  & svg {
    stroke-width: 3.5;
  }
  @media screen and (max-width: 1024px) {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const CoinImage = styled.img`
  height: auto;
  margin-right: 0.3rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2vh;
`;

export const IconWrapper = styled.div`
  height: auto;
  width: auto;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
