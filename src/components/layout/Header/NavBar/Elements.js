import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavBarContainer = styled.nav`
  height: 100px;
  width: 100%;
  padding: 0.5rem 10.5vw 0 15vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 1rem 2vw 0 7vw;
  }
  @media screen and (max-width: 768px) {
    padding: 0.5rem 5vw;
  }
`;

export const Brand = styled.div`
  flex: 0.17;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1024px) and (min-width: 780px) {
    flex: 0.17;
  }
`;
export const Logo = styled.img`
  width: 22.5%;
  height: auto;
  margin-right: 1vw;

  @media screen and (max-width: 480px) {
    width: 50%;
    margin-right: 3vw;
  }
`;
export const BrandTitle = styled.h2`
  font-size: 800;
  font-family: "Hellix-Bold" !important;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 1.4rem;
  line-height: 1.2rem;
  text-align: justify;
  & span {
    color: ${(props) => props.theme.primary};
    letter-spacing: 3.5px;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1rem;
    & span {
      font-size: 1.175rem;
      line-height: 1.15rem;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    line-height: 1rem;
    & span {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }
`;

export const NavSection = styled.div`
  flex: 0.75;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinksContainer = styled.ul`
  height: 100%;
  flex: 0.4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1440px) {
    flex: 0.5;
  }
`;

export const BtnContainer = styled.div`
  height: 100%;
  flex: 0.4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex: 0.5;
  }
`;

export const StyledLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  font-size: 1rem;
  color: ${(props) => props.$color};
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & svg {
    stroke-width: 3.5;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const BorderedLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  font-size: 0.8rem;
  color: ${(props) => props.theme.secondary};
  font-weight: 600;
  border: 1px solid ${(props) => props.$color};
  border-radius: 1.2rem;
  padding: 6px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1rem;

  & svg {
    stroke-width: 3.5;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const CoinImage = styled.img`
  margin-right: 0.3rem;
  width: 35%;
  height: auto;
`;
export const IconWrapper = styled.div`
  height: auto;
  width: auto;
  margin-right: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
